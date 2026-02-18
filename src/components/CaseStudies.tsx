import caseStudyMobile from "@/assets/case-study-mobile.jpg";
import caseStudyReport from "@/assets/case-study-report.jpg";
import caseStudyConversion from "@/assets/case-study-conversion.jpg";

const caseStudies = [
  {
    id: 1,
    tag: "Mobile UX · G2A.com",
    title: "Redesigning the G2A Mobile App Experience",
    description:
      "Developed an adaptive UX strategy aligned with evolving business KPIs. Implemented app-specific research tools and addressed user pain points through usability testing, surveys, and behavioral analytics.",
    methods: ["Usability Testing", "Surveys", "Firebase Analytics", "Heuristic Evaluation"],
    outcome: "32% increase in task completion rate and 18% reduction in support tickets.",
    image: caseStudyMobile,
  },
  {
    id: 2,
    tag: "Data & Insights · G2A.com",
    title: "Building a Cross-Department Yearly User Report",
    description:
      "Led a company-wide initiative combining survey data and internal analytics to create a comprehensive user profile covering socio-demographics, shopping patterns, and gaming behavior.",
    methods: ["Survey Design", "Data Analysis", "Data Visualization", "Stakeholder Interviews"],
    outcome: "Adopted by 5 departments as the primary reference for strategic planning.",
    image: caseStudyReport,
  },
  {
    id: 3,
    tag: "Conversion Optimization · G2A.com",
    title: "Multivariate Testing for Order Fee Optimization",
    description:
      "Led multivariate testing on order fee levels, placement, and presentation. Managed a cross-functional Conversion Optimization Team comprising managers from product, marketing, and engineering.",
    methods: ["A/B Testing", "Multivariate Testing", "Google Tag Manager", "Statistical Analysis"],
    outcome: "Drove significant financial growth through data-driven fee structure changes.",
    image: caseStudyConversion,
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16">
          Case Studies
        </h2>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`overflow-hidden rounded-xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-accent font-medium">
                  {study.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mt-3 mb-4">
                  {study.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  {study.description}
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
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-body text-sm">
                    <span className="font-medium text-primary">Impact: </span>
                    <span className="text-foreground">{study.outcome}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
