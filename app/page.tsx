import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <Projects />
          </div>
        </section>

        <section id="skills" className="py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <Skills />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
