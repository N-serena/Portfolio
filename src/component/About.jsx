import profile from "../assets/profile.jpg";

const About = ({ theme }) => (
  <>
    {/* Hero Section */}
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between px-8 py-12 md:py-20 mx-4 md:mx-16 mb-12"
    style = {{minHeight: "60vh"}}
    >
      <div className="max-w-lg">
        <br/>
        <div className="mb-2 inline-block rounded-full border-2 border-[#7864fa] px-4 py-1 text-sm font-semibold text-[#7864fa] shadow hover:bg-[#4cc9f0] hover:text-white transition">
          Hello There!
        </div>
        <h1 className="mt-2 mb-4 text-4xl font-bold text-[#22223b] leading-tight">
          I&apos;m{' '}
          <span className="text-[#7864fa] underline underline-offset-4 decoration-[#7864fa]/50">
            Serena Noboudem,
          </span>
          <br />
          Software Engineer
          <br />
        </h1>
        <p className="mb-8 text-base text-[#7e7f9a] font-medium">
          Software engineer building scalable systems featuring AI/ML, and cloud.<br />
          Passionate about innovation, impact, inclusion and collaborating with diverse teams.
        </p><br/>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://www.linkedin.com/in/serena-noboudem" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#7864fa] text-white text-center flex items-center justify-center min-w-[100px] min-h-[48px] font-semibold hover:bg-[#4cc9f0] transition">
            Linkedin
          </a>
          <a href="https://github.com/N-serena" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#7864fa] text-white text-center flex items-center justify-center min-w-[100px] min-h-[48px] font-semibold hover:bg-[#4cc9f0] transition">
            Github
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-[#7864fa] text-[#7864fa] text-center flex justify-center font-semibold min-w-[100px] min-h-[48px] hover:bg-[#4cc9f0] hover:text-white transition">
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Profile Image with Purple Accent */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 z-10 relative">
        <div className="relative w-36 h-36 md:w-[25rem] md:h-[21rem] flex items-center justify-center">
          {/* Soft purple accent circle */}
          <div
            className="absolute rounded-full bg-[#7864fa22] w-36 h-36 md:w-[42rem] md:h-[21rem]"
            style={{ zIndex: 0 }}
          />
          <img
            src={profile}
            alt="Serena Noboudem"
            className="relative z-10 rounded-full w-36 h-36 md:w-[40rem] md:h-[25rem] object-cover border-8 border-[#a99ff8] shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className={` ${theme.shadow} ${theme.card} rounded-2xl mx-4 md:mx-16 mb-12 p-8 flex flex-col md:flex-row items-center text-center justify-center`}>
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className={`text-4xl font-bold mb-3 ${theme.accent}`}>About Me</h3>
        <p className={theme.text}>
          Software Engineer passionate about system designs. <br />
          Strong foundation in computer science, with a <b>BSc in Computer Science</b> <br />
          Enjoy solving problems, collaborating with diverse teams, and continuously learning to stay at the edge of technology.
        </p>
        <div className={`flex mt-4 space-x-7 items-center justify-center ${theme.text}`}>
          <span className="flex items-center text-md"><span className="mr-1">📍</span><i>Atlanta, GA</i></span>
          <span className="flex items-center text-md"><span className="mr-1">🗣️</span><i>English, French</i></span>
          <span className="flex items-center text-md"><span className="mr-1">💡</span><i>Music-Piano, Chess Player, Adventure lover, Reader</i></span>
        </div>
      </div>
    </section>

  </>
);

export default About;