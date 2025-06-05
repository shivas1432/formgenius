import React from 'react';
import { Play } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See FormGenius in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how easy it is to create professional forms in seconds with our AI-powered platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            {/* Demo video placeholder with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-900/40 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <Play size={28} className="ml-1" />
              </button>
            </div>

            {/* Placeholder image - in a real app, this would be a video thumbnail */}
            <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
              <p className="text-gray-500 text-lg font-medium">Demo Video</p>
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-600 text-sm">
            Click to watch the full demo of FormGenius
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;