import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  border-radius: 12px;
`;

function Waveform() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 200 * dpr;
    canvas.height = 60 * dpr;
    ctx.scale(dpr, dpr);

    // Style for sharp rendering
    canvas.style.width = "200px";
    canvas.style.height = "60px";

    const bars = 20;
    const gap = 6;
    const barWidth = (200 - (bars - 1) * gap) / bars;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient with actual color values
      const gradient = ctx.createLinearGradient(0, 0, 200, 0);
      gradient.addColorStop(0, "#227f85"); // --primary color value
      gradient.addColorStop(1, "#ecb56a"); // --secondary color value
      ctx.fillStyle = gradient;

      // Draw animated bars
      for (let i = 0; i < bars; i++) {
        const x = i * (barWidth + gap);
        const height =
          Math.abs(Math.sin(Date.now() * 0.003 + i * 0.3)) * 40 + 10;
        const y = (60 - height) / 2;

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, height, 4);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}

export default Waveform;
