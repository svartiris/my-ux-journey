import { CaseStudy } from "./caseStudyData";
import CaseStudyExpanded from "./CaseStudyExpanded";

interface Props {
  study: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
}

const CaseStudyCard = ({ study, isExpanded, onToggle }: Props) => {
  const imageMaxClass =
    study.imageAspect === "portrait"
      ? "max-w-[260px]"
      : study.imageAspect === "square"
      ? "max-w-[360px]"
      : "max-w-[560px]";

  return (
    <article className="relative">
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
          {study.title}
        </h3>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs text-accent/80 italic"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="font-body text-muted-foreground leading-relaxed italic mb-4">
          {study.subtitle}
        </p>

        <div className={`overflow-hidden rounded-xl mb-4 ${imageMaxClass}`}>
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="mb-4">
          <h4 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-1">
            Scope of Ownership
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {study.scopeOfOwnership}
          </p>
        </div>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 mb-5">
          <p className="font-body text-sm">
            <span className="font-medium text-primary">Impact: </span>
            <span className="text-foreground">{study.impact}</span>
          </p>
        </div>

        <button
          onClick={onToggle}
          className="font-body text-sm font-medium text-primary transition-colors no-print"
        >
          {isExpanded ? "Show less ↑" : "Read full case study →"}
        </button>
      </div>

      {isExpanded && <CaseStudyExpanded study={study} />}

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
