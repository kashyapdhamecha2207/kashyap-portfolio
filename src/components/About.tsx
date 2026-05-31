const About = () => {
  return (
    <section id="about" className="py-24 bg-background dark:bg-zinc-950 text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/85 dark:border-neutral-700">
              About Me
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight uppercase">
              Driven by curiosity,
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">structured by design.</span>
            </h2>
          </div>
        </div>

        {/* Section Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-350 text-xs font-bold uppercase tracking-wider rounded-md">
              My Journey
            </div>
            
            <p className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
              As a student of Computer Science & Engineering, I bridge the gap between structured logic and creative interface design.
            </p>
            
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              My path in full-stack development is centered on learning by building. Working on projects has allowed me to delve deep into the React and Node.js ecosystems, database schemas, and clean state management.
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              I am actively involved with **Coding Gita**, where I collaborate with mentors and peers to tackle real-world development challenges. I focus on developing clean, responsive layouts and writing semantic, performant code.
            </p>
          </div>

          {/* Right Column: Education & Experience Timeline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block px-3 py-1 bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider rounded-md">
              Education & Affiliations
            </div>

            <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 space-y-8">
              
              {/* Item 1 */}
              <div className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[30px] top-1.5 w-4.5 h-4.5 rounded-full bg-violet-600 border-4 border-white dark:border-zinc-950 shadow-xs"></div>
                <div>
                  <span className="text-xs font-bold text-violet-500 block uppercase">2024 — 2028</span>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mt-1">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Computer Science and Engineering</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Rai University • Currently in 5th Semester</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[30px] top-1.5 w-4.5 h-4.5 rounded-full bg-sky-500 border-4 border-white dark:border-zinc-950 shadow-xs"></div>
                <div>
                  <span className="text-xs font-bold text-sky-500 block uppercase">2024 — Present</span>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mt-1">Coding Gita Member</h4>
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">Collaborative Project-Based Learning</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Developing real-world clone applications and full-stack solutions.</p>
                </div>
              </div>

              {/* Note: changed 3rd to 5th semester on item 1 to match the Hero's updated stats! */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
