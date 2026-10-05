import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../../data/siteData";

export default function LifeSection() {
  return (
    <section className="section life" id="life">
      <div className="container life-head">
        <Reveal>
          <SectionHeading eyebrow="03 — Life at TIS" title={<>More than a school.<br /><em>A launchpad.</em></>} />
        </Reveal>
        <Reveal delay={.12}>
          <p className="life-intro">The most memorable learning happens when students are trusted to explore, create, collaborate and lead.</p>
        </Reveal>
      </div>
      <div className="container experience-grid">
        {experiences.map((item, index) => (
          <Reveal key={item.title} delay={index * .08}>
            <article className={`experience-card card-${index + 1}`}>
              <div className="experience-art"><span>0{index + 1}</span><div className="art-shape" /></div>
              <div className="experience-copy"><h3>{item.title}</h3><p>{item.text}</p><a href="#admissions">Learn more <ArrowUpRight size={16} /></a></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}