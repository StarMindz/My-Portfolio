// import HamburgerMenu from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { NavbarMain } from './components/Navbar2'
import Chatbox from './components/Chatbot/Chatbot'
import './App.css'
import Homepage from './pages/Homepage'
import Aboutme from './pages/Aboutme'
import Expertise from './pages/Expertise'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'

function App() {

  const scrollToSection = (page: string) => {
    console.log("i'm in scrollToSection")
    const section = document.getElementById(page);
    if (section) {
      const offset = -70;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-screen'>
      <BrowserRouter>
      {/* <HamburgerMenu scrollToSection={scrollToSection} /> */}
      <NavbarMain  scrollToSection={scrollToSection} />
      <Homepage scrollToSection={scrollToSection} />
      <Aboutme />
      <Expertise />
      <Skills />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Chatbox />
      </BrowserRouter>
    </div>
  )
}

export default App
