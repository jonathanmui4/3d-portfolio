import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const AboutSection = ({ setSection }) => {
    return (
        <Section idName={"About"} mobileTop>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
                Hi, I'm
                <br />
                <span className="text-indigo-600">Jonathan Mui</span>
            </h1>
            <motion.p
                className="text-xl md:text-2xl mt-4 md:mt-8"
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
                Computer Engineer passionate about AR/VR & IoT
            </motion.p>
            <motion.button
                className=" mt-4 md:mt-8 bg-indigo-600 text-white px-4 py-2 rounded-md"
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
                onClick={() => setSection(3)}
            >
                Contact me
            </motion.button>
        </Section>
    );
};

export default AboutSection;
