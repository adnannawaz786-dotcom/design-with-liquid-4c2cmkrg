import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Shadcn/UI utility functions for the liquid glass design system
export const shadcnUtils = {
  // Glass panel variants for consistent styling
  glassVariants: {
    default: "backdrop-blur-md bg-white/5 border border-white/10",
    subtle: "backdrop-blur-sm bg-white/3 border border-white/5",
    prominent: "backdrop-blur-lg bg-white/8 border border-white/15",
    interactive: "backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
  },

  // Size variants
  sizes: {
    sm: "text-sm px-3 py-1.5",
    default: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
    xl: "text-xl px-8 py-4"
  },

  // Animation presets for glass components
  animations: {
    fadeIn: "animate-in fade-in-0 duration-300",
    slideIn: "animate-in slide-in-from-bottom-4 duration-300",
    scaleIn: "animate-in zoom-in-95 duration-200",
    shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
  }
}

// Component class generators
export const generateGlassClasses = (variant = "default", size = "default", className = "") => {
  return cn(
    "relative rounded-xl transition-all duration-300",
    shadcnUtils.glassVariants[variant],
    shadcnUtils.sizes[size],
    className
  )
}

export const generateButtonClasses = (variant = "default", size = "default", className = "") => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30",
    ghost: "text-white/80 hover:bg-white/10 hover:text-white",
    outline: "border border-white/20 text-white hover:bg-white/5",
    solid: "bg-white text-black hover:bg-white/90"
  }

  return cn(
    baseClasses,
    variants[variant],
    shadcnUtils.sizes[size],
    className
  )
}

export const generateInputClasses = (variant = "default", className = "") => {
  const baseClasses = "flex w-full rounded-lg border bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
  
  const variants = {
    default: "backdrop-blur-md bg-white/5 border-white/20 focus-visible:bg-white/8 focus-visible:border-white/30",
    subtle: "backdrop-blur-sm bg-white/3 border-white/10 focus-visible:bg-white/5 focus-visible:border-white/20"
  }

  return cn(
    baseClasses,
    variants[variant],
    className
  )
}

// Theme configuration for consistent design
export const theme = {
  colors: {
    background: "hsl(0 0% 0%)",
    foreground: "hsl(0 0% 100%)",
    primary: "hsl(0 0% 100%)",
    secondary: "hsl(0 0% 100% / 0.1)",
    accent: "hsl(0 0% 100% / 0.05)",
    muted: "hsl(0 0% 100% / 0.4)",
    border: "hsl(0 0% 100% / 0.1)",
    input: "hsl(0 0% 100% / 0.05)",
    ring: "hsl(0 0% 100% / 0.2)"
  },
  
  borderRadius: {
    lg: "0.75rem",
    md: "0.5rem",
    sm: "0.25rem"
  },

  blur: {
    sm: "4px",
    md: "12px",
    lg: "24px"
  }
}

// Glass effect utilities
export const glassEffects = {
  panel: "backdrop-blur-md bg-white/5 border border-white/10 rounded-xl",
  card: "backdrop-blur-sm bg-white/3 border border-white/8 rounded-lg",
  overlay: "backdrop-blur-lg bg-black/20 border border-white/5",
  highlight: "relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none",
  reflection: "relative after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-t after:from-transparent after:via-transparent after:to-white/5 after:pointer-events-none"
}

// Animation utilities
export const motionPresets = {
  glassHover: {
    scale: 1.02,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    transition: { duration: 0.2 }
  },
  
  glassTap: {
    scale: 0.98,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    transition: { duration: 0.1 }
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  },

  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}

// Responsive utilities
export const responsive = {
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  flex: "flex flex-col sm:flex-row items-center justify-between gap-4"
}

// Focus and accessibility utilities
export const a11y = {
  focusRing: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  srOnly: "sr-only",
  skipLink: "absolute left-[-10000px] top-auto w-1 h-1 overflow-hidden focus:static focus:w-auto focus:h-auto"
}