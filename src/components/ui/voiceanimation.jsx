import { cn } from "@/lib/utils";
import React from "react";

const VoiceAnimation = ({className}) => {
  return (
    <>
      <style>{`
        .voice-loader {
          --color-one: #ffbf48;
          --color-two: #be4a1d;
          --color-three: #ffbf4780;
          --color-four: #bf4a1d80;
          --color-five: #ffbf4740;
          --time-animation: 2s;
          --size: 1;
          border-radius: 50%;
          transform: scale(var(--size));
          box-shadow:
            0 0 25px 0 var(--color-three),
            0 20px 50px 0 var(--color-four);
          animation: colorize calc(var(--time-animation) * 3) ease-in-out infinite;
        }

        .voice-loader::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border-top: solid 1px var(--color-one);
          border-bottom: solid 1px var(--color-two);
          background: linear-gradient(180deg, var(--color-five), var(--color-four));
          box-shadow:
            inset 0 10px 10px 0 var(--color-three),
            inset 0 -10px 10px 0 var(--color-four);
        }

        .voice-loader .box {
          width: 100px;
          height: 100px;
          background: linear-gradient(
            180deg,
            var(--color-one) 30%,
            var(--color-two) 70%
          );
          mask: url(#clipping);
          -webkit-mask: url(#clipping);
        }

        .voice-loader svg {
          position: absolute;
        }

        .voice-loader svg #clipping {
          filter: contrast(15);
          animation: roundness calc(var(--time-animation) / 2) linear infinite;
        }

        .voice-loader svg #clipping polygon {
          filter: blur(7px);
        }

        .voice-loader svg #clipping polygon:nth-child(1) {
          transform-origin: 75% 25%;
          transform: rotate(90deg);
        }

        .voice-loader svg #clipping polygon:nth-child(2) {
          transform-origin: 50% 50%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }

        .voice-loader svg #clipping polygon:nth-child(3) {
          transform-origin: 50% 60%;
          animation: rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -3);
        }

        .voice-loader svg #clipping polygon:nth-child(4) {
          transform-origin: 40% 40%;
          animation: rotation var(--time-animation) linear infinite reverse;
        }

        .voice-loader svg #clipping polygon:nth-child(5) {
          transform-origin: 40% 40%;
          animation: rotation var(--time-animation) linear infinite reverse;
          animation-delay: calc(var(--time-animation) / -2);
        }

        .voice-loader svg #clipping polygon:nth-child(6) {
          transform-origin: 60% 40%;
          animation: rotation var(--time-animation) linear infinite;
        }

        .voice-loader svg #clipping polygon:nth-child(7) {
          transform-origin: 60% 40%;
          animation: rotation var(--time-animation) linear infinite;
          animation-delay: calc(var(--time-animation) / -1.5);
        }

        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes roundness {
          0%, 60%, 100% { filter: contrast(15); }
          20%, 40% { filter: contrast(3); }
        }

        @keyframes colorize {
          0% { filter: hue-rotate(0deg); }
          20% { filter: hue-rotate(-30deg); }
          40% { filter: hue-rotate(-60deg); }
          60% { filter: hue-rotate(-90deg); }
          80% { filter: hue-rotate(-45deg); }
          100% { filter: hue-rotate(0deg); }
        }
      `}</style>

      <div className={cn("flex  justify-center bg-transparent  items-center h-full w-20 relative",className)}>
        <div className="voice-loader relative flex items-center justify-center">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <mask id="clipping">
                <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
                <polygon points="25,25 75,25 50,75" fill="white"></polygon>
                <polygon points="50,25 75,75 25,75" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              </mask>
            </defs>
          </svg>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
};

export default VoiceAnimation;
