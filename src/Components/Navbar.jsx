import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-4 z-50">
      <div className="flex justify-between items-center">

        <h1 className="font-bold text-xl">MyPortfolio</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><a onClick={() => scrollToSection("home")} className="cursor-pointer">Home</a></li>
          <li><a onClick={() => scrollToSection("about")} className="cursor-pointer">About</a></li>
          <li><a onClick={() => scrollToSection("skill")} className="cursor-pointer">Skill</a></li>
          <li><a onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</a></li>
          <li><a onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</a></li>
        </ul>

        {/* Mobile icon */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 items-center">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skill")}>Skill</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
