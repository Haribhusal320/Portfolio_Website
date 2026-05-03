import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Profile from "./components/sections/Profile";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/widgets/ScrollToTopButton";
import ChatBot from "./components/widgets/ChatBot";

function App() {
  return (
    <Router>
      <div className="relative">
        <ScrollToTopButton />
        <Header />
        <Profile />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <ChatBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
