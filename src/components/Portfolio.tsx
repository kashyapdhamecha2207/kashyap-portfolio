import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const featuredProject = {
    title: "English Skills Enhancement Platform",
    description: "An innovative digital learning platform aimed at improving English language proficiency and vocabulary through interactive modules, vocabulary builders, and personalized progress tracking.",
    features: [
      "Interactive vocabulary builder",
      "Grammar practice modules", 
      "Progress tracking system",
      "Personalized learning paths"
    ],
    status: "In Development",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS"]
  };

  const smallProjects = [
    {
      title: "Sudoku Game",
      description: "Interactive 9x9 Sudoku board game featuring difficulty levels and automated error validation.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      link: "https://sudokubykashyap.netlify.app/",
      themeClass: "bg-sky-50/30 border-sky-100 hover:border-sky-500 hover:bg-sky-50/60 text-sky-800",
      tagClass: "bg-sky-100/60 text-sky-800 border-sky-200"
    },
    {
      title: "Chess Interface",
      description: "A visually polished responsive chess board interface constructed with semantic layouts.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://chessbykashyap.netlify.app/",
      themeClass: "bg-amber-50/30 border-amber-100 hover:border-amber-500 hover:bg-amber-50/60 text-amber-900",
      tagClass: "bg-amber-100/60 text-amber-800 border-amber-200"
    },
    {
      title: "Netflix Clone",
      description: "A pixel-perfect responsive clone of the Netflix home streaming page structure and UI.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://netfliksbykashyap.netlify.app/",
      themeClass: "bg-red-50/30 border-red-100 hover:border-red-500 hover:bg-red-50/60 text-red-900",
      tagClass: "bg-red-100/60 text-red-800 border-red-200"
    },
    {
      title: "RedBus Clone",
      description: "Static replica of the RedBus bus booking platform landing page, focusing on layout integrity.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://redbusbykashyap.netlify.app/",
      themeClass: "bg-rose-50/30 border-rose-100 hover:border-rose-500 hover:bg-rose-50/60 text-rose-900",
      tagClass: "bg-rose-100/60 text-rose-800 border-rose-200"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Classic two-player Tic-Tac-Toe featuring dynamic score tracking and visual board animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      link: "https://tictactoebykashyap.netlify.app/",
      themeClass: "bg-teal-50/30 border-teal-100 hover:border-teal-500 hover:bg-teal-50/60 text-teal-900",
      tagClass: "bg-teal-100/60 text-teal-800 border-teal-200"
    }
  ];

  const figmaProjects = [
    {
      title: "CodingGita Clone",
      description: "High-fidelity mobile and desktop UI design clone replicating the interactive pages of CodingGita.",
      tools: ["Figma"],
      link: "https://www.figma.com/design/RXeW0xp8qyUx8eB223Qjaz/Untitled?node-id=1-2&p=f&t=jH2Cx72mPRYX7oPD-0",
      themeClass: "bg-purple-50/30 border-purple-100 hover:border-purple-500 hover:bg-purple-50/60 text-purple-900",
      tagClass: "bg-purple-100/60 text-purple-800 border-purple-200"
    },
    {
      title: "IRCTC Clone",
      description: "UX case study and structural layout redesign of the IRCTC Indian Railways reservation homepage.",
      tools: ["Figma"],
      link: "https://www.figma.com/design/C4vk2xJ5QtQfPW3tKgfQCV/Untitled?node-id=0-1&t=mz3iD7IR0OWcV09e-1",
      themeClass: "bg-indigo-50/30 border-indigo-100 hover:border-indigo-500 hover:bg-indigo-50/60 text-indigo-900",
      tagClass: "bg-indigo-100/60 text-indigo-800 border-indigo-200"
    },
    {
      title: "Product Page Design",
      description: "Modern e-commerce product display page utilizing advanced auto-layout and component systems.",
      tools: ["Figma"],
      link: "https://www.figma.com/design/nHt5MDiu9oWInoGqvr2PYs/Untitled?node-id=0-1&t=wxvss1NTHRrI8hC8-1",
      themeClass: "bg-pink-50/30 border-pink-100 hover:border-pink-500 hover:bg-pink-50/60 text-pink-900",
      tagClass: "bg-pink-100/60 text-pink-800 border-pink-200"
    },
    {
      title: "Instagram Clone",
      description: "Full UI design layout replica mapping the profile feed, navigation, and story components of Instagram.",
      tools: ["Figma"],
      link: "https://www.figma.com/design/qhWlioGq4wGc1xypWUqrOV/Untitled?node-id=0-1&t=10rNyeeFQuVMSNzJ-1",
      themeClass: "bg-fuchsia-50/30 border-fuchsia-100 hover:border-fuchsia-500 hover:bg-fuchsia-50/60 text-fuchsia-900",
      tagClass: "bg-fuchsia-100/60 text-fuchsia-800 border-fuchsia-200"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background text-black border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200/85">
              Portfolio
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight uppercase">
              My Works &
              <br />
              <span className="text-neutral-400">digital blueprints.</span>
            </h2>
          </div>
        </div>

        {/* 1. Featured Project */}
        <div className="mb-20 pt-8 border-t border-neutral-200/80">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">01 / Featured Project</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-950 text-white uppercase tracking-wider">
              {featuredProject.status}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/30 border border-indigo-100 p-8 rounded-3xl shadow-xs hover:border-indigo-400 hover:shadow-sm transition-all duration-300">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">{featuredProject.title}</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{featuredProject.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Key Features Built</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-700">
                  {featuredProject.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">Tech Stacks In Use</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-50/70 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 w-full sm:w-auto">
                  Documentation Pending
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Web Projects */}
        <div className="mb-20 pt-8 border-t border-neutral-200/80">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">02 / Web Creations</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((project, idx) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className={`group border p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 ${project.themeClass}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 border rounded-full ${project.tagClass}`}>
                      {project.status}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-200/50">
                  <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Technologies</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, index) => (
                      <span key={index} className={`px-2.5 py-0.5 border rounded-full text-[10px] font-semibold ${project.tagClass}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Figma Designs */}
        <div className="pt-8 border-t border-neutral-200/80">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">03 / Figma Blueprints</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {figmaProjects.map((project, idx) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className={`group border p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 ${project.themeClass}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 border rounded-full ${project.tagClass}`}>
                      UI Design
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">{project.title}</h4>
                  <p className="text-neutral-600 text-xs leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="pt-4 border-t border-neutral-200/50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Tools</span>
                  <span className={`px-2.5 py-0.5 border rounded-full text-[10px] font-semibold ${project.tagClass}`}>
                    Figma
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
