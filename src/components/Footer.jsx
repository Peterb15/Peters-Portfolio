import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Peter Burke</h3>
            <p className="text-sm text-gray-600">
              Designer & storyteller working at the intersection of technology and the arts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <a 
                href="mailto:burke.pete15@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Email
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="https://linkedin.com/in/PeterBurke15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="https://github.com/Peterb15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="/ResumeFinal2025.pdf" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Peter Burke. All rights reserved.</p>
          <p>Boulder, Colorado</p>
        </div>
      </div>
    </footer>
  );
}