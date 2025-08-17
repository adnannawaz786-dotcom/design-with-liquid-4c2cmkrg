// Animation utility functions for liquid glass motion effects

/**
 * Framer Motion variants for glass panel animations
 */
export const glassVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Staggered container variants for multiple glass panels
 */
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Floating animation for bokeh spheres
 */
export const floatingVariants = {
  initial: (custom) => ({
    x: 0,
    y: 0,
    scale: custom?.scale || 1,
    opacity: custom?.opacity || 0.1,
  }),
  animate: (custom) => ({
    x: [0, custom?.x || 30, 0],
    y: [0, custom?.y || -40, 0],
    scale: [
      custom?.scale || 1,
      (custom?.scale || 1) * 1.2,
      custom?.scale || 1,
    ],
    opacity: [
      custom?.opacity || 0.1,
      (custom?.opacity || 0.1) * 1.5,
      custom?.opacity || 0.1,
    ],
    transition: {
      duration: custom?.duration || 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: custom?.delay || 0,
    },
  }),
};

/**
 * Pulse animation for key metrics
 */
export const pulseVariants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  pulse: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Shimmer effect for glass highlights
 */
export const shimmerVariants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "100%",
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut",
    },
  },
};

/**
 * Slide in from different directions
 */
export const slideVariants = {
  fromLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  fromRight: {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  fromBottom: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

/**
 * Hover animations for interactive elements
 */
export const hoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: { duration: 0.1 },
  },
};

/**
 * Generate random floating animation parameters
 */
export const generateFloatingParams = (index = 0) => {
  const baseDelay = index * 0.5;
  const randomDelay = Math.random() * 2;
  
  return {
    x: (Math.random() - 0.5) * 60,
    y: (Math.random() - 0.5) * 80,
    scale: 0.8 + Math.random() * 0.4,
    opacity: 0.05 + Math.random() * 0.1,
    duration: 6 + Math.random() * 4,
    delay: baseDelay + randomDelay,
  };
};

/**
 * Generate bokeh sphere positions
 */
export const generateBokehPositions = (count = 20) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 80,
    blur: 20 + Math.random() * 40,
    opacity: 0.03 + Math.random() * 0.07,
    animationParams: generateFloatingParams(index),
  }));
};

/**
 * Easing functions for custom animations
 */
export const easings = {
  liquid: [0.25, 0.1, 0.25, 1],
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  sharp: [0.4, 0, 0.6, 1],
};

/**
 * Animation presets for different components
 */
export const presets = {
  glassPanel: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
    transition: { duration: 0.6, ease: easings.liquid },
  },
  
  metric: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: easings.smooth },
  },
  
  chart: {
    initial: { opacity: 0, scaleY: 0.8 },
    animate: { opacity: 1, scaleY: 1 },
    transition: { duration: 0.8, ease: easings.smooth, delay: 0.2 },
  },
};

/**
 * Utility function to create staggered animations
 */
export const createStaggeredAnimation = (children, delay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
      delayChildren: 0.1,
    },
  },
});

/**
 * Utility function to create responsive animation values
 */
export const createResponsiveAnimation = (mobile, desktop) => ({
  initial: mobile.initial || desktop.initial,
  animate: mobile.animate || desktop.animate,
  transition: {
    ...desktop.transition,
    duration: window.innerWidth < 768 ? 
      (mobile.transition?.duration || desktop.transition?.duration * 0.7) : 
      desktop.transition?.duration,
  },
});