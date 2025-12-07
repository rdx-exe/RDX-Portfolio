import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import About from "../components/About";
import Quote1 from "../components/Quote1";
import Quote2 from "../components/Quote2";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Header />
      <Hero />
      <Quote1 />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Quote2 />
      <Contact />
      <BackToTop />
    </main>
  );
}