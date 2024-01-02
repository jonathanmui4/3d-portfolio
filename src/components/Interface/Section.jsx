import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, idName }) => {
    return (
        <motion.section
            className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.75,
                    delay: 0.3,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

export default Section;
