import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

// followWindow: track the cursor across the whole page instead of only over the canvas
// (R3F's state.pointer only updates while hovering the canvas, too small for e.g. the stamp)
const HeroCamera = ({ isMobile, followWindow = false, children }) => {
    const group = useRef();
    const windowPointer = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!followWindow) return;
        const onMove = (e) => {
            windowPointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            windowPointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
    }, [followWindow]);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 4, 12], 0.25, delta);

        if (!isMobile) {
            const pointer = followWindow ? windowPointer.current : state.pointer;
            easing.dampE(group.current.rotation, [-pointer.y / 5, pointer.x / 2, 0], 0.25, delta);
        }
    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;
