import { useState } from "react";
import { CaseStudy } from "./caseStudyData";
import ImageLightbox from "./ImageLightbox";

interface Props {
  study: CaseStudy;
}

const CaseStudyExpanded = ({ study }: Props) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  // Separate "Screens" groups from other detail images
  const orderFeeScreenLabels = ["Old Checkout Layout Flow", "New Checkout Layout Flow", "Seller Perspective Old Layout", "Seller Perspective New Layout"];
  const screensGroup = study.detailImages?.filter(g =>
    g.label === "Screens" || orderFeeScreenLabels.includes(g.label)
  );
  const otherDetailImages = study.detailImages?.filter(g =>
    g.label !== "Screens" && !orderFeeScreenLabels.includes(g.label)
  );

  const hasScreens = screensGroup && screensGroup.length > 0;
  const hasOtherImages = otherDetailImages && otherDetailImages.length > 0;

  return (
    <div className="mt-10 p-8 rounded-xl bg-muted/30 border border-border animate-fade-in-up">
      {/* Row 1: Problem & Motivation (left) + My Role (right) */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-5 rounded-lg bg-background border border-border">
          <h4 className="font-display text-lg text-primary mb-4">Problem & Motivation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Business Goal</h5>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.problem.businessGoal}</p>
            </div>
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">User Pain</h5>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.problem.userPain}</p>
            </div>
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Trigger</h5>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.problem.trigger}</p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-background border border-border">
          <h4 className="font-display text-lg text-primary mb-4">My Role</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Scope of Ownership</h5>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.scopeOfOwnership}</p>
            </div>
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Collaboration</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {study.collaboration.map((c, i) => (
                  <span key={c} className="font-body text-sm text-muted-foreground">
                    {c}{i < study.collaboration.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Research Process (full width) + Screens inside */}
      <div className="p-5 rounded-lg bg-background border border-border mb-6">
        <h4 className="font-display text-lg text-primary mb-4">Research Process</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Research Goals</h5>
            <ul className="list-disc list-inside font-body text-sm text-muted-foreground leading-relaxed space-y-1">
              {study.researchGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Method</h5>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{study.researchMethod}</p>
          </div>

          {/* Screens inside Research Process */}
          {(study.image || hasScreens || hasOtherImages) && (
            <div>
              <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-3">Screens</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.image && (
                  <div className="space-y-1">
                    <button
                      onClick={() => setLightboxImage({ src: study.image, alt: study.title })}
                      className="overflow-hidden rounded-lg border border-border cursor-pointer hover:border-primary/40 transition-colors w-full"
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-auto object-contain bg-background"
                      />
                    </button>
                    <p className="font-body text-[10px] text-muted-foreground leading-tight">{study.title}</p>
                  </div>
                )}
                {screensGroup?.map((group) =>
                  group.images.map((img) => (
                    <div key={img.alt} className="space-y-1">
                      <button
                        onClick={() => setLightboxImage(img)}
                        className="overflow-hidden rounded-lg border border-border cursor-pointer hover:border-primary/40 transition-colors w-full"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto object-contain bg-background"
                        />
                      </button>
                      <p className="font-body text-[10px] text-muted-foreground leading-tight">{img.alt}</p>
                    </div>
                  ))
                )}
                {otherDetailImages?.map((group) =>
                  group.images.map((img) => (
                    <div key={img.alt} className="space-y-1">
                      <button
                        onClick={() => setLightboxImage(img)}
                        className="overflow-hidden rounded-lg border border-border cursor-pointer hover:border-primary/40 transition-colors w-full"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto object-contain bg-background"
                        />
                      </button>
                      <p className="font-body text-[10px] text-muted-foreground leading-tight">{img.alt}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Row 3: Outcome (left) + Afterthought (right) */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-background border border-border">
          <h4 className="font-display text-lg text-primary mb-4">Outcome</h4>
          <div className="space-y-4">
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

        <div className="p-5 rounded-lg bg-background border border-border">
          <h4 className="font-display text-lg text-primary mb-4">Afterthought</h4>
          <div className="space-y-4">
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

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          open={!!lightboxImage}
          onOpenChange={(open) => !open && setLightboxImage(null)}
        />
      )}
    </div>
  );
};

export default CaseStudyExpanded;
