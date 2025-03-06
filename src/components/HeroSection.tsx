
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedGradient from './AnimatedGradient';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const imageVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.6 }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <AnimatedGradient />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Introducing SuperParser
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            variants={itemVariants}
          >
            Extract meaningful data from unstructured text
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-balance"
            variants={itemVariants}
          >
            SuperParser uses advanced AI to transform complex documents, websites, and text into structured, actionable data. Save hours of manual work with our intuitive parsing solution.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            variants={itemVariants}
          >
            <Button size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Start for free
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Book a demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="SuperParser Dashboard" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
