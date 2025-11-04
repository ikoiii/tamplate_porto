"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const ScrollAnimation = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
      case "left":
        return { x: -50, opacity: 0 };
      case "right":
        return { x: 50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const initialTransform = getInitialTransform();

  const variants = {
    hidden: initialTransform,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;