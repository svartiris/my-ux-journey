import { useState } from "react";
import { CaseStudy } from "./caseStudyData";
import CaseStudyExpanded from "./CaseStudyExpanded";
import ImageLightbox from "./ImageLightbox";

interface Props {
  study: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const CaseStudyCard = ({ study, isExpanded, onToggle, index }: Props) => {
  const isReversed = index % 2 === 1;
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <article className="relative">
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
          {study.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="font-display text-lg md:text-xl text-foreground leading-relaxed underline underline-offset-4 decoration-accent/40 mb-8">
          {study.subtitle}
        </p>

        {/* Case study 1 (no image): scope (no box) + impact side by side */}
        {study.id === 1 ? (
          <div className="grid md:grid-cols-[5fr_2fr] gap-6 mb-6 items-start">
            <div className="flex flex-col">
              <h4 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">
                Scope of Ownership
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {study.scopeOfOwnership}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="font-body text-sm flex-1">
                <span className="font-medium text-primary">Impact: </span>
                <span className="text-foreground">{study.impact}</span>
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Image + Scope side by side */}
            <div className={`flex flex-col md:flex-row gap-8 mb-6 ${isReversed ? "md:flex-row-reverse" : ""}`}>
              <div className={`${study.imageAspect === "portrait" ? "md:w-3/5" : "md:w-1/2"} flex flex-col justify-center ${isReversed ? "md:text-left" : "md:text-right"}`}>
                <h4 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">
                  Scope of Ownership
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {study.scopeOfOwnership}
                </p>
              </div>
              <button
                className={`${study.imageAspect === "portrait" ? "md:w-2/5" : "md:w-1/2"} overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition-opacity flex items-center`}
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto object-contain"
                />
              </button>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 mb-5">
              <p className="font-body text-sm">
                <span className="font-medium text-primary">Impact: </span>
                <span className="text-foreground">{study.impact}</span>
              </p>
            </div>
          </>
        )}

        <button
          onClick={onToggle}
          className="font-body text-sm font-medium text-primary transition-colors no-print"
        >
          {isExpanded ? "Show less ↑" : "Read full case study →"}
        </button>
      </div>

      {isExpanded && <CaseStudyExpanded study={study} />}

      <ImageLightbox
        src={study.image}
        alt={study.title}
        open={showLightbox}
        onOpenChange={setShowLightbox}
      />

      {/* Print-only */}
      <div className="hidden print:block mt-6 space-y-4 text-sm">
        <div>
          <h4 className="font-display text-base text-foreground mb-2">Scope of Ownership</h4>
          <p className="font-body text-muted-foreground leading-relaxed">{study.scopeOfOwnership}</p>
        </div>
        <div>
          <h4 className="font-display text-base text-foreground mb-2">Problem & Motivation</h4>
          <p className="font-body text-muted-foreground leading-relaxed">{study.problem.businessGoal}</p>
        </div>
        <div>
          <h4 className="font-display text-base text-foreground mb-2">Process</h4>
          <p className="font-body text-muted-foreground leading-relaxed">{study.researchMethod}</p>
        </div>
        <div>
          <h4 className="font-display text-base text-foreground mb-2">Reflections</h4>
          <p className="font-body text-muted-foreground leading-relaxed">{study.keyLearnings}</p>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;
