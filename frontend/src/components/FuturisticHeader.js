import React, { useState, useEffect } from 'react';

const FuturisticHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        isScrolled ? 'glass glow' : 'bg-transparent'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(26, 26, 62, 0.9)' 
          : 'linear-gradient(90deg, rgba(10, 10, 26, 0.8), rgba(45, 45, 95, 0.6))',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(5px)',
        borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.3)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(45deg, #00d4ff, #bf00ff)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
              }}
            >
              <span className="text-white font-bold text-lg">🤖</span>
            </div>
            <h1 
              className="text-2xl font-bold"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: 'linear-gradient(45deg, #00d4ff, #bf00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI Curator
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/news/" text="News" />
            <NavLink href="/tools/" text="Tools" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-lg glass transition hover:glow"
              onClick={() => {/* Add mobile menu toggle logic */}}
            >
              <svg 
                className="w-6 h-6 text-cyan-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Animated underline */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
          style={{
            width: isScrolled ? '100%' : '0%',
            background: 'linear-gradient(90deg, #00d4ff, #bf00ff)',
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)'
          }}
        />
      </nav>
    </header>
  );
};

const NavLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-slate-300 hover:text-cyan-400 transition font-medium"
      style={{
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: '500',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        e.target.style.textShadow = '0 0 10px #00d4ff';
      }}
      onMouseLeave={(e) => {
        e.target.style.textShadow = 'none';
      }}
    >
      {text}
      <span 
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 hover:w-full"
      />
    </a>
  );
};

export default FuturisticHeader;