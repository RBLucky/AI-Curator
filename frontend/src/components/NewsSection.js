import React from 'react';

const NewsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #8b5cf6, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Latest AI News
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stay updated with the most recent developments in artificial intelligence
          </p>
        </div>

        {/* News grid will be populated dynamically */}
        <div className="grid grid-2 gap-8">
          <NewsCard 
            title="Revolutionary AI Model Released"
            excerpt="A new breakthrough in machine learning has been announced..."
            source="AI Research Today"
            time="2 hours ago"
          />
          <NewsCard 
            title="Ethics in AI Development"
            excerpt="Leading researchers discuss the importance of ethical considerations..."
            source="Tech Ethics Weekly"
            time="4 hours ago"
          />
          <NewsCard 
            title="AI in Healthcare Advances"
            excerpt="New applications of AI in medical diagnosis show promising results..."
            source="Medical AI Journal"
            time="6 hours ago"
          />
        </div>

        <div className="text-center mt-12">
          <button 
            className="btn-futuristic px-8 py-4"
            onClick={() => window.location.href = '/news/'}
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ title, excerpt, source, time }) => {
  return (
    <article className="card hover-lift transition cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-cyan-400 font-medium">{source}</span>
          <span className="text-sm text-slate-500">{time}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-200 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <button 
            className="text-cyan-400 hover:text-cyan-300 transition font-medium"
            style={{ textShadow: '0 0 5px #00d4ff' }}
          >
            Read More →
          </button>
          <div className="flex space-x-2">
            <button className="text-slate-500 hover:text-cyan-400 transition">
              📖
            </button>
            <button className="text-slate-500 hover:text-purple-400 transition">
              🔗
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsSection;