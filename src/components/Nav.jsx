import navIcon from "../assets/forwardarrow.svg";
import contactIcon from "../assets/mailIcon.svg";

function Nav() {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center bg-white p-4 rounded-xl shadow-md outline outline-black/10 space-y-4">
      <a
        href="#about"
        className="flex flex-col items-center gap-2 hover:text-blue-500"
      >
        <img src={navIcon} alt="About" className="w-4 h-4" />
        About
      </a>
      <a
        href="#skills"
        className="flex flex-col items-center gap-2 hover:text-blue-500"
      >
        <img src={navIcon} alt="Skills" className="w-4 h-4" />
        Skills
      </a>
      <a
        href="#projects"
        className="flex flex-col items-center gap-2 hover:text-blue-500"
      >
        <img src={navIcon} alt="Projects" className="w-4 h-4" />
        Projects
      </a>
      <a
        href="#contact"
        className="flex flex-col items-center gap-2 hover:text-blue-500"
      >
        <img src={contactIcon} alt="Contact" className="w-4 h-4" />
        Contact Me
      </a>
    </div>
  );
}

export default Nav;
