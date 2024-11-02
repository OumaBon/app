// Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex justify-between my-4 py-4 items-center px-4">
          <h1 className="text-2xl text-customRed font-bold">BO</h1>
          <ul className="flex justify-between gap-6">
            <li className="text-customRed font-medium"><Link to="/">Home</Link></li>
            <li className="text-customRed font-medium"><Link to="/about">About Me</Link></li>
            <li className="text-customRed font-medium"><Link to="/project">Projects</Link></li>
            <li className="text-customRed font-medium"><Link to="/contact">Contacts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
