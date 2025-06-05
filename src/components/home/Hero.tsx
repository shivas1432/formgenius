import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBuilder = () => {
    const builderSection = document.querySelector('#form-builder');
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const demoSection = document.querySelector('#demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">FormGenius</span>
            <span className="block text-blue-200">AI Form Builder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Create beautiful, functional forms in seconds with the power of AI.
            Just describe what you need, and we'll build it for you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              rightIcon={<ArrowRight size={20} />}
              onClick={scrollToBuilder}
            >
              Try It Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-blue-800/30 text-white border-blue-400 hover:bg-blue-700/50"
              onClick={scrollToDemo}
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="bg-blue-800/30 rounded-lg p-4 inline-block text-blue-200 text-sm">
            <span className="font-medium">No coding required</span> • 
            <span className="ml-2">Export to HTML or embed code</span> • 
            <span className="ml-2">Live testing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;