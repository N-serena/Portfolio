const Certifications = ({ theme }) => (
  // Certifications Section
  <section id="certs" className="mx-4 md:mx-16 mb-12">
    <h3 className={`text-2xl font-bold mb-6 ${theme.accent}`}>Certifications</h3>
    <div className="flex flex-wrap gap-6">
      {/* Example badge; update src for your certs */}
      <div className={`${theme.card} ${theme.shadow} rounded-xl p-4 flex flex-col items-center`}>
        <img src="https://img.icons8.com/color/96/000000/mit.png" alt="MIT DS/ML" className="w-14 h-14 mb-2"/>
        <span className="font-semibold mt-1 text-[#bebee3]">MIT DS & ML Certificate</span>
      </div>
      <div className={`${theme.card} ${theme.shadow} rounded-xl p-4 flex flex-col items-center`}>
        <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" alt="AWS Cloud" className="w-14 h-14 mb-2"/>
        <span className="font-semibold mt-1 text-[#bebee3]">AWS Cloud Practitioner</span>
      </div>
      {/* Add more certs here */}
    </div>
  </section>
);

export default Certifications;