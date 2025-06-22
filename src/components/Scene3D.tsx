
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Mesh } from 'three';

const InteractiveGeometry: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation animation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      
      // Interactive scaling
      const targetScale = hovered ? 1.8 : clicked ? 1.3 : 1.5;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    }
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      {/* Main rotating cube */}
      <mesh
        ref={meshRef}
        scale={[1.5, 1.5, 1.5]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#764ba2" : clicked ? "#f093fb" : "#667eea"}
          metalness={0.7}
          roughness={0.3}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting spheres */}
      <OrbitingSphere position={[3, 0, 0]} speed={1} color="#667eea" />
      <OrbitingSphere position={[-3, 0, 0]} speed={-1.5} color="#764ba2" />
      <OrbitingSphere position={[0, 3, 0]} speed={2} color="#f093fb" />
    </>
  );
};

const OrbitingSphere: React.FC<{ position: [number, number, number]; speed: number; color: string }> = ({ 
  position, 
  speed, 
  color 
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed;
      meshRef.current.position.x = Math.cos(time) * 2;
      meshRef.current.position.z = Math.sin(time) * 2;
      meshRef.current.rotation.x = time;
      meshRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const Scene3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#667eea" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#f093fb"
      />
      <InteractiveGeometry />
    </Canvas>
  );
};

export default Scene3D;
