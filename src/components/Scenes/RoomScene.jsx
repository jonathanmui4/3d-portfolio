/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Environment, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { generalTransition } from "../../utils/motion";

const RoomScene = ({ menuOpened, isMobile, responsiveRatio }) => {
    // const { animation } = useControls({
    //     animation: {
    //         value: "Typing",
    //         options: ["Typing", "Standing", "Falling"],
    //     },
    // });

    const { viewport } = useThree();
    const [section, setSection] = useState(0);
    const data = useScroll();
    const characterContainerRoomRef = useRef();

    const roomScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));
    const avatarScaleRatio = Math.max(
        0.5,
        Math.min(1.55 * responsiveRatio, 1.55)
    );

    const [characterAnimation, setCharacterAnimation] = useState("Typing");
    useEffect(() => {
        console.log("section", section);
        setCharacterAnimation("Falling");
        setTimeout(() => {
            setCharacterAnimation(section === 0 ? "Typing" : "Standing");
        }, 600);
    }, [section]);

    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(() => {
        // Ensure motion values are defined before animating
        if (cameraPositionX && cameraLookAtX) {
            animate(cameraPositionX, menuOpened ? -5 : 0, {
                ...generalTransition,
            });
            animate(cameraLookAtX, menuOpened ? 5 : 0, {
                ...generalTransition,
            });
        }
    }, [menuOpened, cameraPositionX, cameraLookAtX]);

    const characterGroup = useRef();

    useFrame((state) => {
        let curSection = Math.floor(data.scroll.current * data.pages);

        if (curSection > 3) {
            curSection = 3;
        }

        if (curSection !== section) {
            setSection(curSection);
            // if (curSection === 0) {
            //     setCharacterAnimation("Typing");
            // } else {
            //     setCharacterAnimation("Standing");
            // }
        }

        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);

        // const postition = new THREE.Vector3();
        if (section === 0) {
            characterContainerRoomRef.current.getWorldPosition(
                characterGroup.current.position
            );
        }
    });

    return (
        <>
            <motion.group
                ref={characterGroup}
                rotation={[Math.PI, -0.7796018366025513, Math.PI]}
                scale={[avatarScaleRatio, avatarScaleRatio, avatarScaleRatio]}
                animate={"" + section}
                transition={{
                    duration: 0.8,
                }}
                variants={{
                    0: {
                        scaleX: avatarScaleRatio,
                        scaleY: avatarScaleRatio,
                        scaleZ: avatarScaleRatio,
                    },
                    1: {
                        x: isMobile ? 0.3 : 3,
                        y: -viewport.height - 3,
                        z: 0,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scaleX: 3,
                        scaleY: 3,
                        scaleZ: 3,
                    },
                    2: {
                        x: isMobile ? -2.3 : -5,
                        y: -viewport.height * 2 - 1.5,
                        z: 5,
                        rotateX: 0,
                        rotateY: Math.PI / 2,
                        rotateZ: 0,
                        scaleX: 2,
                        scaleY: 2,
                        scaleZ: 2,
                    },
                    3: {
                        y: -viewport.height * 3 - 3,
                        x: 2,
                        z: 5.5,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scaleX: 4,
                        scaleY: 4,
                        scaleZ: 4,
                    },
                }}
            >
                <Avatar
                    animation={characterAnimation}
                    wireframe={section === 1}
                />
            </motion.group>
            <Environment preset="apartment" />
            <motion.group
                position={[
                    isMobile ? 0 : 4,
                    isMobile ? -viewport.height / 6 : 0,
                    4,
                ]}
                // position={[4, 0, 4]}
                rotation-y={-Math.PI / 4}
                scale={[roomScaleRatio, roomScaleRatio, roomScaleRatio]}
                animate={{
                    y: isMobile ? -viewport.height / 6 : 0,
                }}
            >
                <Room section={section} />
                <group
                    ref={characterContainerRoomRef}
                    name="AvatarSpot"
                    position={[-2.143, 0.466, 0]}
                    rotation={[Math.PI, -1.565, Math.PI]}
                    scale={1.825}
                />
            </motion.group>
        </>
    );
};

export default RoomScene;
