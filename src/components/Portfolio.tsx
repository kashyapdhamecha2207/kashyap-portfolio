import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';

interface PortfolioProps {
  hoveredSkillCategory: string | null;
}

const Portfolio = ({ hoveredSkillCategory }: PortfolioProps) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Full-Stack' | 'Frontend Clones' | 'Figma Designs'>('All');

  const projects = [
    {
      title: "English Skills Enhancement Platform",
      description: "An innovative digital learning platform aimed at improving English language proficiency and vocabulary through interactive modules, vocabulary builders, and personalized progress tracking.",
      features: [
        "Interactive vocabulary builder",
        "Grammar practice modules", 
        "Progress tracking system",
        "Personalized learning paths"
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      category: "Full-Stack",
      status: "In Development",
      demoLink: "",
      codeLink: "",
      isFeatured: true
    },
    {
      title: "Sudoku Game",
      description: "Interactive 9x9 Sudoku board game featuring difficulty levels and automated error validation.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend Clones",
      status: "Completed",
      demoLink: "https://sudokubykashyap.netlify.app/",
      codeLink: "https://github.com/kashyapdhamecha2207/sudoku",
      themeClass: "bg-sky-50/30 dark:bg-sky-950/20 border-sky-100 dark:border-sky-900/60 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-50/60 dark:hover:bg-sky-950/40 text-sky-850 dark:text-sky-200",
      tagClass: "bg-sky-100/60 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 border-sky-250 dark:border-sky-800"
    },
    {
      title: "Chess Interface",
      description: "A visually polished responsive chess board interface constructed with semantic layouts.",
      tech: ["HTML", "CSS"],
      category: "Frontend Clones",
      status: "Completed",
      demoLink: "https://chessbykashyap.netlify.app/",
      codeLink: "https://github.com/kashyapdhamecha2207/chess",
      themeClass: "bg-amber-50/30 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/60 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-50/60 dark:hover:bg-amber-950/40 text-amber-900 dark:text-amber-250",
      tagClass: "bg-amber-100/60 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-amber-250 dark:border-amber-800"
    },
    {
      title: "Netflix Clone",
      description: "A pixel-perfect responsive clone of the Netflix home streaming page structure and UI.",
      tech: ["HTML", "CSS"],
      category: "Frontend Clones",
      status: "Completed",
      demoLink: "https://netfliksbykashyap.netlify.app/",
      codeLink: "https://github.com/kashyapdhamecha2207/netflix-clone",
      themeClass: "bg-red-50/30 dark:bg-red-950/20 border-red-100 dark:border-red-900/60 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50/60 dark:hover:bg-red-950/40 text-red-900 dark:text-red-200",
      tagClass: "bg-red-100/60 dark:bg-red-900/40 text-red-800 dark:text-red-200 border-red-250 dark:border-red-800"
    },
    {
      title: "RedBus Clone",
      description: "Static replica of the RedBus bus booking platform landing page, focusing on layout integrity.",
      tech: ["HTML", "CSS"],
      category: "Frontend Clones",
      status: "Completed",
      demoLink: "https://redbusbykashyap.netlify.app/",
      codeLink: "",
      themeClass: "bg-rose-50/30 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/60 hover:border-rose-500 dark:hover:border-rose-500 hover:bg-rose-50/60 dark:hover:bg-rose-950/40 text-rose-900 dark:text-rose-200",
      tagClass: "bg-rose-100/60 dark:bg-rose-900/40 text-rose-800 dark:text-rose-200 border-rose-250 dark:border-rose-800"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Classic two-player Tic-Tac-Toe featuring dynamic score tracking and visual board animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend Clones",
      status: "Completed",
      demoLink: "https://tictactoebykashyap.netlify.app/",
      codeLink: "https://github.com/kashyapdhamecha2207/tic-tac-toe",
      themeClass: "bg-teal-50/30 dark:bg-teal-950/20 border-teal-100 dark:border-teal-900/60 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50/60 dark:hover:bg-teal-950/40 text-teal-900 dark:text-teal-200",
      tagClass: "bg-teal-100/60 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200 border-teal-250 dark:border-teal-800"
    },
    {
      title: "CodingGita Clone",
      description: "High-fidelity mobile and desktop UI design clone replicating the interactive pages of CodingGita.",
      tech: ["Figma"],
      category: "Figma Designs",
      status: "UI Design",
      demoLink: "https://www.figma.com/design/RXeW0xp8qyUx8eB223Qjaz/Untitled?node-id=1-2&p=f&t=jH2Cx72mPRYX7oPD-0",
      codeLink: "",
      themeClass: "bg-purple-50/30 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/60 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50/60 dark:hover:bg-purple-950/40 text-purple-900 dark:text-purple-200",
      tagClass: "bg-purple-100/60 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 border-purple-250 dark:border-purple-800"
    },
    {
      title: "IRCTC Clone",
      description: "UX case study and structural layout redesign of the IRCTC Indian Railways reservation homepage.",
      tech: ["Figma"],
      category: "Figma Designs",
      status: "UI Design",
      demoLink: "https://www.figma.com/design/C4vk2xJ5QtQfPW3tKgfQCV/Untitled?node-id=0-1&t=mz3iD7IR0OWcV09e-1",
      codeLink: "",
      themeClass: "bg-indigo-50/30 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/60 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200",
      tagClass: "bg-indigo-100/60 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-200 border-indigo-250 dark:border-indigo-800"
    },
    {
      title: "Product Page Design",
      description: "Modern e-commerce product display page utilizing advanced auto-layout and component systems.",
      tech: ["Figma"],
      category: "Figma Designs",
      status: "UI Design",
      demoLink: "https://www.figma.com/design/nHt5MDiu9oWInoGqvr2PYs/Untitled?node-id=0-1&t=wxvss1NTHRrI8hC8-1",
      codeLink: "",
      themeClass: "bg-pink-50/30 dark:bg-pink-950/20 border-pink-100 dark:border-pink-900/60 hover:border-pink-500 dark:hover:border-pink-500 hover:bg-pink-50/60 dark:hover:bg-pink-950/40 text-pink-900 dark:text-pink-200",
      tagClass: "bg-pink-100/60 dark:bg-pink-900/40 text-pink-800 dark:text-pink-200 border-pink-250 dark:border-pink-800"
    },
    {
      title: "Instagram Clone",
      description: "Full UI design layout replica mapping the profile feed, navigation, and story components of Instagram.",
      tech: ["Figma"],
      category: "Figma Designs",
      status: "UI Design",
      demoLink: "https://www.figma.com/design/qhWlioGq4wGc1xypWUqrOV/Untitled?node-id=0-1&t=10rNyeeFQuVMSNzJ-1",
      codeLink: "",
      themeClass: "bg-fuchsia-50/30 dark:bg-fuchsia-950/20 border-fuchsia-100 dark:border-fuchsia-900/60 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 hover:bg-fuchsia-50/60 dark:hover:bg-fuchsia-950/40 text-fuchsia-900 dark:text-fuchsia-200",
      tagClass: "bg-fuchsia-100/60 dark:bg-fuchsia-900/40 text-fuchsia-800 dark:text-fuchsia-200 border-fuchsia-250 dark:border-fuchsia-800"
    }
  ];

  const isProjectHighlighted = (projectTechs: string[]) => {
    if (!hoveredSkillCategory) return false;
    const categoryTechMap: Record<string, string[]> = {
      "Programming Languages": ["HTML", "CSS", "JavaScript", "C Language", "C++"],
      "Frameworks & Libraries": ["React.js", "Next.js", "Angular", "Express.js", "Express", "Node.js"],
      "Tools & Databases": ["GitHub", "MongoDB", "Spline 3D"],
      "UI Design & Libraries": ["Figma", "Shadcn UI", "Material UI", "Chakra UI", "TailwindCSS"]
    };
    const targetTechs = categoryTechMap[hoveredSkillCategory] || [];
    return projectTechs.some(tech => 
      targetTechs.some(target => target.toLowerCase().includes(tech.toLowerCase()) || tech.toLowerCase().includes(target.toLowerCase()))
    );
  };

  const tabs = ['All', 'Full-Stack', 'Frontend Clones', 'Figma Designs'] as const;
  const filteredProjects = projects.filter(p => activeTab === 'All' || p.category === activeTab);

  const renderProjectGrid = (projectList: typeof projects) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => {
          const highlighted = isProjectHighlighted(project.tech);
          const isAnyCategoryHovered = hoveredSkillCategory !== null;
          return (
            <div
              key={idx}
              className={`group flex flex-col justify-between border p-6 rounded-3xl shadow-xs transition-all duration-500 ${project.themeClass} ${
                highlighted
                  ? 'border-neutral-900 dark:border-white ring-4 ring-neutral-900/10 dark:ring-white/10 scale-[1.02] shadow-md opacity-100'
                  : isAnyCategoryHovered
                    ? 'opacity-40 border-neutral-200 dark:border-neutral-800'
                    : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 border rounded-full ${project.tagClass}`}>
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="space-y-4">
                {/* Tech stack row */}
                <div className="space-y-2 pt-4 border-t border-neutral-200/40 dark:border-neutral-800/40">
                  <h5 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Technologies</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, index) => (
                      <span key={index} className={`px-2.5 py-0.5 border rounded-full text-[10px] font-semibold ${project.tagClass}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.demoLink ? (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black text-xs font-semibold rounded-xl transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white dark:text-black" />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-neutral-100 dark:bg-zinc-900 text-neutral-400 dark:text-neutral-600 text-xs font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      <Lock className="w-3 h-3" />
                      <span>No Demo</span>
                    </button>
                  )}

                  {project.codeLink ? (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-semibold rounded-xl transition-all duration-300"
                    >
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 border border-dashed border-neutral-300 dark:border-neutral-750 text-neutral-400 dark:text-neutral-600 text-xs font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      <Lock className="w-3 h-3" />
                      <span>Private</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-background dark:bg-zinc-900 text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/85 dark:border-neutral-700">
              Portfolio
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight uppercase">
              My Works &
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">digital blueprints.</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Filtering Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-16 pb-6 border-b border-neutral-200/60 dark:border-neutral-800/60">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-sm'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-black dark:bg-zinc-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Layout Grid */}
        <div className="space-y-16">
          {/* Featured Project Banner (Only when 'All' or 'Full-Stack' is active) */}
          {projects.filter(p => p.isFeatured && (activeTab === 'All' || activeTab === 'Full-Stack')).map((featured, idx) => {
            const highlighted = isProjectHighlighted(featured.tech);
            const isAnyCategoryHovered = hoveredSkillCategory !== null;
            return (
              <div 
                key={idx}
                className={`pt-4 transition-all duration-500 ${
                  highlighted 
                    ? 'scale-[1.01]' 
                    : isAnyCategoryHovered 
                      ? 'opacity-40' 
                      : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Featured Project</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-950 dark:bg-white text-white dark:text-black uppercase tracking-wider">
                    {featured.status}
                  </span>
                </div>

                <div className={`grid lg:grid-cols-12 gap-8 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/30 dark:from-indigo-950/20 dark:via-zinc-950 dark:to-sky-950/20 border p-8 rounded-3xl transition-all duration-300 ${
                  highlighted 
                    ? 'border-indigo-500 dark:border-sky-400 ring-4 ring-indigo-500/10 dark:ring-sky-400/10 shadow-md' 
                    : 'border-indigo-100 dark:border-neutral-800/80 hover:border-indigo-300 dark:hover:border-neutral-700 shadow-xs'
                }`}>
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-snug">{featured.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">{featured.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Key Features Built</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        {featured.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-sky-400 rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">Tech Stacks In Use</h4>
                      <div className="flex flex-wrap gap-2">
                        {featured.tech.map((t, idxVal) => (
                          <span key={idxVal} className="px-3 py-1 bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 rounded-full text-xs font-semibold text-indigo-700 dark:text-indigo-350">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                      {featured.demoLink ? (
                        <a 
                          href={featured.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 dark:bg-white text-white dark:text-black hover:bg-indigo-700 dark:hover:bg-neutral-200 rounded-xl text-sm font-semibold transition-all duration-300"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-150 dark:bg-neutral-900 text-neutral-455 dark:text-neutral-550 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-1.5"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>No Demo</span>
                        </button>
                      )}

                      {featured.codeLink ? (
                        <a 
                          href={featured.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl text-sm font-semibold transition-all duration-300"
                        >
                          <span>View Code</span>
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-dashed border-neutral-300 dark:border-neutral-750 text-neutral-450 dark:text-neutral-550 rounded-xl text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-1.5"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Private Repo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )})}

          {/* Render category grids based on selected tab */}
          {activeTab === 'All' ? (
            <>
              {/* Web Creations Section */}
              <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    02 / Web Creations
                  </span>
                </div>
                {renderProjectGrid(projects.filter(p => !p.isFeatured && p.category === 'Frontend Clones'))}
              </div>

              {/* Figma Designs Section */}
              <div className="pt-16 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    03 / Figma Blueprints
                  </span>
                </div>
                {renderProjectGrid(projects.filter(p => !p.isFeatured && p.category === 'Figma Designs'))}
              </div>
            </>
          ) : (
            <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  {activeTab} Category
                </span>
              </div>
              {renderProjectGrid(filteredProjects.filter(p => !p.isFeatured))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
