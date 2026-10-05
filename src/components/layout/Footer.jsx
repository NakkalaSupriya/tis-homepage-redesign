import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-top">
        <div>
          <p className="eyebrow">Start the conversation</p>
          <h2>Give your child a<br /><em>world of possibilities.</em></h2>
        </div>
        <a className="footer-cta" href="mailto:admissions@tis.edu.in">
          admissions@tis.edu.in <ArrowUpRight />
        </a>
      </div>
      <div className="container footer-bottom">
        <div className="brand footer-brand">
          <span className="brand-mark">T</span>
          <span><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
        </div>
        <p>© {new Date().getFullYear()} Tulas International School. Learn. Lead. Transform.</p>
        <div className="socials">
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
        </div>
      </div>
    </footer>
  );
}