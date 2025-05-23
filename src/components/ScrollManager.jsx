import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const ScrollManager = ({ section, onSectionChange }) => {
    // const data = useScroll();
    // const lastScroll = useRef(0);
    // const isAnimating = useRef(false);

    // data.fill.classList.add("top-0");
    // data.fill.classList.add("absolute");

    // useEffect(() => {
    //     gsap.to(data.el, {
    //         duration: 0.5,
    //         scrollTop: section * data.el.clientHeight,
    //         onStart: () => (isAnimating.current = true),
    //         onComplete: () => (isAnimating.current = false),
    //     });
    // }, [section]);

    // useFrame(() => {
    //     if (isAnimating.current) {
    //         lastScroll.current = data.scroll.current;
    //         return;
    //     }

    //     const currentSection = Math.floor(data.scroll.current * data.pages);
    //     if (data.scroll.current > lastScroll.current && currentSection === 0) {
    //         onSectionChange(1);
    //     }
    //     if (
    //         data.scroll.current < lastScroll.current &&
    //         data.scroll.current < 1 / (data.pages - 1)
    //     ) {
    //         onSectionChange(0);
    //     }
    //     lastScroll.current = data.scroll.current;
    // });

    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);

    // data.fill.classList.add("fix");
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    useEffect(() => {
        function onScroll(event) {
            if (isAnimating.current) {
                return;
            }
            isAnimating.current = true;
            if (event.deltaY < 0) {
                onSectionChange((section) => (section > 0 ? section - 1 : 0));
            } else if (event.deltaY > 0) {
                onSectionChange((section) => (section === 3 ? 3 : section + 1));
            }
        }
        window.addEventListener("wheel", onScroll);
        return () => window.removeEventListener("wheel", onScroll);
    }, []);

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            },
        });
    }, [section]);

    return null;
};

export default ScrollManager;
