const Experience = ({ theme }) => (
  <section id="experience" className="mx-4 md:mx-16 mb-12">
    <h3 className={`text-3xl font-bold mb-6 ${theme.accent}`}>Experience</h3>
    <div className={`flex flex-col md:flex-row gap-8 ${theme.text}`}>
      {/* Example entry; repeat for each experience */}
      <div className={`${theme.card} ${theme.shadow} rounded-xl p-6`}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">Software Engineer, Intern</span>
          <span className="text-sm text-gray-400">Jun 2023 – Aug 2023</span>
        </div>
        <div className="mb-1 font-semibold text-[#4cc9f0]">Afriland First Bank</div>
        <ul className="list-disc ml-6 text-md mt-2 text-[#black]">
          <li>Engineered a secure authentication system using OAuth2, JWT, and 2FA for a banking app, ensuring 100% compliance 
              with banking regulations and reducing unauthorized access attempts by 40%.</li>
          <li>Collaborated with cross-functional teams to deploy AWS EC2 and S3 solution, integrating CI/CD pipelines with 
              Jenkins, resulting in a 30% increase in delivery speed.</li>
          <li>Supported the deployment and scaling of a containerized banking app using Kubernetes, ensuring 99.9% uptime and 
              reliable access for 10,000+ concurrent users.</li>
        </ul>
      </div>
      <div className={`${theme.card} ${theme.shadow} rounded-xl p-6`}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">Software Engineer, Intern</span>
          <span className="text-sm text-gray-400">Jun 2022 – Oct 2023</span>
        </div>
        <div className="mb-1 font-semibold text-[#4cc9f0]">PKF Research Center</div>
        <ul className="list-disc ml-6 text-md mt-2 text-[#black]">
          <li>Built and maintained a RESTFUL API for a learning management system using Spring Boot, handling 100+ 
              requests/seconds and improving data retrieval speeds by 25%.</li>
          <li>Designed and enhanced a web-based analytical dashboard using HTML, CSS, and JavaScript, implementing interactive 
              data visualization features that enabled data-driven decision-making and increased user satisfaction by 30%.</li>
          <li>Drove engineering best practices through active code reviews and contributions to coding standards, resulting in a 25% 
              reduction in bug reports and improved code maintainability</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;