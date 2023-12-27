/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { generalTransition } from "../utils/motion";

const RoomScene = ({ section, menuOpened }) => {
    // const { animation } = useControls({
    //     animation: {
    //         value: "Typing",
    //         options: ["Typing", "Standing", "Falling"],
    //     },
    // });

    const { viewport } = useThree();

    const characterContainerRoomRef = useRef();

    const [characterAnimation, setCharacterAnimation] = useState("Typing");
    useEffect(() => {
        setCharacterAnimation("Falling");
        setTimeout(() => {
            setCharacterAnimation(section === 0 ? "Typing" : "Standing");
        }, 600);
    }, [section]);

    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0, { ...generalTransition });
        animate(cameraLookAtX, menuOpened ? 5 : 0, { ...generalTransition });
    }, [menuOpened]);

    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);

        /**  Calculate the position and rotation of the avatar wrt world
        const position = new THREE.Vector3();
        characterContainerRoomRef.current.getWorldPosition(position);
        // console.log("position", [position.x, position.y, position.z]);

        const quaternion = new THREE.Quaternion();
        characterContainerRoomRef.current.getWorldQuaternion(quaternion);
        const euler = new THREE.Euler();
        euler.setFromQuaternion(quaternion, "XYZ");

        console.log("euler", [euler.x, euler.y, euler.z]);
        */
    });

    return (
        <>
            <motion.group
                position={[2.636203151125506, -0.5, 2.636203151125506]}
                rotation={[Math.PI, -0.7796018366025513, Math.PI]}
                scale={1.55}
                animate={"" + section}
                transition={{
                    duration: 0.6,
                }}
                variants={{
                    1: {
                        x: 0,
                        y: -viewport.height + 0.5,
                        z: 0,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                    },
                }}
            >
                <Avatar animation={characterAnimation} />
            </motion.group>
            <Environment preset="apartment" />
            <motion.group
                position={[4, 0, 4]}
                rotation-y={-Math.PI / 4}
                scale={[0.9, 0.9, 0.9]}
                animate={{
                    y: section === 0 ? -1 : -2,
                }}
            >
                <Room section={section} />
                <group
                    ref={characterContainerRoomRef}
                    name="AvatarSpot"
                    position={[-2.143, 0.466, 0]}
                    rotation={[Math.PI, -1.565, Math.PI]}
                    scale={1.825}
                ></group>
            </motion.group>
        </>
    );
};

export default RoomScene;
