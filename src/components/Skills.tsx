const researchMethods = [
  "A/B & Multivariate Testing",
  "Moderated Usability Testing",
  "Unmoderated Usability Testing",
  "Expert Reviews & Heuristic Evaluation",
  "Surveys & Data Analysis",
  "Card Sorting & Tree Testing",
  "In-depth Interviews",
  "Data Visualization",
];

const tools = [
  "Google Analytics",
  "Firebase",
  "Hotjar",
  "Clarity",
  "Alchemer",
  "Survicate",
  "Figma",
  "Miro",
  "Jira",
  "BigQuery (SQL)",
  "Excel (Advanced)",
  "Google Tag Manager",
];

const languages = [
  { name: "Polish", level: "Native" },
  { name: "German", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Communicative" },
  { name: "Swedish", level: "Basic" },
  { name: "Russian", level: "Basic" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card">
      <div className="container">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Expertise
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16">
          Skills & Methods
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl text-foreground mb-6">Research Methods</h3>
            <ul className="space-y-3">
              {researchMethods.map((method) => (
                <li key={method} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-foreground mb-6">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-body text-xs px-3 py-2 rounded-lg bg-background border border-border text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-foreground mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center font-body text-sm">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground text-xs px-2.5 py-1 rounded-full bg-muted">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
