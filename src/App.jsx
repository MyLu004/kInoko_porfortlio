import Navbar from "./components/navbar.jsx";
import Hero from "./pages/hero";
import Projects from "./pages/project";
import Skill from "./pages/skill";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Contact from "./pages/contact";
// import Footer from "./components/footer";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative ">
            <Navbar />
            <Hero />
            <Projects />
            <Skill />
            <Experience />
            <Education />
            <Contact />
        </main>
    );
};

export default App;