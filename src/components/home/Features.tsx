import React from 'react';
import { Wand2, FileText, Code, RefreshCw } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-lg rounded-lg hover:-translate-y-1">
      <div className="mb-4 p-3 bg-blue-100 text-blue-600 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wand2 size={24} />,
      title: 'AI-Powered Generation',
      description: 'Describe your form in plain English, and our AI creates it instantly.',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Live Preview',
      description: 'See your form take shape in real-time as you refine your description.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Test Immediately',
      description: 'Try out your form functionality right away to ensure it works perfectly.',
    },
    {
      icon: <Code size={24} />,
      title: 'Export Anywhere',
      description: 'Get HTML code or embed links to use your forms on any website.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How FormGenius Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes form creation effortless. Just describe what you need, and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;