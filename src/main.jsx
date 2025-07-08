import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FaPython, FaJava, FaReact, FaAws, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiGit, SiLinux, SiJavascript } from "react-icons/si";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
