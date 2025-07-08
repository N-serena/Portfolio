import React, { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import ContactSection from "./component/ContactSection";
import Certifications from "./component/Certifications";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import About from "./component/About";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

const darkTheme = {
  bg: "bg-[#181820]",
  card: "bg-[#22223b]",
  text: "text-white",
  accent: "text-[#a99ff8]",
  secondary: "text-[#bebee3]",
  shadow: "shadow-lg"
};

const lightTheme = {
  bg: "bg-[#f5f7fa]",
  card: "bg-white",
  text: "text-[#22223b]",
  accent: "text-[#7864fa]",
  secondary: "text-[#7e7f9a]",
  shadow: "shadow-lg"
};

function App() {
  const [dark, setDark] = useState(false);
  const theme = dark ? darkTheme : lightTheme;

  return (
    <div className={`${theme.bg} min-h-screen transition-all duration-300`}>
      
      <Navbar theme={theme} dark={dark} setDark={setDark} />
      <About theme={theme} />
      <Experience theme={theme} />    
      <Projects theme={theme} />
      <Skills theme={theme} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />
      <Analytics />

      <div className="h-8"></div>

    </div>
  );
}

export default App;
