/* eslint-disable react/no-unknown-property */
import React from "react";
import {
    ContactShadows,
    Lightformer,
    Environment,
    OrbitControls,
    Sky,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Room } from "./Room";

const RoomScene = ({ section }) => {
    const { animation } = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Standing", "Falling"],
        },
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
                <Room />
            </motion.group>
        </>
    );
};

export default RoomScene;
