/* eslint-disable react/no-unknown-property */
import React from "react";
import {
    Float,
    MeshDistortMaterial,
    MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { motion } from "framer-motion-3d";
import { HologramPedestal } from "./HologramPedestal";

const HologramScene = ({ section, menuOpened, isMobile, responsiveRatio }) => {
    const { viewport } = useThree();
    return (
        <>
            <motion.group
                position={[0, isMobile ? -viewport.height : -1.5, -10]}
                animate={{
                    z: section === 1 ? 0 : -10,
                    y:
                        section === 1
                            ? -viewport.height
                            : isMobile
                            ? -viewport.height
                            : -1.5,
                }}
            >
                <directionalLight position={[-5, 3, 5]} intensity={0.4} />
                <Float>
                    <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={0.4}
                            speed={4}
                            color={"red"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={5}
                            color="yellow"
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
                        <boxGeometry />
                        <MeshWobbleMaterial
                            opacity={0.8}
                            transparent
                            factor={1}
                            speed={5}
                            color={"blue"}
                        />
                    </mesh>
                </Float>
            </motion.group>
            <motion.group
                position={[isMobile ? 0.3 : 3.3, -viewport.height - 5, 0]}
                animate={{
                    y: section === 1 ? -viewport.height - 5 : -100,
                }}
            >
                <HologramPedestal />
            </motion.group>
        </>
    );
};

export default HologramScene;
