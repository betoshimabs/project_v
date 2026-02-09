import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment } from '@react-three/drei';
import { GeneratedMesh } from './GeneratedMesh';
import type { BufferGeometry } from 'three';

interface SceneProps {
    geometry?: BufferGeometry | null;
}

export function Scene({ geometry }: SceneProps) {
    return (
        <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {geometry ? (
                <GeneratedMesh geometry={geometry} />
            ) : (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#6366f1" />
                </mesh>
            )}

            <Grid infiniteGrid sectionColor="#4f46e5" cellColor="#4f46e5" fadeDistance={25} />
            <OrbitControls />
            <Environment preset="city" />
        </Canvas>
    );
}
