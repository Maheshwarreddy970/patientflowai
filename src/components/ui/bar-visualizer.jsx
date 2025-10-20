"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function createAudioAnalyser(mediaStream, options = {}) {
  const audioContext = new (window.AudioContext ||
    window.webkitAudioContext)();
  const source = audioContext.createMediaStreamSource(mediaStream);
  const analyser = audioContext.createAnalyser();

  if (options.fftSize) analyser.fftSize = options.fftSize;
  if (options.smoothingTimeConstant !== undefined)
    analyser.smoothingTimeConstant = options.smoothingTimeConstant;
  if (options.minDecibels !== undefined)
    analyser.minDecibels = options.minDecibels;
  if (options.maxDecibels !== undefined)
    analyser.maxDecibels = options.maxDecibels;

  source.connect(analyser);

  const cleanup = () => {
    source.disconnect();
    audioContext.close();
  };

  return { analyser, audioContext, cleanup };
}

export function useAudioVolume(mediaStream, options = { fftSize: 32, smoothingTimeConstant: 0 }) {
  const [volume, setVolume] = useState(0);
  const volumeRef = useRef(0);
  const frameId = useRef();

  const memoizedOptions = useMemo(() => options, [
    options.fftSize,
    options.smoothingTimeConstant,
    options.minDecibels,
    options.maxDecibels,
  ]);

  useEffect(() => {
    if (!mediaStream) {
      setVolume(0);
      volumeRef.current = 0;
      return;
    }

    const { analyser, cleanup } = createAudioAnalyser(mediaStream, memoizedOptions);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let lastUpdate = 0;
    const updateInterval = 1000 / 30;

    const updateVolume = (timestamp) => {
      if (timestamp - lastUpdate >= updateInterval) {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i] * dataArray[i];
        }
        const newVolume = Math.sqrt(sum / dataArray.length) / 255;

        if (Math.abs(newVolume - volumeRef.current) > 0.01) {
          volumeRef.current = newVolume;
          setVolume(newVolume);
        }
        lastUpdate = timestamp;
      }
      frameId.current = requestAnimationFrame(updateVolume);
    };

    frameId.current = requestAnimationFrame(updateVolume);

    return () => {
      cleanup();
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [mediaStream, memoizedOptions]);

  return volume;
}

const multibandDefaults = {
  bands: 5,
  loPass: 100,
  hiPass: 600,
  updateInterval: 32,
  analyserOptions: { fftSize: 2048 },
};

const normalizeDb = (value) => {
  if (value === -Infinity) return 0;
  const minDb = -100;
  const maxDb = -10;
  const db = 1 - (Math.max(minDb, Math.min(maxDb, value)) * -1) / 100;
  return Math.sqrt(db);
};

