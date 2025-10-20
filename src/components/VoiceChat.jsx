"use client";

import { Mic, Volume2, VolumeX, Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function VoiceChat({
  onStart,
  onStop,
  onVolumeChange,
  className,
  demoMode = true,
}) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [particles, setParticles] = useState([]);
  const [waveformData, setWaveformData] = useState(Array(32).fill(0));
  const intervalRef = useRef();
  const animationRef = useRef();

  // Generate ambient particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 400,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles manually
  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.velocity.x + 400) % 400,
          y: (p.y + p.velocity.y + 400) % 400,
          opacity: Math.max(0.1, Math.min(0.6, p.opacity + (Math.random() - 0.5) * 0.05)),
        }))
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Timer + waveform
  useEffect(() => {
    if (isListening) {
      intervalRef.current = setInterval(() => {
        setDuration((d) => d + 1);
        const newWave = Array(32)
          .fill(0)
          .map(() => Math.random() * 100);
        setWaveformData(newWave);
        const vol = Math.random() * 100;
        setVolume(vol);
        onVolumeChange?.(vol);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      setWaveformData(Array(32).fill(0));
      setVolume(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [isListening]);

  // Demo mode auto loop
  useEffect(() => {
    if (!demoMode) return;
    const loop = async () => {
      setIsListening(true);
      onStart?.();
      await new Promise((r) => setTimeout(r, 3000));

      setIsListening(false);
      setIsProcessing(true);
      onStop?.(duration);
      await new Promise((r) => setTimeout(r, 2000));

      setIsProcessing(false);
      setIsSpeaking(true);
      await new Promise((r) => setTimeout(r, 4000));

      setIsSpeaking(false);
      setDuration(0);
      setTimeout(loop, 2000);
    };
    const t = setTimeout(loop, 1000);
    return () => clearTimeout(t);
  }, [demoMode, duration]);

  const toggleListening = () => {
    if (demoMode) return;
    if (isListening) {
      setIsListening(false);
      onStop?.(duration);
      setDuration(0);
    } else {
      setIsListening(true);
      onStart?.();
    }
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const getStatusText = () =>
    isListening
      ? "Listening..."
      : isProcessing
      ? "Processing..."
      : isSpeaking
      ? "Speaking..."
      : "Tap to speak";

  const getColor = () =>
    isListening
      ? "text-blue-400"
      : isProcessing
      ? "text-yellow-400"
      : isSpeaking
      ? "text-green-400"
      : "text-muted-foreground";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden",
        className
      )}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-primary/20 rounded-full animate-pulse-soft"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Glow backdrop */}
      <div
        className={cn(
          "absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10",
          isListening ? "animate-glow-strong" : "animate-glow-soft"
        )}
      />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Mic button */}
        <button
          onClick={toggleListening}
          className={cn(
            "relative w-32 h-32 rounded-full flex items-center justify-center border-2 transition-all duration-500",
            "bg-gradient-to-br from-primary/20 to-primary/10",
            isListening
              ? "border-blue-500 shadow-blue-500/40 animate-pulse-ring"
              : isProcessing
              ? "border-yellow-500 shadow-yellow-500/40"
              : isSpeaking
              ? "border-green-500 shadow-green-500/40"
              : "border-border hover:border-primary/50"
          )}
        >
          {isProcessing ? (
            <Loader2 className="w-12 h-12 text-yellow-500 animate-spin" />
          ) : isSpeaking ? (
            <Volume2 className="w-12 h-12 text-green-500" />
          ) : isListening ? (
            <Mic className="w-12 h-12 text-blue-500" />
          ) : (
            <Mic className="w-12 h-12 text-muted-foreground" />
          )}
        </button>

        {/* Waveform bars */}
        <div className="flex items-center justify-center space-x-1 h-16">
          {waveformData.map((h, i) => (
            <div
              key={i}
              className={cn(
                "w-1 rounded-full transition-all duration-75",
                isListening
                  ? "bg-blue-500"
                  : isProcessing
                  ? "bg-yellow-500"
                  : isSpeaking
                  ? "bg-green-500"
                  : "bg-muted"
              )}
              style={{
                height: `${Math.max(4, h * 0.6)}px`,
                opacity: isListening || isSpeaking ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        {/* Status */}
        <div className="text-center space-y-2">
          <p className={cn("text-lg font-medium", getColor(), "animate-fade")}>
            {getStatusText()}
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            {formatTime(duration)}
          </p>

          {volume > 0 && (
            <div className="flex items-center justify-center space-x-2">
              <VolumeX className="w-4 h-4 text-muted-foreground" />
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-100"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <Volume2 className="w-4 h-4 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground animate-fade-slow">
          <Sparkles className="w-4 h-4" />
          <span>AI Voice Assistant</span>
        </div>
      </div>
    </div>
  );
}
