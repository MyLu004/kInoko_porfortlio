import React from 'react';
import { useGLTF } from '@react-three/drei';

export function MushroomModel(props) {
    const { nodes, materials } = useGLTF(
        new URL('../../assets/models/mushroom/scene.gltf', import.meta.url).href
    );

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials.mushroom_friend}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={8}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(
    new URL('../../assets/models/mushroom/scene.gltf', import.meta.url).href
);
