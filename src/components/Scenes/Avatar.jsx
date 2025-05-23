/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export function Avatar(props) {
    const { animation, wireframe } = props;

    const group = useRef();
    const { nodes, materials } = useGLTF("models/MyAvatar.glb");

    const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
    const { animations: standingAnimation } = useFBX(
        "animations/Standing Idle.fbx"
    );
    const { animations: fallingAnimation } = useFBX("animations/Falling.fbx");

    typingAnimation[0].name = "Typing";
    standingAnimation[0].name = "Standing";
    fallingAnimation[0].name = "Falling";

    const { actions } = useAnimations(
        [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
        group
    );

    // useFrame((state) => {
    //     if (headFollow) {
    //         group.current.getObjectByName("Neck").lookAt(state.camera.position);
    //     }
    //     if (cursorFollow) {
    //         const target = new THREE.Vector3(
    //             state.pointer.x,
    //             state.pointer.y,
    //             1
    //         );
    //         group.current.getObjectByName("Spine2").lookAt(target);
    //     }
    // });

    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play();
        return () => {
            actions[animation].reset().fadeOut(0.5).stop();
        };
    }, [animation]);

    useEffect(() => {
        Object.values(materials).forEach((material) => {
            material.wireframe = wireframe;
        });
    }, [wireframe]);

    return (
        <group {...props} ref={group} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                frustumCulled={false}
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                frustumCulled={false}
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                frustumCulled={false}
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                frustumCulled={false}
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                frustumCulled={false}
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    );
}

useGLTF.preload("models/MyAvatar.glb");
