import dns from "../assets/dns.jpg"; // Assuming you have a DNS image in assets folder
import spotify2 from "../assets/spotify2.jpg"; // Assuming you have a Spotify clone image in assets folder
import supply_chain from "../assets/supply_chain.jpg"; // Assuming you have a Supply Chain image in assets folder
import mobile from "../assets/mobile.jpg"; // Assuming you have a mobile app image in assets folder
import dsml from "../assets/dsml.jpg"; // Assuming you have a Data Science & ML portfolio image in assets folder
const projects = [
  {
    title: "Data Science & Machine Learning Portfolio",
    description: "A comprehensive portfolio showcasing various data science and machine learning projects. Certificate from MIT Schwarman College of Computing",
    stack: ["Python", "Pandas", "Scikit-Learn"],
    link: "https://www.mygreatlearning.com/eportfolio/serena-noboudem-manda-tchinda",
    image: dsml
  },
  {
    title: "D2L Mobile App",
    description: "Android app replicating D2L course modules and labs, with Firebase-based storage and authentication.",
    stack: ["Kotlin", "Firebase"],
    link: "https://github.com/N-serena/D2LMobile",
    image: mobile.jpg
  },
  {
    title: "FinHub",
    description: "A full-featured ecommerce platform with payment integration.",
    stack: ["Spring Boot", "React", "MySQL"],
    link: "#"
  },
  {
    title: "DNS Server",
    description: "Engineered a multithreaded DNS server in Python, capable of handling 500+ queries per second in compliance with RFC 1035.",
    stack: ["Python"],
    link: "https://github.com/N-serena/DNS-Server---Python",
    image: dns
  },
  {
    title: "Spotify Clone",
    description: "A web application replicating Spotify's core features using React Native and Node.js.",
    stack: ["React Native", "Firebase", "Node.js", "Spotify API"],
    link: "https://github.com/SP27-Blue-Spotify/SP27-Blue-Spotify-Rep",
    image: spotify2
  },
  {
    title: "Supply Chain Production Management",
    description: "A desktop app for managing supply chain production, including inventory tracking and order management.",
    stack: ["Java", "MySQL", "JavaFX"],
    link: "https://github.com/N-serena/supply-chain",
    image: supply_chain
  }
];

const Projects = ({ theme }) => (
  <section id="projects" className="mx-4 md:mx-16 mb-12">
    <h3 className={`text-2xl font-bold mb-8 ${theme.accent}`}>Projects</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((proj, idx) => (
        <div key={idx} className={`${theme.card} ${theme.shadow} p-6 rounded-2xl`}>
          <div className="mb-4 h-28 flex items-center justify-center bg-gradient-to-r from-[#7864fa33] to-[#4cc9f033] rounded-xl">
            {/* Placeholder for project screenshot/graphic */}
            {proj.image ? (
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-full max-h-28 rounded-xl"
                onError={e => { e.target.src = "https://placehold.co/160x100?text=No+Image"; }}
              />
            ) : (
              <span className="text-3xl">
                {idx === 0 ? "📱" : idx === 1 ? "📈" : "🛡️"}
              </span>
            )}
          </div>
          <h4 className={`text-xl font-semibold mb-2 ${theme.text}`}>{proj.title}</h4>
          <p className={`mb-4 ${theme.secondary}`}>{proj.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {proj.stack.map((tech, i) => (
              <span key={i} className="bg-[#f5f7fa] text-[#7864fa] px-2 py-1 rounded-full text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" className={`${theme.accent} underline font-medium`}>I want to see</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;