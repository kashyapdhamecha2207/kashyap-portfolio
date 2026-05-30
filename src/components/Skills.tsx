import { Code, Database, Palette, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-neutral-800" />,
      skills: [
        { name: "HTML", logo: "🌐" },
        { name: "CSS", logo: "🎨" },
        { name: "JavaScript", logo: "🟨" },
        { name: "C Language", logo: "⚡" },
        { name: "C++", logo: "🔧" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-neutral-800" />,
      skills: [
        { name: "React.js", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "Angular", logo: "🅰️" },
        { name: "Express.js", logo: "🚀" }
      ]
    },
    {
      title: "Tools & Databases",
      icon: <Database className="w-5 h-5 text-neutral-800" />,
      skills: [
        { name: "GitHub", logo: "🐙" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Spline 3D", logo: "📐" }
      ]
    },
    {
      title: "UI Design & Libraries",
      icon: <Palette className="w-5 h-5 text-neutral-800" />,
      skills: [
        { name: "Figma", logo: "🎨" },
        { name: "Shadcn UI", logo: "🎯" },
        { name: "Material UI", logo: "💎" },
        { name: "Chakra UI", logo: "⚡" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background text-black border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200/85">
              Skills
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight uppercase">
              Technical
              <br />
              <span className="text-neutral-400">arsenal & toolbelt.</span>
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-neutral-200/80">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-neutral-200 p-6 rounded-3xl shadow-xs hover:border-black transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-neutral-100">
                  <div className="p-2 bg-neutral-100 rounded-xl">
                    {category.icon}
                  </div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wider text-neutral-900">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200/60 rounded-full text-xs font-semibold text-neutral-800 hover:bg-white hover:border-black transition-all duration-300"
                    >
                      <span className="text-sm">{skill.logo}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <div className="mt-16 text-center border-t border-neutral-100 pt-8">
          <p className="text-neutral-500 text-sm max-w-xl mx-auto leading-relaxed">
            Consistently learning new specifications, focusing on building high-performance, responsive applications, and studying modern UX patterns.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
