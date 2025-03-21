function Nav() {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center bg-white p-4 rounded-xl shadow-md outline outline-black/10 space-y-4">
      <a href="#about" className="hover:text-blue-500">
        About
      </a>
      <a href="#skills" className="hover:text-blue-500">
        Skills
      </a>
      <a href="#projects" className="hover:text-blue-500">
        Projects
      </a>
      <a href="#contact" className="hover:text-blue-500">
        Contact
      </a>
    </div>
  );
}

export default Nav;
