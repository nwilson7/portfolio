import profileSS from "../assets/portfolioSS.png";
import pendingSS from "../assets/pendingSS.jpg";

function Projects() {
  const projectData = [
    {
      name: "Portfolio Website",
      description:
        "You're already here! A personal portfolio to showcase my projects and skills.",
      image: profileSS,
      github: "https://github.com/nwilson7/portfolio",
      liveDemo: "https://yourportfolio.com",
    },
    {
      name: "Proj2 currently in maintenance",
      description: "stay tuned",
      image: pendingSS,
      github: "https://github.com/nwilson7/",
      liveDemo: "https://project-two.com",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 rounded-xl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-medium mt-4">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
