import React, { useState } from 'react';

const ToolsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'nlp', name: 'NLP' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'audio', name: 'Audio AI' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #bf00ff, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Recently Added Tools
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover cutting-edge AI tools and get instant explanations powered by Gemini AI
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition font-medium ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-400 text-white'
                  : 'glass text-slate-300 hover:text-cyan-400'
              }`}
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: '600'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-3 gap-8">
          <ToolCard 
            name="GPT-4 Turbo"
            description="Advanced language model for complex reasoning tasks"
            category="NLP"
            tags={['Language', 'Reasoning', 'API']}
          />
          <ToolCard 
            name="DALL-E 3"
            description="Generate stunning images from text descriptions"
            category="Vision"
            tags={['Image Generation', 'Creative', 'API']}
          />
          <ToolCard 
            name="Whisper"
            description="Automatic speech recognition with high accuracy"
            category="Audio"
            tags={['Speech', 'Transcription', 'Open Source']}
          />
          <ToolCard 
            name="Claude Sonnet"
            description="Helpful AI assistant for analysis and reasoning"
            category="NLP"
            tags={['Assistant', 'Analysis', 'Safety']}
          />
          <ToolCard 
            name="Stable Diffusion XL"
            description="Open-source image generation with fine control"
            category="Vision"
            tags={['Image Generation', 'Open Source', 'Customizable']}
          />
          <ToolCard 
            name="LangChain"
            description="Framework for developing LLM-powered applications"
            category="ML"
            tags={['Framework', 'Development', 'Integration']}
          />
        </div>

        <div className="text-center mt-12">
          <button 
            className="btn-futuristic px-8 py-4"
            onClick={() => window.location.href = '/tools/'}
          >
            Explore All Tools
          </button>
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({ name, description, category, tags }) => {
  const [isAsking, setIsAsking] = useState(false);

  const handleAskAI = () => {
    setIsAsking(true);
    // Simulate AI explanation request
    setTimeout(() => {
      setIsAsking(false);
      alert(`AI Explanation for ${name}: This would show a detailed explanation from Gemini AI!`);
    }, 1500);
  };

  return (
    <article className="card hover-lift transition group">
      <div className="flex flex-col h-full">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: 'linear-gradient(45deg, #6b46c1, #8b5cf6)',
              color: 'white'
            }}
          >
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm">🤖</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-cyan-400 transition">
          {name}
        </h3>
        
        <p className="text-slate-400 mb-4 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded glass text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3">
          <button 
            className="flex-1 btn-futuristic py-2 text-sm"
            onClick={handleAskAI}
            disabled={isAsking}
          >
            {isAsking ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Asking AI...
              </span>
            ) : (
              '🤖 Ask AI'
            )}
          </button>
          <button 
            className="px-4 py-2 glass rounded-lg hover:glow transition text-cyan-400"
            title="Learn more"
          >
            📖
          </button>
        </div>
      </div>
    </article>
  );
};

export default ToolsSection;