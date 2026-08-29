import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update inner dot instantly with 0ms input lag
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${isHovering ? 0 : 1})`;
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;

      if (isClickable) {
        if (!isHovering) {
          isHovering = true;
          dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(0)`;
          ring.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0) scale(1.5)`;
          ring.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      } else if (isHovering) {
        isHovering = false;
        dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(1)`;
        ring.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0) scale(1)`;
        ring.style.backgroundColor = 'transparent';
      }
    };

    const render = () => {
      // Silky linear interpolation for outer trailing ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      const ringScale = isHovering ? 1.5 : 1;
      ring.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0) scale(${ringScale})`;

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('pointerover', onPointerOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 border border-white/50 rounded-full pointer-events-none z-[9998] hidden md:block will-change-transform transition-colors duration-200"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

