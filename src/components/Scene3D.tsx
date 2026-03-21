import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Mesh, CanvasTexture } from 'three';
import { useTheme } from '@/contexts/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface Scene3DProps {
  width?: number;
  height?: number;
}

const InteractiveGeometry: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  // Theme-based color schemes with proper tuple typing
  const colorSchemes = useMemo(() => ({
    light: {
      cube: ['#667eea', '#764ba2', '#f093fb'] as const,
      sphere1: ['#667eea', '#764ba2'] as [string, string],
      sphere2: ['#764ba2', '#f093fb'] as [string, string],
      sphere3: ['#f093fb', '#667eea'] as [string, string]
    },
    dark: {
      cube: ['#4f46e5', '#7c3aed', '#ec4899'] as const,
      sphere1: ['#4f46e5', '#7c3aed'] as [string, string],
      sphere2: ['#7c3aed', '#ec4899'] as [string, string],
      sphere3: ['#ec4899', '#4f46e5'] as [string, string]
    }
  }), []);

  const currentColors = colorSchemes[theme];

  // Create gradient texture for the cube based on theme
  const cubeTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    if (context) {
      const gradient = context.createLinearGradient(0, 0, 256, 256);
      gradient.addColorStop(0, currentColors.cube[0]);
      gradient.addColorStop(0.5, currentColors.cube[1]);
      gradient.addColorStop(1, currentColors.cube[2]);
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, 256, 256);
    }
    
    return new CanvasTexture(canvas);
  }, [currentColors.cube]);

  useFrame((state) => {
    if (meshRef.current) {
      // Reduce animation intensity on mobile for better performance
      const rotationSpeed = isMobile ? 0.2 : 0.5;
      const yRotationSpeed = isMobile ? 0.15 : 0.3;
      
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.y = state.clock.elapsedTime * yRotationSpeed;
      
      if (hovered && !isMobile) {
        meshRef.current.scale.setScalar(1.1);
      } else if (clicked && !isMobile) {
        meshRef.current.scale.setScalar(0.9);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    if (!isMobile) {
      setHovered(true);
    }
  };

  const handlePointerOut = () => {
    if (!isMobile) {
      setHovered(false);
    }
  };

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (!isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <group>
      {/* Main rotating cube with gradient texture */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial {...({ map: cubeTexture } as any)} />
      </mesh>

      {/* Orbiting spheres - reduce complexity on mobile */}
      {!isMobile && (
        <>
          <OrbitingSphere
            position={[0, -3, 0]}
            colors={currentColors.sphere1}
            speed={1}
            radius={2}
            size={0.5}
          />
          <OrbitingSphere
            position={[3, 0, 0]}
            colors={currentColors.sphere2}
            speed={-1.5}
            radius={3}
            size={0.5}
          />
          <OrbitingSphere
            position={[0, 3, 0]}
            colors={currentColors.sphere3}
            speed={1}
            radius={2}
            size={0.6}
          />
        </>
      )}
    </group>
  );
};

const OrbitingSphere: React.FC<{
  position: [number, number, number];
  colors: [string, string];
  speed: number;
  radius: number;
  size: number;
}> = ({ position, colors, speed, radius, size }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed;
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
      meshRef.current.rotation.x = time * 2;
      meshRef.current.rotation.y = time * 1.5;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = () => setHovered(false);

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial {...({ color: colors[0] } as any)} />
    </mesh>
  );
};

interface Scene3DProps {
  width?: number;
  height?: number;
}

const Scene3D: React.FC<Scene3DProps> = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }} // Reduce performance requirements on mobile
        dpr={isMobile ? 1 : 2} // Lower pixel ratio on mobile for better performance
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <InteractiveGeometry />
      </Canvas>
    </div>
  );
};

export default Scene3D;