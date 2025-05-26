import React from 'react';
import ReactDOM from 'react-dom';
import FuturisticHeader from './components/FuturisticHeader';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import ToolsSection from './components/ToolsSection';
import './styles/main.css';

// Initialize React components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Replace header if element exists
  const headerElement = document.getElementById('react-header');
  if (headerElement) {
    ReactDOM.render(<FuturisticHeader />, headerElement);
  }

  // Replace hero section if element exists
  const heroElement = document.getElementById('react-hero');
  if (heroElement) {
    ReactDOM.render(<HeroSection />, heroElement);
  }

  // Replace news section if element exists
  const newsElement = document.getElementById('react-news');
  if (newsElement) {
    ReactDOM.render(<NewsSection />, newsElement);
  }

  // Replace tools section if element exists
  const toolsElement = document.getElementById('react-tools');
  if (toolsElement) {
    ReactDOM.render(<ToolsSection />, toolsElement);
  }
});