type Direction = 'left' | 'right' | 'up' | 'down';
type AnimationType = 'spring' | 'tween';

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as AnimationType,
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction: Direction, type: AnimationType, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as AnimationType,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction: Direction, type: AnimationType, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// New Animations
export const productReveal = {
  hidden: { scale: 0.95, opacity: 0 },
  hover: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const colorShift = {
  initial: { color: "#000" },
  animate: {
    color: ["#000", "#FF0000", "#0000FF", "#000"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3,
    },
  },
};

export const matrixTransition = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const depth3D = {
  initial: { rotateX: 90, opacity: 0 },
  whileInView: {
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  viewport: { once: true },
};

export const scrollytelling = {
  initial: { y: 50, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  viewport: { once: true },
};
