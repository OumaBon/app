
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customRed text-white py-6">
      {/* Row 1: Logo and Socials */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mb-4">
        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-10" />
        </div>

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-300" />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4 border-white max-w-[1200px] mx-auto" />

      {/* Row 2: Navigation and Copyright */}
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <nav className="flex justify-center md:justify-start space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About Me</a>
          <a href="/project" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>

        {/* Copyright and Rights Reserved */}
        <div className="text-center md:text-right">
          <p className="mt-4 md:mt-0 text-sm">
            &copy; {new Date().getFullYear()} Boniface Ouma.
          </p>
        </div>
        <p className="text-sm md:mt-2 text-center">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
