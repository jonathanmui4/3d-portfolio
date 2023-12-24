/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import RoomScene from "./components/RoomScene";
import Menu from "./components/Menu";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";

function App() {
    const [section, setSection] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);

    return (
        <div className="absolute top-0 left-0 z-0 w-full h-screen bg-primary">
            <MotionConfig
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    mass: 1,
                    restDelta: 0.01,
                }}
            >
                <Canvas
                    shadows
                    camera={{
                        position: [0, 3, 25],
                        fov: 30,
                    }}
                >
                    {/* <color attach="background" args={["#e6e7ff"]} /> */}
                    <color attach="background" args={["#050816"]} />
                    <ScrollControls pages={5} damping={0.1}>
                        <ScrollManager
                            section={section}
                            onSectionChange={setSection}
                        />
                        <Scroll>
                            <RoomScene
                                section={section}
                                menuOpened={menuOpened}
                            />
                        </Scroll>
                        <Scroll html>
                            <Interface />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
                <Menu
                    onSectionChange={setSection}
                    menuOpened={menuOpened}
                    setMenuOpened={setMenuOpened}
                />
            </MotionConfig>
        </div>
    );
}

export default App;
