import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Proyects />
      <section id="contact" className="Contact-Footer-container">
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
