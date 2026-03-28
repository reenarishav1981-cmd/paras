"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HologramIndia() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2} position={[3, 1, -2]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial 
          color="#F59E0B" 
          wireframe 
          transparent 
          opacity={0.3}
          emissive="#F59E0B"
          emissiveIntensity={0.8}
        />
      </mesh>
      {/* Inner glowing core */}
      <mesh>
         <icosahedronGeometry args={[0.8, 1]} />
         <meshBasicMaterial color="#F97316" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function GlowingBook() {
  const bookRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bookRef.current) {
      bookRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3 - 1.5;
      bookRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={1} position={[-3, -1, 1]}>
      <group ref={bookRef} rotation={[0.4, 0, 0]}>
        {/* Book Cover */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[2.5, 0.1, 3.2]} />
          <meshStandardMaterial color="#F97316" emissive="#7c2d12" emissiveIntensity={0.5} />
        </mesh>
        {/* Book Pages */}
        <mesh position={[0, 0.1, 0.1]}>
          <boxGeometry args={[2.3, 0.4, 3]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.9} />
        </mesh>
        {/* Floating elements above book */}
        <mesh position={[0, 0.8, 0]}>
           <octahedronGeometry args={[0.3, 0]} />
           <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={1} wireframe />
        </mesh>
      </group>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#F59E0B" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#F97316" />
        <HologramIndia />
        <GlowingBook />
      </Canvas>
    </div>
  );
}
