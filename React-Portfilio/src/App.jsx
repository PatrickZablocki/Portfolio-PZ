import styles from'./App.module.css';

import {Contact} from "./components/Contact";
import {Experience} from "./components/Experience";
import {About} from "./components/About";
import {Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from './components/Projects';

function App() {

  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>;
  
}

export default App
