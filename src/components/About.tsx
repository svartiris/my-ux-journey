const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Research Projects" },
    { number: "6", label: "Languages" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              Research that
              <br />
              <span className="text-primary italic">moves the needle</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a multilingual UX Researcher based in Warsaw, Poland, with a background in Cognitive Sciences and Applied Linguistics. My work sits at the intersection of quantitative rigor and human empathy.
              </p>
              <p>
                At G2A.com, I've led cross-department initiatives—from building comprehensive yearly user reports to optimizing mobile app experiences. My most recent passion is data visualization, crafting insights that are as engaging as they are actionable.
              </p>
              <p>
                I thrive when leading cross-functional projects that balance user needs with business goals, turning research into revenue.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl bg-background border border-border">
                  <p className="font-display text-4xl text-primary mb-1">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-4">Education</h3>
              <div className="space-y-3">
                {[
                  { year: "2012–2015", degree: "M.A. Cognitive Sciences", school: "University of Osnabrück" },
                  { year: "2008–2011", degree: "B.A. Applied Linguistics", school: "Adam Mickiewicz University" },
                  { year: "2020–2022", degree: "Intercultural Communication", school: "Poznań University of Economics" },
                ].map((edu) => (
                  <div key={edu.degree} className="flex gap-4 font-body text-sm">
                    <span className="text-muted-foreground w-20 shrink-0">{edu.year}</span>
                    <div>
                      <p className="text-foreground font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
