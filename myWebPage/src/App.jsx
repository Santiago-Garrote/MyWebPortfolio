import Presentation from "./components/presentation/Presentation.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import styles from "./App.module.scss";

function App() {

  return (
    <>
        <NavBar />
        <div className={styles.content}>
            <section id="Home">
                < Presentation />
            </section>
        </div>
    </>
  )
}

export default App