export function useMultibandVolume(mediaStream, options = {}) {
  const opts = useMemo(() => ({ ...multibandDefaults, ...options }), [
    options.bands,
    options.loPass,
    options.hiPass,
    options.updateInterval,
    options.analyserOptions?.fftSize,
    options.analyserOptions?.smoothingTimeConstant,
    options.analyserOptions?.minDecibels,
    options.analyserOptions?.maxDecibels,
  ]);

  const [frequencyBands, setFrequencyBands] = useState(() =>
    new Array(opts.bands).fill(0)
  );
  const bandsRef = useRef(new Array(opts.bands).fill(0));
  const frameId = useRef();

  useEffect(() => {
    if (!mediaStream) {
      const emptyBands = new Array(opts.bands).fill(0);
      setFrequencyBands(emptyBands);
      bandsRef.current = emptyBands;
      return;
    }

    const { analyser, cleanup } = createAudioAnalyser(mediaStream, opts.analyserOptions);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);
    const sliceStart = opts.loPass;
    const sliceEnd = opts.hiPass;
    const sliceLength = sliceEnd - sliceStart;
    const chunkSize = Math.ceil(sliceLength / opts.bands);

    let lastUpdate = 0;
    const updateInterval = opts.updateInterval;

    const updateVolume = (timestamp) => {
      if (timestamp - lastUpdate >= updateInterval) {
        analyser.getFloatFrequencyData(dataArray);
        const chunks = new Array(opts.bands);

        for (let i = 0; i < opts.bands; i++) {
          let sum = 0;
          let count = 0;
          const startIdx = sliceStart + i * chunkSize;
          const endIdx = Math.min(sliceStart + (i + 1) * chunkSize, sliceEnd);

          for (let j = startIdx; j < endIdx; j++) {
            sum += normalizeDb(dataArray[j]);
            count++;
          }

          chunks[i] = count > 0 ? sum / count : 0;
        }

        let hasChanged = false;
        for (let i = 0; i < chunks.length; i++) {
          if (Math.abs(chunks[i] - bandsRef.current[i]) > 0.01) {
            hasChanged = true;
            break;
          }
        }

        if (hasChanged) {
          bandsRef.current = chunks;
          setFrequencyBands(chunks);
        }

        lastUpdate = timestamp;
      }

      frameId.current = requestAnimationFrame(updateVolume);
    };

    frameId.current = requestAnimationFrame(updateVolume);

    return () => {
      cleanup();
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [mediaStream, opts]);

  return frequencyBands;
}

export const useBarAnimator = (state, columns, interval) => {
  const indexRef = useRef(0);
  const [currentFrame, setCurrentFrame] = useState([]);
  const animationFrameId = useRef(null);

  const sequence = useMemo(() => {
    if (state === "thinking" || state === "listening") {
      return generateListeningSequenceBar(columns);
    } else if (state === "connecting" || state === "initializing") {
      return generateConnectingSequenceBar(columns);
    } else if (state === undefined || state === "speaking") {
      return [new Array(columns).fill(0).map((_, idx) => idx)];
    } else {
      return [[]];
    }
  }, [state, columns]);

  useEffect(() => {
    indexRef.current = 0;
    setCurrentFrame(sequence[0] || []);
  }, [sequence]);

  useEffect(() => {
    let startTime = performance.now();

    const animate = (time) => {
      const timeElapsed = time - startTime;

      if (timeElapsed >= interval) {
        indexRef.current = (indexRef.current + 1) % sequence.length;
        setCurrentFrame(sequence[indexRef.current] || []);
        startTime = time;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [interval, sequence]);

  return currentFrame;
};

const generateConnectingSequenceBar = (columns) => {
  const seq = [];
  for (let x = 0; x < columns; x++) {
    seq.push([x, columns - 1 - x]);
  }
  return seq;
};

const generateListeningSequenceBar = (columns) => {
  const center = Math.floor(columns / 2);
  const noIndex = -1;
  return [[center], [noIndex]];
};

const BarVisualizerComponent = React.forwardRef(
  (
    {
      state,
      barCount = 15,
      mediaStream,
      minHeight = 20,
      maxHeight = 100,
      demo = false,
      centerAlign = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const realVolumeBands = useMultibandVolume(mediaStream, {
      bands: barCount,
      loPass: 100,
      hiPass: 200,
    });

    const fakeVolumeBandsRef = useRef(new Array(barCount).fill(0.2));
    const [fakeVolumeBands, setFakeVolumeBands] = useState(
      new Array(barCount).fill(0.2)
    );
    const fakeAnimationRef = useRef();

    useEffect(() => {
      if (!demo) return;

      if (state !== "speaking" && state !== "listening") {
        const bands = new Array(barCount).fill(0.2);
        fakeVolumeBandsRef.current = bands;
        setFakeVolumeBands(bands);
        return;
      }

      let lastUpdate = 0;
      const updateInterval = 50;
      const startTime = Date.now() / 1000;

      const updateFakeVolume = (timestamp) => {
        if (timestamp - lastUpdate >= updateInterval) {
          const time = Date.now() / 1000 - startTime;
          const newBands = new Array(barCount);

          for (let i = 0; i < barCount; i++) {
            const waveOffset = i * 0.5;
            const baseVolume = Math.sin(time * 2 + waveOffset) * 0.3 + 0.5;
            const randomNoise = Math.random() * 0.2;
            newBands[i] = Math.max(0.1, Math.min(1, baseVolume + randomNoise));
          }

          let hasChanged = false;
          for (let i = 0; i < barCount; i++) {
            if (Math.abs(newBands[i] - fakeVolumeBandsRef.current[i]) > 0.05) {
              hasChanged = true;
              break;
            }
          }

          if (hasChanged) {
            fakeVolumeBandsRef.current = newBands;
            setFakeVolumeBands(newBands);
          }

          lastUpdate = timestamp;
        }

        fakeAnimationRef.current = requestAnimationFrame(updateFakeVolume);
      };

      fakeAnimationRef.current = requestAnimationFrame(updateFakeVolume);

      return () => {
        if (fakeAnimationRef.current)
          cancelAnimationFrame(fakeAnimationRef.current);
      };
    }, [demo, state, barCount]);

    const volumeBands = useMemo(
      () => (demo ? fakeVolumeBands : realVolumeBands),
      [demo, fakeVolumeBands, realVolumeBands]
    );

    const highlightedIndices = useBarAnimator(
      state,
      barCount,
      state === "connecting"
        ? 2000 / barCount
        : state === "thinking"
        ? 150
        : state === "listening"
        ? 500
        : 1000
    );

    return (
      <div
        ref={ref}
        data-state={state}
        className={cn(
          "relative flex justify-center gap-1.5",
          centerAlign ? "items-center" : "items-end",
          "h-32 w-full overflow-hidden  p-4",
          className
        )}
        style={style}
        {...props}
      >
        {volumeBands.map((volume, index) => {
          const heightPct = Math.min(maxHeight, Math.max(minHeight, volume * 100 + 5));
          const isHighlighted = highlightedIndices?.includes(index) ?? false;

          return (
            <Bar
              key={index}
              heightPct={heightPct}
              isHighlighted={isHighlighted}
              state={state}
            />
          );
        })}
      </div>
    );
  }
);

const Bar = React.memo(({ heightPct, isHighlighted, state }) => (
  <div
    data-highlighted={isHighlighted}
    className={cn(
      "max-w-[12px] min-w-[8px] flex-1 transition-all duration-150",
      "rounded-full",
      "bg-border data-[highlighted=true]:bg-primary",
      state === "speaking" && "bg-primary",
      state === "thinking" && isHighlighted && "animate-pulse"
    )}
    style={{
      height: `${heightPct}%`,
      animationDuration: state === "thinking" ? "300ms" : undefined,
    }}
  />
));

Bar.displayName = "Bar";

const BarVisualizer = React.memo(BarVisualizerComponent, (prev, next) => {
  return (
    prev.state === next.state &&
    prev.barCount === next.barCount &&
    prev.mediaStream === next.mediaStream &&
    prev.minHeight === next.minHeight &&
    prev.maxHeight === next.maxHeight &&
    prev.demo === next.demo &&
    prev.centerAlign === next.centerAlign &&
    prev.className === next.className &&
    JSON.stringify(prev.style) === JSON.stringify(next.style)
  );
});

BarVisualizerComponent.displayName = "BarVisualizerComponent";
BarVisualizer.displayName = "BarVisualizer";

export { BarVisualizer };
