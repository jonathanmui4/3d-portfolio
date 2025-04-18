import React from "react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const LoadingScreen = ({ started, setStarted }) => {
    const { progress, total, loaded, item } = useProgress();

    useEffect(() => {
        console.log(progress, total, loaded, item);
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            }, 500);
        }
    }, [progress, total, loaded, item]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
    flex items-center justify-center bg-gray-500 
    ${started ? "opacity-0" : "opacity-100"}`}
        >
            <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
                <div
                    className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    Loading...
                </div>
                <div className="opacity-40">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
