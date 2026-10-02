"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useEffect, useRef } from "react";
import animation from "./logo-animation.json";

export default function AnimatedLogo() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sheet = new window.Image();
    let request = 0;
    let disposed = false;
    const { width, height, columns, durations } = animation;
    const introDuration = durations.reduce((sum, duration) => sum + duration, 0);
    const loopStart = Math.max(0, durations.length - 3);
    const loopDuration = durations.slice(loopStart).reduce((sum, duration) => sum + duration, 0);

    function draw(frame: number) {
      canvas!.style.backgroundImage = "none";
      context!.clearRect(0, 0, width, height);
      context!.drawImage(sheet, (frame % columns) * width, Math.floor(frame / columns) * height,
        width, height, 0, 0, width, height);
    }

    function play() {
      cancelAnimationFrame(request);
      if (disposed || !sheet.complete || !sheet.naturalWidth) return;
      if (reducedMotion.matches) {
        draw(durations.length - 1);
        return;
      }
      let start: number | undefined;
      let previousFrame = -1;
      function tick(now: number) {
        start ??= now;
        const elapsed = now - start;
        let remaining = elapsed < introDuration ? elapsed : (elapsed - introDuration) % loopDuration;
        let frame = elapsed < introDuration ? 0 : loopStart;
        while (frame < durations.length - 1 && remaining >= durations[frame]) {
          remaining -= durations[frame++];
        }
        if (frame !== previousFrame) draw(frame);
        previousFrame = frame;
        request = requestAnimationFrame(tick);
      }
      request = requestAnimationFrame(tick);
    }

    sheet.onload = play;
    sheet.src = "/assets/logo-animation.png";
    reducedMotion.addEventListener("change", play);
    return () => {
      disposed = true;
      cancelAnimationFrame(request);
      sheet.onload = null;
      reducedMotion.removeEventListener("change", play);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={animation.width}
      height={animation.height}
      role="img"
      aria-label={t("Pobe Poxo Logo")}
      className="mb-8 h-auto w-[340px] max-w-[calc(100vw-2rem)]"
      style={{ backgroundImage: "url('/assets/logo-still.png')", backgroundSize: "100% 100%" }}
    />
  );
}
