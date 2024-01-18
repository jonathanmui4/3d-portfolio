/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { generalTransition } from "./utils/motion";
import OverallScene from "./components/OverallScene";
import LoadingScreen from "./components/LoadingScreen";

function App() {
    const [section, setSection] = useState(0);
    const [started, setStarted] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);

    return (
        <BrowserRouter>
            <LoadingScreen started={started} setStarted={setStarted} />
            <div className="absolute top-0 left-0 z-0 w-full h-screen bg-primary">
                <MotionConfig
                    transition={{
                        ...generalTransition,
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
                        <ScrollControls pages={4} damping={0.1}>
                            <ScrollManager
                                section={section}
                                onSectionChange={setSection}
                            />
                            <Scroll>
                                <OverallScene
                                    menuOpened={menuOpened}
                                    section={section}
                                />
                            </Scroll>
                            <Scroll html>
                                <Interface setSection={setSection} />
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
        </BrowserRouter>
    );
}

export default App;
