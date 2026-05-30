import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('home')}
            className="text-black font-extrabold text-xl tracking-tight cursor-pointer hover:opacity-85 transition-opacity"
          >
            Kashyap<span className="text-neutral-500 font-normal"> Dhamecha</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-neutral-600 hover:text-black font-medium text-sm transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-neutral-600 hover:text-black font-medium text-sm transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-neutral-600 hover:text-black font-medium text-sm transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-neutral-600 hover:text-black font-medium text-sm transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 hover:text-black font-medium text-sm transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white hover:bg-neutral-800 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-1 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-neutral-600 hover:text-black font-medium text-base transition-colors duration-300 text-left py-1"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-neutral-600 hover:text-black font-medium text-base transition-colors duration-300 text-left py-1"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-neutral-600 hover:text-black font-medium text-base transition-colors duration-300 text-left py-1"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-neutral-600 hover:text-black font-medium text-base transition-colors duration-300 text-left py-1"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-neutral-600 hover:text-black font-medium text-base transition-colors duration-300 text-left py-1"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white hover:bg-neutral-800 w-full py-2.5 rounded-full text-center text-sm font-semibold transition-all duration-300"
              >
                Get in touch
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
