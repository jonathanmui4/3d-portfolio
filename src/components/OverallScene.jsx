import React, { useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import RoomScene from "./Scenes/RoomScene";
import HologramScene from "./Scenes/HologramScene";
import { ProjectsDisplay } from "./Scenes/ProjectsDisplay";

const OverallScene = ({ menuOpened }) => {
    const { viewport } = useThree();
    const [section, setSection] = useState(0);
    const data = useScroll();
    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 12;

    useFrame((state) => {
        let curSection = Math.floor(data.scroll.current * data.pages);

        if (curSection > 3) {
            curSection = 3;
        }

        if (curSection !== section) {
            setSection(curSection);
        }
    });

    return (
        <>
            <RoomScene
                menuOpened={menuOpened}
                section={section}
                isMobile={isMobile}
                responsiveRatio={responsiveRatio}
            />
            <HologramScene
                section={section}
                menuOpened={menuOpened}
                isMobile={isMobile}
                responsiveRatio={responsiveRatio}
            />
            <ProjectsDisplay
                isMobile={isMobile}
                responsiveRatio={responsiveRatio}
            />
        </>
    );
};

export default OverallScene;
