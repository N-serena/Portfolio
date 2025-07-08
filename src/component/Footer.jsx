import { FaArrowUp } from "react-icons/fa";

const Footer = ({ theme }) => (
   <footer className="mt-10 mb-4 text-center text-sm text-gray-400"> 
    <span>© 2025 Serena Noboudem | Made with ❤️</span>
    <div className="mt-2">
      <a href="#top" className="text-[#7864fa] hover:text-[#4cc9f0] transition">
        <FaArrowUp className="inline-block mr-1" />
        Back to top
      </a>
    </div>
  </footer>
);

export default Footer;