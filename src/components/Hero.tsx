import { Download, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const topTech = [
    { name: "React.js", logo: "⚛️", colorClass: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 dark:bg-sky-950/20 dark:text-sky-300 dark:border-sky-900/60 dark:hover:bg-sky-950/40" },
    { name: "TypeScript", logo: "🟦", colorClass: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/60 dark:hover:bg-blue-950/40" },
    { name: "Node.js", logo: "🟢", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/60 dark:hover:bg-emerald-950/40" },
    { name: "Express.js", logo: "🚀", colorClass: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-950/20 dark:text-purple-300 dark:border-purple-900/60 dark:hover:bg-purple-950/40" },
    { name: "MongoDB", logo: "🍃", colorClass: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-950/20 dark:text-green-300 dark:border-green-900/60 dark:hover:bg-green-950/40" },
    { name: "Figma", logo: "🎨", colorClass: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-900/60 dark:hover:bg-rose-950/40" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-background dark:bg-zinc-950 text-black dark:text-white pt-32 pb-16 overflow-hidden transition-colors duration-300">
      
      {/* Decorative colorful background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-sky-200/30 dark:bg-sky-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-rose-100/30 dark:bg-rose-900/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Top Hero Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Headline & Badges */}
          <div className="lg:col-span-8 space-y-6">
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-black dark:text-white leading-[0.9] uppercase">
              <span className="block text-2xl sm:text-3xl font-bold tracking-tight text-neutral-400 dark:text-neutral-500 normal-case mb-4">Kashyap Dhamecha</span>
              Full-Stack
              <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Developer</span>
            </h1>

            <div className="text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Hi, I'm Kashyap, a B.Tech Computer Science & Engineering student at Rai University, building high-quality, functional, and intuitive web experiences.
            </div>

            {/* Core Tech Stack Horizontal List */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-3">Top Stack</span>
              <div className="flex flex-wrap gap-2.5">
                {topTech.map((tech) => (
                  <div 
                    key={tech.name} 
                    className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-semibold shadow-xs transition-colors cursor-default ${tech.colorClass}`}
                  >
                    <span>{tech.logo}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative p-2 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] shadow-xs max-w-xs w-full aspect-square md:max-w-sm">
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img 
                  src="https://i.postimg.cc/LXVrxxXh/Kashyap.jpg" 
                  alt="Kashyap R Dhamecha"
                  className="w-full h-full object-cover transition-all duration-700 ease-out scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator / Divider */}
        <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 my-16"></div>

        {/* Bottom Hero Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Mini-Intro & Actions */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-md">
              Philosophy
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
              "Development has always been more than just compiling code — it's about crafting digital architecture that solves real problems."
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-lg">
              Drawing inspiration from clean, structure-driven layouts, my goal is to deliver performant frontends and clean backend APIs that fit together seamlessly.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-3">
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-1.5 shadow-sm"
              >
                View Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-850 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              >
                Get In Touch
              </button>
              <a 
                href="https://drive.google.com/file/d/1ivAIpdaU_JgQTHHUP0lZycq_JsmbhbwO/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-850 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 border-l border-neutral-200/80 dark:border-neutral-800/80 pl-0 md:pl-12 pt-8 md:pt-0">
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">+10</div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">Completed Projects</div>
              <p className="text-neutral-500 dark:text-neutral-450 text-xs mt-2 leading-relaxed">
                Functional full-stack and static web projects built with HTML, CSS, React, and Node.
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">5+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">Figma UI Clones</div>
              <p className="text-neutral-500 dark:text-neutral-450 text-xs mt-2 leading-relaxed">
                Replicating professional designs to build precise pixel layouts.
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">5th</div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">B.Tech Semester</div>
              <p className="text-neutral-500 dark:text-neutral-450 text-xs mt-2 leading-relaxed">
                Pursuing Computer Science & Engineering at Rai University.
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">Dedication</div>
              <p className="text-neutral-500 dark:text-neutral-450 text-xs mt-2 leading-relaxed">
                Passionate about learning new stacks and delivering clean code.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
