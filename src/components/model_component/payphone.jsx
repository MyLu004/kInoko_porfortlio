
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function PayPhone(props) {
    const { nodes, materials } = useGLTF('/assets/models/payphone/scene.gltf');

    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.005; // Adjust speed here
        }
    });

    return (
        <group {...props} dispose={null} ref={ref}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.phone1_Mat_0.geometry}
                    material={materials.material}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_holo_0.geometry}
                    material={materials.holo}
                    position={[-2.621, 124.006, -18.771]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={49.698}
                />
                {/*<mesh*/}
                {/*    castShadow*/}
                {/*    receiveShadow*/}
                {/*    geometry={nodes.Light_holo_0.geometry}*/}
                {/*    material={materials.holo}*/}
                {/*    position={[-2.378, 124.029, -19.142]}*/}
                {/*    rotation={[-Math.PI / 2, 0, Math.PI / 2]}*/}
                {/*    scale={49.698}*/}
                {/*/>*/}
                {/*<mesh*/}
                {/*    castShadow*/}
                {/*    receiveShadow*/}
                {/*    geometry={nodes.Sign_holo_0.geometry}*/}
                {/*    material={materials.holo}*/}
                {/*    position={[-2.378, 265.797, -19.142]}*/}
                {/*    rotation={[0, Math.PI / 2, 0]}*/}
                {/*    scale={[2.578, 68.763, 222.526]}*/}
                {/*/>*/}
            </group>
        </group>
    )
}

useGLTF.preload('/assets/models/payphone/scene.gltf');