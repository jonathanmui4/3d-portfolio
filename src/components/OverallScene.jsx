import React from "react";
import { useThree } from "@react-three/fiber";
import RoomScene from "./Scenes/RoomScene";
import HologramScene from "./Scenes/HologramScene";
import { ProjectsDisplay } from "./Scenes/ProjectsDisplay";

const OverallScene = ({ menuOpened, section }) => {
    const { viewport } = useThree();
    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 12;

    return (
        <>
            <RoomScene
                menuOpened={menuOpened}
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
