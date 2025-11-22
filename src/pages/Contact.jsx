import React, { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('burke.pete15@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-16 bg-dark-800 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-black text-pb-ivory mb-6">
          Let's Connect
        </h1>
        
        <p className="text-lg font-accent font-normal text-pb-ivory/70 mb-12">
          Have a project in mind? Want to collaborate? Or just want to say hello? 
          I'd love to hear from you.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-pb-line">
            <h3 className="text-sm font-accent font-normal text-pb-ivory/50 mb-2">Email</h3>
            <button
              onClick={copyEmail}
              className="group flex items-center justify-center gap-3 text-xl font-sans text-accent-500 hover:text-accent-400 transition-colors mx-auto"
            >
              burke.pete15@gmail.com
              <span className="text-xs bg-accent-500/20 px-2 py-1 rounded text-accent-400 font-decorative">
                {copied ? 'Copied!' : 'Click to copy'}
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/PeterBurke15', icon: '🔗' },
              { label: 'GitHub', href: 'https://github.com/Peterb15', icon: '💻' },
              { label: 'Portfolio', href: 'https://peterburke.co', icon: '🌐' },
              { label: 'Instructables', href: 'https://www.instructables.com/member/burke_pete15/', icon: '🛠' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700/50 backdrop-blur-sm rounded-xl p-4 border border-pb-line hover:border-accent-500/50 hover:shadow-copper transition-all group"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="text-sm font-accent font-normal text-pb-ivory/70 group-hover:text-accent-500 transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Decorative element */}
          <div className="mt-8">
            <span className="font-decorative text-xs text-accent-400/50">
              ✦ Currently open to new opportunities ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}