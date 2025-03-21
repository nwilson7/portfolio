import { Link } from "react-router";

function Nav() {
  return (
    <div className="mx-auto flex flex-col sticky max-w-fit items-center rounded-xl bg-white p-6 outline outline-black inset-y-0 right-0">
      <div className="flex flex-col">
        <Link to="/">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;
