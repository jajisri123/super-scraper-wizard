
import React from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import AnimatedGradient from '@/components/AnimatedGradient';
import { ArrowRight, ChevronRight, Code, FileText, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.span 
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Transform Your Data
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Extract structured data from any text
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                SuperParser uses AI to transform unstructured text into clean, structured data instantly. No more manual copy-pasting.
              </motion.p>
            </div>

            {/* Main Input Box */}
            <motion.div 
              className="max-w-4xl mx-auto mt-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto font-mono text-sm text-gray-500 dark:text-gray-400">
                    Text Parser
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Paste your unstructured text here
                      </label>
                      <textarea 
                        className="min-h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Paste email, document, or any text content here..."
                      />
                    </div>
                    
                    <div className="flex justify-between items-center gap-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Select output format:
                        <select className="ml-2 p-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                          <option>JSON</option>
                          <option>CSV</option>
                          <option>XML</option>
                          <option>YAML</option>
                        </select>
                      </div>
                      <Button size="lg" className="gap-2">
                        Process Text
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How SuperParser Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our intelligent parsing engine understands text structure and extracts meaningful data automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="h-8 w-8 text-blue-500" />,
                  title: "Input Any Text",
                  description: "Paste emails, documents, websites, PDFs, or any unstructured text"
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-500" />,
                  title: "AI Processing",
                  description: "Our AI identifies patterns and extracts structured information"
                },
                {
                  icon: <Code className="h-8 w-8 text-blue-500" />,
                  title: "Clean Data Output",
                  description: "Get structured data in JSON, CSV, or your preferred format"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Use Cases</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how businesses are using SuperParser to automate their data extraction workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Email Processing",
                  description: "Extract details from customer inquiries, support tickets, and order confirmations automatically"
                },
                {
                  title: "Document Analysis",
                  description: "Parse contracts, invoices, and reports to extract key information and insights"
                },
                {
                  title: "Web Scraping",
                  description: "Transform web content into structured data without complex scraping scripts"
                },
                {
                  title: "Data Migration",
                  description: "Convert legacy data into modern formats for system migrations and updates"
                }
              ].map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your data workflow?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Join thousands of data professionals who have already simplified their text parsing processes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start for free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
