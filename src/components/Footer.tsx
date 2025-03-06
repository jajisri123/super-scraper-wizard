
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 md:py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-xl font-semibold mb-4">SuperParser</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Extract structured data from any text source with the power of AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "API", "Documentation", "Changelog"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Customers", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Data Processing", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} SuperParser. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Twitter", "GitHub", "LinkedIn", "YouTube"].map((social) => (
              <a 
                key={social}
                href={`https://${social.toLowerCase()}.com`} 
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social}</span>
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
