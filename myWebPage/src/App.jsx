import NavBar from "./components/navBar/NavBar.jsx";
import styles from "./App.module.scss";
import Home from "./sections/home/Home.jsx";

function App() {

  return (
    <>
        <NavBar />
        <div className={styles.content}>
            <Home />
            <Home />

        </div>
    </>
  )
}

export default App
