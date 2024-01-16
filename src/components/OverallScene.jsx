import React from "react";
import RoomScene from "./Scenes/RoomScene";
import HologramScene from "./Scenes/HologramScene";
import { ProjectsDisplay } from "./Scenes/ProjectsDisplay";

const OverallScene = ({ menuOpened, section }) => {
    return (
        <>
            <RoomScene menuOpened={menuOpened} />
            <HologramScene section={section} menuOpened={menuOpened} />
            <ProjectsDisplay />
        </>
    );
};

export default OverallScene;
