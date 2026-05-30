import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center pt-24 sm:pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="sr-only">Kashyap R Dhamecha — Full-Stack Developer building digital experiences since 2023.</span>
            <span aria-hidden="true">
              BUILDING
              <span className="block">
                DIGITAL
                <span className="inline-block bg-white text-black px-2 md:px-4 py-1 md:py-2 ml-2 md:ml-4 rounded-full text-sm md:text-base">
                  EXPERIENCES
                </span>
              </span>
              <span className="block mt-2">SINCE 2023</span>
            </span>
          </h1>
          
          <div className="mt-6 md:mt-8 text-gray-300">
            <p className="text-base md:text-lg">
              B.Tech Computer Science & Engineering student at Rai University,
              passionate about full-stack development and creating impactful digital solutions.
            </p>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#portfolio" className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 text-center">
              View My Work
            </a>
            <a href="#contact" className="border border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-300 text-center">
              Get In Touch
            </a>
            <a 
              href="https://drive.google.com/file/d/1hWmvAp0mSeGVFi3_u8akLfvSx4OhaExp/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-300 text-center flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <Avatar className="w-60 h-60 md:w-80 md:h-80">
            <AvatarImage 
              src="https://i.postimg.cc/LXVrxxXh/Kashyap.jpg" 
              alt="Kashyap R Dhamecha"
              className="object-cover"
            />
            <AvatarFallback className="bg-gray-800 text-gray-400 text-lg">
              KRD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;
