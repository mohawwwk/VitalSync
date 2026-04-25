"use client";

import React, { useEffect, useRef } from "react";
import { useScreenSize } from "@/hooks/use-screen-size";

interface PixelTrailProps {
  color?: string;
  pixelSize?: number;
  fadeSpeed?: number;
}

export const PixelTrail: React.FC<PixelTrailProps> = ({
  color = "#7B6EF6",
  pixelSize = 20,
  fadeSpeed = 0.05,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useScreenSize();
  const pixels = useRef<{ x: number; y: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.floor(e.clientX / pixelSize) * pixelSize;
      const y = Math.floor(e.clientY / pixelSize) * pixelSize;
      
      if (!pixels.current.find(p => p.x === x && p.y === y)) {
        pixels.current.push({ x, y, alpha: 1 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      pixels.current = pixels.current.filter(p => p.alpha > 0);
      
      pixels.current.forEach(p => {
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
        p.alpha -= fadeSpeed;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [width, height, color, pixelSize, fadeSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: "url(#gooey-filter)" }}
    />
  );
};
