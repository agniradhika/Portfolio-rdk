import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3"
  ];

  const backendSkills = ["Node.js", "MySQL", "FAST API"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
 <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I like resolving bugs, building new features, and learning new things.
              When I am not coding, I enjoy reading books, watching movies, and cooking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Masters (M.E.) in Software Engineering for Industrial Applications</strong> - Hof University of Applied Sciences
                  (2022-2025)
                </li>
                 <li>
                  <strong>Bachelors in Engineering (B.E.) in Computer Science </strong> - Savitribai Phule Pune University University
                  (2012-2016)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Robert Bosch GmbH (2023){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    FAST API with Angular.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold">
                    {" "}
                    Associate Software Engineer at Frequence software LLC. (2020 - 2022){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Qliktag Software Inc. (2018 - 2020){" "}
                  </h4>
              
                </div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
       
    </section>
  );
};