"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleGrid() {
    const points = useRef<THREE.Points>(null!);

    // Create a structured grid of points
    const particleCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        let i = 0;
        const size = 20;
        const step = 0.8;

        // Create a 3D grid, but sparsely populated or limited to create a shape
        for (let x = -size; x <= size; x += step) {
            for (let z = -size; z <= size; z += step) {
                // Randomly skip to make it less rigid, or keep it rigid for "structure"
                if (Math.random() > 0.75) {
                    pos[i] = x;
                    pos[i + 1] = (Math.random() - 0.5) * 2; // Slight height variation
                    pos[i + 2] = z;
                    i += 3;
                }
            }
            if (i >= particleCount * 3) break;
        }
        return pos.slice(0, i);
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Slow, deliberate rotation
        points.current.rotation.y = t * 0.05;
        // Subtle wave motion
        // points.current.position.y = Math.sin(t * 0.2) * 0.5;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#a8a29e" // secondary color
                sizeAttenuation={true}
                transparent={true}
                opacity={0.6}
            />
        </points>
    );
}
