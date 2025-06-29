import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. 
              Today, I specialize in building scalable web applications using modern technologies like React, 
              Node.js, and cloud platforms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through blog posts and mentoring.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Development</h3>
              </div>
              <p className="text-gray-300">
                Building robust, scalable applications with clean, maintainable code using the latest technologies.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
              <div className="flex items-center mb-4">
                <Palette className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Design</h3>
              </div>
              <p className="text-gray-300">
                Creating intuitive user interfaces that provide exceptional user experiences across all devices.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
              <div className="flex items-center mb-4">
                <Zap className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Performance</h3>
              </div>
              <p className="text-gray-300">
                Optimizing applications for speed, accessibility, and search engine visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;