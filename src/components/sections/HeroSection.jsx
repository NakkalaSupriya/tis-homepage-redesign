import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="hero-kicker">Tulas International School · Dehradun</p>
          <h1>Where <span>curiosity</span><br />becomes <i>possibility.</i></h1>
          <p className="hero-copy">
            A vibrant, future-focused learning community where every learner is
            encouraged to think deeply, live fully and lead with purpose.
          </p>
          <div className="hero-actions">
            <Button href="#admissions">Explore TIS</Button>
            <a href="#life" className="play-link"><span className="play-icon"><Play size={15} fill="currentColor" /></span> Discover campus life</a>
          </div>
        </motion.div>
      </div>
      <div className="hero-note"><span>01</span><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
    </section>
  );
}