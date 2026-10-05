import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

export default function AdmissionsSection() {
  return (
    <section className="admissions" id="admissions">
      <div className="container admission-layout">
        <Reveal>
          <div>
            <p className="eyebrow">04 — Admissions</p>
            <h2>Your next chapter<br /><em>starts here.</em></h2>
            <p className="admission-copy">Discover a school where your child can be known, challenged and inspired. Our admissions team is ready to guide you through the next step.</p>
            <div className="check-list">
              <span><CheckCircle2 /> Personalised campus conversation</span>
              <span><CheckCircle2 /> Meet our learning community</span>
              <span><CheckCircle2 /> Explore the right pathway</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.15}>
          <div className="enquiry-card">
            <span className="card-label">READY WHEN YOU ARE</span>
            <h3>Book a conversation with TIS.</h3>
            <a href="mailto:admissions@tis.edu.in">Begin your enquiry <ArrowUpRight /></a>
            <small>Admissions · Tulas International School</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}