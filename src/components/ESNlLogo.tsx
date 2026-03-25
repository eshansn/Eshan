import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    useGLTF,
    OrbitControls,
    Environment,
    ContactShadows,
    Float,
    Center,
    Resize,
    PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';

// --- The 3D Model Logic ---
const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);

    useMemo(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.material = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color('#001F3F'),
                    metalness: 1.0,
                    roughness: 0.1,
                    clearcoat: 1.0,
                    emissive: new THREE.Color('#FFFFFF'),
                    emissiveIntensity: 0.02,
                });
            }
        });
    }, [scene]);

    return <primitive object={scene} scale={0.3} />;
};

// --- The Main Component ---
const ESNLogo: React.FC = () => {
    const controlsRef = useRef<any>(null);
    const resetAnimRef = useRef<number | null>(null);

    // Stop the reset animation if the user grabs the logo again
    const handleStart = () => {
        if (resetAnimRef.current) {
            cancelAnimationFrame(resetAnimRef.current);
            resetAnimRef.current = null;
        }
    };

    // Smoothly interpolate the camera back to the front
    const handleReset = () => {
        if (!controlsRef.current) return;

        const controls = controlsRef.current;
        const camera = controls.object;
        const targetPos = new THREE.Vector3(0, 0, 5); // Default camera position

        const animateReset = () => {
            // Move camera position 5% closer to the target every frame (adjust 0.05 for speed)
            camera.position.lerp(targetPos, 0.05);
            controls.update();

            // Continue looping until it is incredibly close to the target
            if (camera.position.distanceTo(targetPos) > 0.01) {
                resetAnimRef.current = requestAnimationFrame(animateReset);
            } else {
                // Snap exactly to position on the final frame to prevent micro-drifting
                camera.position.copy(targetPos);
                controls.update();
                resetAnimRef.current = null;
            }
        };

        // Clear any existing animation before starting a new one
        handleStart();
        animateReset();
    };

    return (
        <div className="w-full h-[500px]">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />

                <ambientLight intensity={0.5} />
                <spotLight
                    position={[0, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                    color="#ffffff"
                    castShadow
                />
                <pointLight position={[0, -5, 5]} color="#001F3F" intensity={0.8} />

                <Suspense fallback={null}>
                    <Environment preset="studio" />

                    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
                        <Resize precision={0.1}>
                            <Center>
                                <Model url="/ESN.glb" />
                            </Center>
                        </Resize>
                    </Float>

                    <ContactShadows position={[0, -0.6, 0]} opacity={0.3} scale={6} blur={2.5} far={2} />
                </Suspense>

                <OrbitControls
                    ref={controlsRef}
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableDamping={true}
                    dampingFactor={0.05}
                    onStart={handleStart} // Added to cancel animation on interaction
                    onEnd={handleReset}
                />
            </Canvas>
        </div>
    );
};

export default ESNLogo;
useGLTF.preload('/ESN.glb');