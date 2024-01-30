import styles from'./App.module.css';

import {Experience} from "./components/Experience";
import {About} from "./components/About";
import {Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {

  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
  </div>;
  
}

export default App
