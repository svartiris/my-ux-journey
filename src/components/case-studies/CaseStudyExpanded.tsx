import { CaseStudy } from "./caseStudyData";

interface Props {
  study: CaseStudy;
}

const CaseStudyExpanded = ({ study }: Props) => {
  return (
    <div className="mt-10 space-y-8 p-8 rounded-xl bg-muted/30 border border-border animate-fade-in-up">
      {/* 1. Problem & Motivation */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-3">1. Problem & Motivation</h4>
        <div className="space-y-2 font-body text-sm text-muted-foreground leading-relaxed">
          <p><span className="font-medium text-foreground">Business goal:</span> {study.problem.businessGoal}</p>
          <p><span className="font-medium text-foreground">User pain:</span> {study.problem.userPain}</p>
          <p><span className="font-medium text-foreground">Trigger:</span> {study.problem.trigger}</p>
        </div>
      </div>

      {/* 2. My Role */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-3">2. My Role</h4>
        <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Scope of Ownership</h5>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {study.scopeOfOwnership}
        </p>
        <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Collaboration</h5>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {study.collaboration.map((c) => (
            <span key={c} className="font-body text-sm text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Research Process */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-3">3. Research Process</h4>
        <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Research Goals</h5>
        <ul className="list-disc list-inside font-body text-sm text-muted-foreground leading-relaxed mb-4 space-y-1">
          {study.researchGoals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
        <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Method</h5>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {study.researchMethod}
        </p>
      </div>

      {/* Detail images (flows, tables, etc.) */}
      {study.detailImages && study.detailImages.length > 0 && (
        <div className="space-y-8">
          {study.detailImages.map((group) => (
            <div key={group.label}>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-3">
                {group.label}
              </h5>
              <div className={`grid gap-4 ${
                group.images.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : group.images.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              }`}>
                {group.images.map((img) => (
                  <div key={img.alt} className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Outcome */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-3">4. Outcome</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Key Insight</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.keyInsight}</p>
          </div>
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Project Decision</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.projectDecision}</p>
          </div>
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Numbers</h5>
            <p className="font-body text-sm text-foreground leading-relaxed font-medium">{study.numbers}</p>
          </div>
        </div>
      </div>

      {/* 5. Afterthought */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-3">5. Afterthought</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">What Worked</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.whatWorked}</p>
          </div>
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">What Could Be Done Differently</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.whatCouldBeDifferently}</p>
          </div>
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Key Learnings</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.keyLearnings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyExpanded;
