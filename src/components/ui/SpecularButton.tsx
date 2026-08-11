import { useRef, useEffect, CSSProperties, ReactNode, MouseEventHandler } from 'react';
import './SpecularButton.css';

type ButtonSize = 'sm' | 'md' | 'lg';

export interface SpecularButtonProps {
  children?: ReactNode;
  size?: ButtonSize;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
}

const SpecularButton = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#ffffff',
  tintOpacity = 0,
  blur = 0,
  textColor = '#D7E2EA',
  intensity = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style
}: SpecularButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const btn = btnRef.current;
    const canvas = canvasRef.current;
    if (!btn || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = btn.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(btn);
    resize();

    let pointerAngle: number | null = null;
    let proximityT = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);

      if (dist === 0) {
        isHoveredRef.current = true;
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (cy - e.clientY) / (rect.height / 2);
        pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.4 + ny * 0.2;
      } else {
        isHoveredRef.current = false;
        pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx);
      }

      const t = Math.max(0, 1 - dist / Math.max(proximity, 1));
      proximityT = t * t * (3 - 2 * t);
    };

    window.addEventListener('pointermove', onPointerMove);

    let angle = 2.4;
    let idleAngle = 2.4;
    let bright = 0.4;
    let last = performance.now();
    let raf = 0;

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      idleAngle += speed * dt;
      const steer = followMouse && pointerAngle != null && (!autoAnimate || proximityT > 0 || isHoveredRef.current);
      const target = steer && pointerAngle != null ? pointerAngle : idleAngle;
      const diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      angle += diff * (1 - Math.exp(-dt * 9));

      const brightTarget = isHoveredRef.current 
        ? 1.6 
        : (autoAnimate ? 1 : Math.max(proximityT, 0.4));

      bright += (brightTarget - bright) * (1 - Math.exp(-dt * 10));

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (width <= 0 || height <= 0) return;

      ctx.save();
      ctx.scale(dpr, dpr);

      const cx = width / 2;
      const cy = height / 2;
      const rx = width / 2;
      const ry = height / 2;

      // Calculate specular light gradient line
      const lx = Math.cos(angle);
      const ly = -Math.sin(angle);

      const x1 = cx - lx * rx;
      const y1 = cy - ly * ry;
      const x2 = cx + lx * rx;
      const y2 = cy + ly * ry;

      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      const alpha = Math.min(1.5, Math.max(0.2, bright * intensity));

      if (isHoveredRef.current) {
        grad.addColorStop(0, `rgba(255, 255, 255, 0.15)`);
        grad.addColorStop(0.3, `rgba(215, 226, 234, 0.4)`);
        grad.addColorStop(0.85, `rgba(255, 255, 255, 1.0)`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0.45)`);
      } else {
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.08 * alpha})`);
        grad.addColorStop(0.4, `rgba(215, 226, 234, ${0.25 * alpha})`);
        grad.addColorStop(0.85, `rgba(255, 255, 255, ${0.9 * alpha})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${0.35 * alpha})`);
      }

      const r = Math.min(radius, Math.min(width, height) / 2);

      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(0.75, 0.75, width - 1.5, height - 1.5, r);
      } else {
        ctx.rect(0.75, 0.75, width - 1.5, height - 1.5);
      }
      ctx.strokeStyle = grad;
      ctx.lineWidth = isHoveredRef.current ? 2.0 : 1.5;
      ctx.stroke();

      ctx.restore();
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [radius, intensity, speed, followMouse, proximity, autoAnimate]);

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      className={`specular-button specular-button--${size}${className ? ` ${className}` : ''}`}
      style={
        {
          '--sb-radius': `${radius}px`,
          '--sb-tint': tint,
          '--sb-tint-opacity': tintOpacity,
          '--sb-blur': `${blur}px`,
          '--sb-text-color': textColor,
          ...style
        } as CSSProperties
      }
    >
      <span className="specular-button__fx" aria-hidden="true">
        <canvas ref={canvasRef} />
      </span>
      <span className="specular-button__label">{children}</span>
    </button>
  );
};

export default SpecularButton;
