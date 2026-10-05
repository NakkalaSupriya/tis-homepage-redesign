import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { programs } from "../../data/siteData";

export default function ProgramsSection() {
  return (
    <section className="section programs" id="academics">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="02 — Academics" title={<>A pathway for<br /><em>every stage.</em></>} text="Thoughtfully designed programmes meet learners where they are and challenge them to go further." />
        </Reveal>
        <div className="program-list">
          {programs.map((program, index) => (
            <Reveal key={program.number} delay={index * .08}>
              <article className="program-card">
                <span className="program-number">{program.number}</span>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
                <a href="#admissions" aria-label={`Explore ${program.title}`}><span>{program.tag}</span><ArrowUpRight /></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}