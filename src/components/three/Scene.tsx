import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Environment } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 1, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial
                color="#6366f1"
                metalness={0.3}
                roughness={0.4}
            />
        </mesh>
    );
}

export function Scene() {
    return (
        <Canvas
            camera={{ position: [5, 5, 5], fov: 50 }}
            style={{ background: 'transparent' }}
        >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
            />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#818cf8" />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* Objects */}
            <RotatingCube />

            {/* Grid floor */}
            <Grid
                args={[20, 20]}
                cellSize={0.5}
                cellThickness={0.5}
                cellColor="#4f46e5"
                sectionSize={2}
                sectionThickness={1}
                sectionColor="#6366f1"
                fadeDistance={25}
                fadeStrength={1}
                followCamera={false}
                infiniteGrid
            />

            {/* Controls */}
            <OrbitControls
                enableDamping
                dampingFactor={0.05}
                minDistance={3}
                maxDistance={20}
            />
        </Canvas>
    );
}
