
import { Code, Database, Palette, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "HTML", logo: "🌐" },
        { name: "CSS", logo: "🎨" },
        { name: "JavaScript", logo: "🟨" },
        { name: "C", logo: "⚡" },
        { name: "C++", logo: "🔧" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: "Angular", logo: "🅰️" },
        { name: "React.js", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "Express.js", logo: "🚀" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "GitHub", logo: "🐙" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Spline", logo: "📐" }
      ]
    },
    {
      title: "UI Libraries",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "Shadcn", logo: "🎯" },
        { name: "Chakra UI", logo: "⚡" },
        { name: "MUI", logo: "💎" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
            Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Technical Expertise
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h4 className="font-bold text-lg">{category.title}</h4>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white p-3 rounded border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.logo}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuously learning and expanding my technical skill set to stay current with 
            industry trends and best practices in full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
