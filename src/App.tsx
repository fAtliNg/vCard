import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About, Contact, Experience, Footer, Projects, Skills } from './components/Sections'
import { useReveal } from './hooks'

export function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#about">
        К содержанию
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
