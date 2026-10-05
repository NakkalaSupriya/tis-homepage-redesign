import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../data/siteData";
import Button from "../ui/Button";

export default function Navbar({ dark, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-mark">T</span>
          <span><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
          <Button href="#contact" variant="small">Enquire Now</Button>
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onThemeToggle} aria-label="Toggle theme">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}