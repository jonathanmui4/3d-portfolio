import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <Section idName={"About"}>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br />
                <span className="text-indigo-600">Jonathan Mui</span>
            </h1>
            <motion.p
                className="text-2xl mt-8"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.75,
                    delay: 0.5,
                }}
            >
                I'm a software engineer based in the Bay Area.
            </motion.p>
            <motion.button
                className="mt-8 bg-indigo-600 text-white px-4 py-2 rounded-md"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.75,
                    delay: 0.6,
                }}
            >
                Contact me
            </motion.button>
        </Section>
    );
};

export default AboutSection;