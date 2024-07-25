import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ textAnimate, secondText, thirdText }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  const DELAY_BETWEEN_TEXTS = 3; // Adjust this delay as needed

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("hovered");
        await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_TEXTS * 1000));
        await controls.start("initial");
        await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_TEXTS * 1000));
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.section
      initial="initial"
      animate={controls}
      className="relative block overflow-hidden whitespace-nowrap font-black capitalze"
    >
      <div>
        {textAnimate.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {secondText.split("").map((l, i) => (
          <motion.span
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

     
    </motion.section>
  );
};

export default AnimatedText;
