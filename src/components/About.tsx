
const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            I'm a highly <span className="text-gray-600">focused</span> student
            <br />
            <span className="text-gray-600">dedicated</span> to crafting
            <br />
            high-quality, impactful digital
            <br />
            experiences.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-4">Education</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Bachelor of Technology (B.Tech)</h5>
                <p className="text-gray-600">Computer Science and Engineering</p>
                <p className="text-gray-600">Rai University • Expected 2028</p>
                <p className="text-gray-600">Currently in 3rd Semester</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Background</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a passionate B.Tech Computer Science and Engineering student, I'm deeply involved 
              with Coding Gita and enthusiastic about building projects that blend creativity and 
              functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in technology is driven by a desire to create meaningful digital experiences 
              that solve real-world problems. I'm constantly learning and exploring new technologies 
              to expand my skill set and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
