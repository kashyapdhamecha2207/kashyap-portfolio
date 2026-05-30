
const Portfolio = () => {
  const featuredProject = {
    title: "English Skills Enhancement Platform",
    description: "An innovative project aimed at improving English language skills and vocabulary through interactive learning modules and engaging exercises.",
    features: [
      "Interactive vocabulary builder",
      "Grammar practice modules", 
      "Progress tracking system",
      "Personalized learning paths"
    ],
    status: "In Development"
  };

  const smallProjects = [
    {
      title: "Sudoku",
      description: "An interactive 9x9 Sudoku game built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      link: "https://sudokubykashyap.netlify.app/"
    },
    {
      title: "Chess",
      description: "A visually styled page of a chess built with HTML and CSS.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://chessbykashyap.netlify.app/"
    },
    {
      title: "Netflix",
      description: "A responsive Netflix homepage replica designed using only HTML and CSS.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://netfliksbykashyap.netlify.app/"
    },
    {
      title: "RedBus",
      description: "A static RedBus homepage clone showcasing layout and styling with HTML and CSS.",
      tech: ["HTML", "CSS"],
      status: "Completed",
      link: "https://redbusbykashyap.netlify.app/"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A simple two-player Tic-Tac-Toe game with win detection and reset functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      link: "https://tictactoebykashyap.netlify.app/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            My Work & Achievements
          </h3>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold mb-8 text-white">Featured Projects</h4>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4">
                <span className="inline-block bg-white text-black px-3 py-1 text-sm font-medium rounded-full">
                  {featuredProject.status}
                </span>
              </div>
              
              <h5 className="text-2xl font-bold mb-4">{featuredProject.title}</h5>
              <p className="text-gray-300 mb-6">{featuredProject.description}</p>
              
              <div className="mb-6">
                <h6 className="font-semibold mb-3">Key Features:</h6>
                <ul className="space-y-2">
                  {featuredProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300">
                Learn More
              </button>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Project Preview</span>
                </div>
                <p className="text-gray-400">More projects coming soon...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Small Projects */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold mb-8 text-white">Small Projects</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="mb-3">
                  <span className="inline-block bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <h5 className="text-xl font-bold mb-3">{project.title}</h5>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h6 className="font-semibold mb-2 text-sm">Technologies:</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors duration-300 text-sm"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Figma Projects */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold mb-8 text-white">Figma Projects</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-3">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
              
              <h5 className="text-xl font-bold mb-3">CodingGita Clone</h5>
              <p className="text-gray-300 mb-4">A UI/UX design clone of the CodingGita website created in Figma.</p>
              
              <div className="mb-4">
                <h6 className="font-semibold mb-2 text-sm">Tools:</h6>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                    Figma
                  </span>
                </div>
              </div>

              <a 
                href="https://www.figma.com/design/RXeW0xp8qyUx8eB223Qjaz/Untitled?node-id=1-2&p=f&t=jH2Cx72mPRYX7oPD-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                View Design
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-3">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
              
              <h5 className="text-xl font-bold mb-3">IRCTC Clone</h5>
              <p className="text-gray-300 mb-4">A UI/UX design clone of the IRCTC Railway website homepage created in Figma.</p>
              
              <div className="mb-4">
                <h6 className="font-semibold mb-2 text-sm">Tools:</h6>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                    Figma
                  </span>
                </div>
              </div>

              <a 
                href="https://www.figma.com/design/C4vk2xJ5QtQfPW3tKgfQCV/Untitled?node-id=0-1&t=mz3iD7IR0OWcV09e-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                View Design
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-3">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
              
              <h5 className="text-xl font-bold mb-3">Product Page Design</h5>
              <p className="text-gray-300 mb-4">A modern product page UI design showcasing layout and visual hierarchy in Figma.</p>
              
              <div className="mb-4">
                <h6 className="font-semibold mb-2 text-sm">Tools:</h6>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                    Figma
                  </span>
                </div>
              </div>

              <a 
                href="https://www.figma.com/design/nHt5MDiu9oWInoGqvr2PYs/Untitled?node-id=0-1&t=wxvss1NTHRrI8hC8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                View Design
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-3">
                <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
              
              <h5 className="text-xl font-bold mb-3">Instagram Clone</h5>
              <p className="text-gray-300 mb-4">A UI/UX design clone of the Instagram app interface created in Figma.</p>
              
              <div className="mb-4">
                <h6 className="font-semibold mb-2 text-sm">Tools:</h6>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                    Figma
                  </span>
                </div>
              </div>

              <a 
                href="https://www.figma.com/design/qhWlioGq4wGc1xypWUqrOV/Untitled?node-id=0-1&t=10rNyeeFQuVMSNzJ-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                View Design
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
