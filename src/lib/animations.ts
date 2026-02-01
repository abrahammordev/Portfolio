import { Transition, Variants } from "framer-motion";

// Base fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Fade in from different directions
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

// Stagger container for animating children sequentially
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger variants for children with different animations
export const staggerFadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Slide animations
export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideDown: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Spring animations for more bouncy feel
export const springIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// Card hover animations
export const cardHover = {
  y: -8,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Button animations
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Icon hover glow effect
export const iconGlowHover = {
  filter: "drop-shadow(0 0 8px rgba(66, 153, 225, 0.6))",
  scale: 1.2,
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Modal animations
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Filter/Tab animations
export const tabIndicator = {
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

// Scroll indicator bounce
export const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Typing cursor animation
export const cursorBlink = {
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "steps(2)",
    },
  },
};

// Link underline animation
export const linkUnderline = {
  position: "relative",
  _after: {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-2px",
    left: "0",
    bg: "currentColor",
    transition: "width 0.3s ease",
  },
  _hover: {
    _after: {
      width: "100%",
    },
  },
};

// Gradient text animation
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

// Common transition config
export const commonTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

// Reduced motion variants for accessibility
export const reducedMotion = {
  transition: { duration: 0 },
};

// Helper to get appropriate variants based on user's motion preference
export const getMotionSafeVariants = (
  prefersReducedMotion: boolean,
  variants: Variants
): Variants => {
  if (prefersReducedMotion) {
    return {
      hidden: { ...variants.hidden, transition: { duration: 0 } },
      visible: { ...variants.visible, transition: { duration: 0 } },
    };
  }
  return variants;
};
