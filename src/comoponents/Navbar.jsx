import { useState } from 'react'
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks =[
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
       <header className="w-full bg-[#F5F2ED]">
         <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 lg:px-16">
          <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="ARS Structures Ltd Logo"
            className="h-9 w-9 object-contain"
          />

          <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#171717]">
            ARS STRUCTURES LTD
          </span>
        </a>
            {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] text-[#333333] transition-colors hover:text-[#2166A5]"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#2166A5] px-5 py-3 text-[12px] font-medium text-white lg:flex"
        >
          Request a Quote
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-[#171717] lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
         {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-200 bg-[#F5F2ED] px-5 py-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#171717]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-fit items-center gap-2 bg-[#2166A5] px-5 py-3 text-sm text-white"
          >
            Request a Quote
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
       </header>
  )
    
             

}

export default Navbar