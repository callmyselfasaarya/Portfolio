import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX: number;
  targetY: number;
  originalX: number;
  originalY: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  growing: boolean;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastMouseMoveRef = useRef<number>(0);

  const createRipple = useCallback((x: number, y: number) => {
    ripplesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: Math.random() * 100 + 50,
      opacity: 0.8,
      growing: true,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);

      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          targetX: x,
          targetY: y,
          originalX: x,
          originalY: y,
        });
      }

      particlesRef.current = particles;
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const currentTime = Date.now();
      const timeSinceMouseMove = currentTime - lastMouseMoveRef.current;

      particles.forEach((particle) => {
        // Mouse interaction with smooth following
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150 && timeSinceMouseMove < 100) {
          // Mouse attraction
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.02;
          particle.vy += Math.sin(angle) * force * 0.02;
          
          // Increase opacity when near mouse
          particle.opacity = Math.min(0.9, particle.opacity + force * 0.1);
        } else {
          // Return to original position when mouse is away
          const returnForce = 0.01;
          particle.vx += (particle.originalX - particle.x) * returnForce;
          particle.vy += (particle.originalY - particle.y) * returnForce;
          
          // Return to normal opacity
          particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }

        // Update position with velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Velocity damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      });

      // Update ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        
        if (ripple.growing) {
          ripple.radius += 3;
          ripple.opacity -= 0.02;
          
          if (ripple.radius >= ripple.maxRadius) {
            ripple.growing = false;
          }
        }
        
        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Draw connections first
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = `rgba(102, 126, 234, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(102, 126, 234, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(118, 75, 162, ${particle.opacity * 0.3})`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw ripples
      const ripples = ripplesRef.current;
      ripples.forEach((ripple) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(102, 126, 234, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner ripple
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(240, 147, 251, ${ripple.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMouseMoveRef.current = Date.now();
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
      
      // Create multiple ripples for more effect
      setTimeout(() => createRipple(e.clientX + Math.random() * 40 - 20, e.clientY + Math.random() * 40 - 20), 100);
      setTimeout(() => createRipple(e.clientX + Math.random() * 60 - 30, e.clientY + Math.random() * 60 - 30), 200);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [createRipple]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default ParticleBackground;