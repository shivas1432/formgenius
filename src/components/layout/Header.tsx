import React from 'react';
import { Menu, X, FileInput } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#root')}>
          <FileInput className="h-8 w-8 text-white mr-2" />
          <span className="text-2xl font-bold text-white">FormGenius</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('#root')}
            className="text-white hover:text-blue-100 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('#form-builder')}
            className="text-white hover:text-blue-100 transition-colors"
          >
            Builder
          </button>
          <button
            onClick={() => scrollToSection('#pricing')}
            className="text-white hover:text-blue-100 transition-colors"
          >
            Pricing
          </button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scrollToSection('#form-builder')}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('#root')}
              className="text-white py-2 hover:bg-blue-600 px-4 rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('#form-builder')}
              className="text-white py-2 hover:bg-blue-600 px-4 rounded transition-colors"
            >
              Builder
            </button>
            <button
              onClick={() => scrollToSection('#pricing')}
              className="text-white py-2 hover:bg-blue-600 px-4 rounded transition-colors"
            >
              Pricing
            </button>
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() => scrollToSection('#form-builder')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;