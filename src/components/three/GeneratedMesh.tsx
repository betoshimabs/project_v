import type { BufferGeometry } from 'three';

interface GeneratedMeshProps {
    geometry: BufferGeometry;
}

export function GeneratedMesh({ geometry }: GeneratedMeshProps) {
    return (
        <mesh geometry={geometry}>
            <meshStandardMaterial color="#ef4444" side={2} />
        </mesh>
    );
}
