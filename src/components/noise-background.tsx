"use client";

import { useEffect, useRef } from "react";

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const renderNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(renderNoise);
    };

    resize();
    window.addEventListener("resize", resize);
    renderNoise();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Deep black base with subtle gradient */}
      <div
        className="fixed inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)",
        }}
      />

      {/* TV Static noise canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-[0.12] mix-blend-screen"
      />

      {/* Ambient light - top */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
        }}
      />

      {/* Central spotlight glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Deep vignette for cinematic depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 25%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Subtle scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)",
        }}
      />

      {/* Corner shadows for extra depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px 100px rgba(0,0,0,0.3)",
        }}
      />
    </>
  );
}
