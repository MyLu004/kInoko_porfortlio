import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import HeroCamera from '../../heroCamera.jsx';
import { MushroomModel } from '../../model_component/mushroom.jsx';

// No hover on touch screens, so skip the tilt there (same as the old hero)
const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

// The hero's cursor-following mushroom scene, shrunk into the stamp.
// Tweak the camera position if the mushroom sits too big/small in the stamp.
export default function StampMushroom() {
    return (
        <Canvas className="!absolute inset-0" dpr={[1, 2]}>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 5, 4]} fov={65} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
                <HeroCamera isMobile={isTouch} followWindow>
                    <MushroomModel />
                </HeroCamera>
            </Suspense>
        </Canvas>
    );
}
