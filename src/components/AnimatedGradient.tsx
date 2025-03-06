
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn(
      "absolute inset-0 opacity-20 overflow-hidden -z-10",
      className
    )}>
      <div className="absolute inset-0 animated-gradient blur-3xl"></div>
      {children}
    </div>
  );
};

export default AnimatedGradient;
