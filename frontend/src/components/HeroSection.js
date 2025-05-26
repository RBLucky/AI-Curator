import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in"
          style={{
            fontFamily: 'Orbitron, monospace',
            background: 'linear-gradient(45deg, #00d4ff, #bf00ff, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
          }}
        >
          Welcome to the AI Curator!
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your curated hub for the latest news and tools in the world of{' '}
          <span 
            className="text-cyan-400 font-semibold"
            style={{
              textShadow: '0 0 10px #00d4ff'
            }}
          >
            Artificial Intelligence
          </span>
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="btn-futuristic px-8 py-4 text-lg hover-lift"
            onClick={() => window.location.href = '/news/'}
          >
            Explore Latest News
          </button>
          <button 
            className="btn-futuristic px-8 py-4 text-lg hover-lift"
            style={{
              background: 'linear-gradient(45deg, #1a1a3e, #2d2d5f)',
              border: '2px solid #00d4ff'
            }}
            onClick={() => window.location.href = '/tools/'}
          >
            Discover AI Tools
          </button>
        </div>

        {/* Floating icons */}
        <div className="absolute top-20 left-10 opacity-30">
          <div className="animate-bounce delay-1000">🤖</div>
        </div>
        <div className="absolute top-32 right-20 opacity-30">
          <div className="animate-bounce delay-2000">⚡</div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-30">
          <div className="animate-bounce delay-3000">🚀</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;