import { BrowserRouter as Router } from "react-router-dom";


import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./pages/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  return (
    <Router>
       <div>
        <ScrollToTopButton />
        <Header />
        <Profile />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <Footer />

      </div>
    </Router>
  )
}

export default App;
