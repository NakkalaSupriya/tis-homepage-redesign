import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { stats } from "../../data/siteData";

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about-layout">
        <Reveal>
          <SectionHeading
            eyebrow="01 — The TIS difference"
            title={<>Education that<br /><em>shapes lives.</em></>}
            text="At Tulas International School, learning extends beyond the classroom. We create an environment where academic excellence meets empathy, creativity and a strong sense of purpose."
          />
        </Reveal>
        <Reveal delay={.12}>
          <div className="about-panel">
            <div className="quote-mark">“</div>
            <p>We don't just prepare students for the future. We help them discover the confidence to shape it.</p>
            <span>— TIS Learning Philosophy</span>
          </div>
        </Reveal>
      </div>
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * .07}>
            <div className="stat"><strong>{stat.value}</strong><span>{stat.label}</span></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}