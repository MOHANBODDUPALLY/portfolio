import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MOHAN BODDUPALLY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Developer & UI/UX Designer passionate about creating beautiful, 
            functional digital experiences that make a difference.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/MohanGIT27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="www.linkedin.com/in/mohan-boddupally-6060061b9" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohanboddupally.inbox@gmail.com"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 transform"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;