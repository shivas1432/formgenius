import React from 'react';
import { FileInput, Github, Twitter } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <FileInput className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold">FormGenius</span>
            </div>
            <p className="text-gray-400">
              AI-powered form builder for the modern web.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/builder" className="text-gray-400 hover:text-white transition-colors">Form Builder</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FormGenius. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              Built with Bolt.new
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;