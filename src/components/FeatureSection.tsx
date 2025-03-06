
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Extract Structured Data",
    description: "Transform unstructured text into structured data formats like JSON, CSV, or XML with our advanced parsing algorithms.",
    icon: "📊",
  },
  {
    title: "Custom Templates",
    description: "Create custom templates to extract exactly the information you need from documents, websites, or any text source.",
    icon: "🧩",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate with your existing workflow using our robust API. Extract data from any source in real-time.",
    icon: "🔄",
  },
  {
    title: "Machine Learning",
    description: "Our AI continuously improves, learning from your corrections and becoming more accurate with each document processed.",
    icon: "🧠",
  },
  {
    title: "Batch Processing",
    description: "Process thousands of documents simultaneously with our powerful batch processing capabilities.",
    icon: "⚡",
  },
  {
    title: "Data Validation",
    description: "Ensure data accuracy with built-in validation rules and quality checks for your extracted information.",
    icon: "✅",
  },
];

const FeatureSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-3">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful parsing capabilities
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our platform offers a comprehensive suite of tools to handle all your data extraction needs
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "relative p-6 rounded-2xl hover-lift",
                "bg-white dark:bg-gray-800",
                "border border-gray-200 dark:border-gray-700"
              )}
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
