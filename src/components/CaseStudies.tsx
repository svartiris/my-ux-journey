import { useState } from "react";
import { caseStudies } from "./case-studies/caseStudyData";
import CaseStudyCard from "./case-studies/CaseStudyCard";

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16">
          Case Studies
        </h2>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              isExpanded={expandedId === study.id}
              onToggle={() =>
                setExpandedId(expandedId === study.id ? null : study.id)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
