import { useState } from "react";
import caseStudyCheckoutFlow from "@/assets/case-study-checkout-flow.png";
import caseStudyShorterCheckout from "@/assets/case-study-shorter-checkout.png";
import caseStudyReport from "@/assets/case-study-report.jpg";
import caseStudyConversion from "@/assets/case-study-conversion.jpg";

const caseStudies = [
  {
    id: 1,
    tag: "Conversion Optimization · Multivariate Testing · G2A.com",
    title: "Order Fee Optimization",
    subtitle: "Changing the financial model through multivariate testing",
    problem: "Users felt confused and distrustful during checkout due to unclear pricing and an unexpected upsell, making them feel misled. The business wanted to maintain revenue while removing the upsell and improving pricing transparency.",
    role: "Owned the core of the project and led cross-department teams; decided on methodology and the process, defined research hypotheses and key KPIs, conducted analysis, prepared general and financial reports, delivered actionable recommendations.",
    collaboration: ["General Manager", "Legal", "Marketing", "PM", "Business Intelligence", "IT"],
    process: "Ran 3 rounds of multivariate tests (~2 months each) on a global desktop segment, testing order fee amounts per price bracket, visual placement on checkout, price inclusion/exclusion, and Proprietary Payment Method profitability.",
    methods: ["Multivariate Testing", "A/B Testing", "Google Tag Manager", "Statistical Analysis", "Financial Reporting"],
    insight: "G2A can maintain key KPIs by increasing order fees when paired with transparent pricing and removal of the upsell product.",
    outcome: "Increased conversion rate by 1 percentage point, directly translating into significantly higher revenue. Removed the upsell product and established new fee structure.",
    learnings: "Built an A/B test system from scratch connected to real-time database tracking. Stepped into a PM-like leadership role, highlighting the importance of balancing cross-functional leadership with a focused UX Researcher role. Needed to understand technical and legal complexities while leading a financially high-risk project.",
    image: caseStudyCheckoutFlow,
  },
  {
    id: 2,
    tag: "Checkout UX · A/B Testing · G2A.com",
    title: "Shorter Checkout",
    subtitle: "Simplifying a redundant checkout step to reduce drop-off",
    problem: "Users reached an additional checkout step that felt redundant and confusing, increasing the risk of abandoning the purchase at the very end of the flow. Analytics confirmed that every extra step near the end of the journey increased exit probability, especially when the same information was repeated across two checkout steps.",
    role: "Sole UX Researcher — defined the research goal and KPIs, set up and monitored the A/B test, analyzed behavior and conversion data, and delivered clear, actionable recommendations.",
    collaboration: ["IT", "Business Intelligence"],
    process: "Ran an A/B test measuring the impact of removing the redundant checkout step on cart conversion rate and overall purchase completion.",
    methods: ["A/B Testing", "Behavioral Analytics", "Conversion Analysis"],
    insight: "The additional checkout step, even though visually consistent, increased drop-off and did not meaningfully retain or win back clients at the end of the purchase journey.",
    outcome: "Increased cart conversion rate by 5 percentage points, directly improving purchase completion and revenue. Consolidated the flow into a single, streamlined checkout.",
    learnings: "Created a habit of very detailed preparation. Conducting research is just the tip of the iceberg, where the base is in preparation regarding dev, being on the same page and expectations with business.",
    image: caseStudyShorterCheckout,
  },
  {
    id: 3,
    tag: "Research Leadership · Design Thinking · G2A.com",
    title: "Leading Conversion Optimisation Team",
    subtitle: "Building a research-driven experimentation practice from the ground up",
    problem: "Teams lacked a shared process to turn ideas into testable hypotheses, leading to scattered experiments, duplicated efforts, and missed opportunities to systematically improve key user journeys.",
    role: "As UX Lead Researcher, owned the end-to-end conversion-optimisation practice — defined the process for idea generation, hypothesis framing, and prioritisation. Introduced Design Thinking workshops, managed the research backlog, and synthesised results into reusable insights.",
    collaboration: ["UX Researchers", "UX Designers", "Product Managers", "Business", "Marketing", "Senior Leadership"],
    process: "Applied a Design Thinking-inspired framework: ideation workshops, hypothesis-mapping sessions, KPI alignment, and single/multi-round A/B and multivariate tests co-designed by UX Research.",
    methods: ["Design Thinking", "Workshop Facilitation", "A/B Testing", "Multivariate Testing", "Hypothesis Mapping", "Markov Chains"],
    insight: "A structured, research-driven conversion-optimisation practice significantly increased the volume and quality of experiments, leading to measurable improvements in key user journeys.",
    outcome: "Facilitated 92 research projects in 2 years. Highlights: AI Recommendations → 2% increase in baskets; Markov Chains model for mapping user actions; Upsell removal → 0.5pp conversion increase; multiple validated status-quo decisions that prevented unnecessary changes.",
    learnings: "A centralised, research-driven conversion practice with a cross-functional team results in more business-oriented hypotheses. Some projects had blurred ownership and were processed ineffectively — focusing on prioritisation over volume is key. Iterative refinement of the process itself is as important as the individual tests.",
    image: caseStudyConversion,
  },
  {
    id: 4,
    tag: "Strategic Research · Survey Design · G2A.com",
    title: "Yearly User Report",
    subtitle: "Turning scattered customer data into a strategic foundation",
    problem: "The company lacked a consolidated, regularly updated understanding of its users' sociodemographics, gaming habits, and purchase behaviours, leading to decisions based on partial or outdated data.",
    role: "Sole Creator and Lead — defined research goals, designed the survey structure, planned rollout and sampling, conducted in-depth data analysis with correlation studies, compared results with internal analytics and previous years, and presented actionable insights to stakeholders.",
    collaboration: ["Management", "Business", "Marketing", "Data Analysts"],
    process: "Annual global survey collecting declarative data not available in analytics tools, combined with quantitative analysis of internal behavioural data (purchase frequency, category preferences, device use). Trend-based comparisons with prior years to surface shifts.",
    methods: ["Survey Design", "Quantitative Analysis", "Data Visualization", "Trend Analysis", "Stakeholder Presentations"],
    insight: "The report revealed clear shifts in user profiles, gaming preferences, and purchase behaviour over time, exposing previously unnoticed segments and contradictions between assumed and actual user behaviour.",
    outcome: "Adopted by management, marketing, and product as a reference for campaign targeting, product positioning, and strategic planning. Identified 3–4 key user segments with clear profiles. Highlighted statistically significant behavioural changes year-over-year.",
    learnings: "Combining fast, scalable surveys with deep internal analytics generates far more powerful insights than either method alone. A yearly user report becomes a living document that shapes organisational memory. Starting earlier with clearer integration into regular planning cycles and a more workshop-focused approach could result in clearer business use.",
    image: caseStudyReport,
  },
];

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
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id;
            return (
              <article
                key={study.id}
                className="relative"
              >
                {/* Header row */}
                <div>
                  <div className="overflow-hidden rounded-xl mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-accent font-medium">
                    {study.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mt-3 mb-1">
                    {study.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground italic mb-4">
                    {study.subtitle}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-5">
                    {study.problem}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.methods.map((method) => (
                      <span
                        key={method}
                        className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 mb-5">
                    <p className="font-body text-sm">
                      <span className="font-medium text-primary">Impact: </span>
                      <span className="text-foreground">{study.outcome}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : study.id)}
                    className="font-body text-sm font-medium text-primary transition-colors no-print"
                  >
                    {isExpanded ? "Show less ↑" : "Read full case study →"}
                  </button>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div className="mt-10 grid md:grid-cols-3 gap-8 p-8 rounded-xl bg-muted/30 border border-border animate-fade-in-up">
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-3">My Role</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                        {study.role}
                      </p>
                      <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Collaboration</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {study.collaboration.map((c) => (
                          <span key={c} className="font-body text-xs px-2 py-1 rounded bg-background border border-border text-muted-foreground">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-3">Research Process</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                        {study.process}
                      </p>
                      <h5 className="font-body text-xs tracking-[0.15em] uppercase text-accent font-medium mb-2">Key Insight</h5>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {study.insight}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-3">Reflections</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {study.learnings}
                      </p>
                    </div>
                  </div>
                )}

                {/* Print-only expanded detail */}
                <div className="hidden print:block mt-6 grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-display text-base text-foreground mb-2">My Role</h4>
                    <p className="font-body text-muted-foreground leading-relaxed">{study.role}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-base text-foreground mb-2">Process</h4>
                    <p className="font-body text-muted-foreground leading-relaxed">{study.process}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-base text-foreground mb-2">Reflections</h4>
                    <p className="font-body text-muted-foreground leading-relaxed">{study.learnings}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
