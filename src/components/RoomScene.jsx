/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
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

    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0, { ...generalTransition });
        animate(cameraLookAtX, menuOpened ? 5 : 0, { ...generalTransition });
    }, [menuOpened]);

    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    });

    return (
        <>
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
            </motion.group>
        </>
    );
};

export default RoomScene;
