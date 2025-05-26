import NavBar from "./components/navBar/NavBar.jsx";
import styles from "./App.module.scss";
import Home from "./sections/home/Home.jsx";
import About from "./sections/about/About.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Connect from "./sections/connect/Connect.jsx";

function App() {

  return (
    <>
        <NavBar />
        <div className={styles.content}>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Connect />
        </div>
    </>
  )
}

export default App
