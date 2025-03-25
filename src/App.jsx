import Nav from "./components/Nav";
import Contact from "./components/ContactPage";
import About from "./components/About";
import Skills from "./components/SkillsPage";

function App() {
  return (
    <div className="relative">
      <Nav />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        {/* Replace with your Projects Component */}
        <h1 className="text-3xl">Projects Section</h1>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
