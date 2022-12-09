import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration:0 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section className="stickey" id="#home">
        <Header />
      </section>
      <section>
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
       </main>
       <section id="contact">
          <Contact />
        </section>
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}
