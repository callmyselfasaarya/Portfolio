import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();

      // Fast-exit if pointer is far outside container padding box
      if (
        e.clientX < left - padding ||
        e.clientX > left + width + padding ||
        e.clientY < top - padding ||
        e.clientY > top + height + padding
      ) {
        if (isActive) {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
        return;
      }

      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      
      const distance = Math.sqrt(distX * distX + distY * distY);
      const isWithinPadding = distance < (Math.max(width, height) / 2 + padding);
      
      if (isWithinPadding) {
        setIsActive(true);
        setPosition({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};
