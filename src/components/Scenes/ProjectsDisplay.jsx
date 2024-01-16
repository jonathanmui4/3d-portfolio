import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { projects } from "../../content";
import React, { useRef, useEffect } from "react";

const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    return (
        <group {...props}>
            <mesh
                position-z={-0.01}
                onClick={() => window.open(project.url, "_blank")}
                ref={background}
            >
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color="#4F46E5" transparent opacity={0.4} />
            </mesh>
            <Image
                scale={[2, 1.2, 1]}
                url={project.image}
                toneMapped={false}
                position-y={0.3}
            />
            <Text
                maxWidth={2}
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.2}
                position={[-1, -0.4, 0]}
            >
                {project.title.toUpperCase()}
            </Text>
            <Text
                maxWidth={2}
                anchorX="left"
                anchorY="top"
                fontSize={0.1}
                position={[-1, -0.6, 0]}
            >
                {project.description}
            </Text>
        </group>
    );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const ProjectsDisplay = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);
    return (
        <group position-y={-viewport.height * 2}>
            {projects.map((project, index) => (
                <motion.group
                    key={"project_" + index}
                    position={[index * 5, 0, -4]}
                    scale={[2, 2, 2]}
                    animate={{
                        x: 0 + (index - currentProject) * 5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? 0 : -Math.PI / -3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -Math.PI * 0.1,
                    }}
                >
                    <Project
                        project={project}
                        highlighted={index === currentProject}
                    />
                </motion.group>
            ))}
        </group>
    );
};
