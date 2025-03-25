import Header from "./Header";
import profilePic from "../assets/AIheadshot.jpeg";
import githubIcon from "../assets/github-142-svgrepo-com.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import bigmailIcon from "../assets/mail-svgrepo-com.svg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white py-16 px-8"
    >
      <div className="flex flex-col items-center">
        <img
          src={profilePic}
          alt="Nick W"
          className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
        />
        <div className="flex gap-4">
          <a
            href="https://github.com/nwilson7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-full h-full transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholaswilson7/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-full h-full transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="#contact" className="w-8 h-8">
            <img
              src={bigmailIcon}
              alt="ContactMe"
              className="w-full h-full transition-transform duration-200 hover:scale-110"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Header />
        <div className="max-w-md rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
          <p className="text-base leading-relaxed text-gray-700">
            Hello! I'm Nick, a passionate software engineer with a focus on
            building efficient, scalable, and reliable applications. As a
            full-stack developer with a strong preference for backend
            development, I enjoy solving complex problems and optimizing systems
            for performance. I'm always eager to learn new technologies and
            refine my skills to build better software. When I’m not coding,
            you’ll find me reading or gaming.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
