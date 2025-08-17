import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const GlassPanel = forwardRef(({ 
  children, 
  className,
  variant = 'default',
  size = 'default',
  blur = 'default',
  border = true,
  glow = false,
  animate = true,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white/5 backdrop-blur-md',
    subtle: 'bg-white/3 backdrop-blur-sm',
    prominent: 'bg-white/8 backdrop-blur-lg',
    solid: 'bg-white/10 backdrop-blur-xl',
  };

  const sizes = {
    sm: 'p-4 rounded-lg',
    default: 'p-6 rounded-xl',
    lg: 'p-8 rounded-2xl',
    xl: 'p-12 rounded-3xl',
  };

  const blurLevels = {
    none: '',
    sm: 'backdrop-blur-sm',
    default: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const baseClasses = cn(
    'relative overflow-hidden',
    'transition-all duration-300 ease-out',
    border && 'border border-white/10',
    glow && 'shadow-[0_0_50px_rgba(255,255,255,0.1)]',
    variants[variant],
    sizes[size],
    className
  );

  const glassReflection = (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Left highlight */}
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      
      {/* Corner reflection */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-br-full blur-sm" />
    </div>
  );

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    whileHover: { 
      scale: 1.02,
      boxShadow: glow 
        ? '0 0 80px rgba(255,255,255,0.15)' 
        : '0 20px 40px rgba(255,255,255,0.1)',
      transition: { duration: 0.2 }
    },
    transition: { 
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  } : {};

  if (animate) {
    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        {...motionProps}
        {...props}
      >
        {glassReflection}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {glassReflection}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
});

GlassPanel.displayName = 'GlassPanel';

export default GlassPanel;