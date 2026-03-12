const testimonials = [
  {
    quote: "Melanie's research transformed how we approach our checkout flow. Her insights were directly responsible for a measurable lift in conversion.",
    author: "Product Manager",
    role: "E-Commerce Platform",
  },
  {
    quote: "She has a rare ability to translate complex data into clear, actionable recommendations that the whole team can rally behind.",
    author: "UX Design Lead",
    role: "Digital Agency",
  },
  {
    quote: "Working with Melanie meant our decisions were always grounded in real user needs. She brought structure and rigor to every project.",
    author: "Head of Marketing",
    role: "Tech Company",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16">
          What people say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="p-8 rounded-xl bg-background border border-border flex flex-col justify-between"
            >
              <p className="font-body text-muted-foreground leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-display text-foreground">{t.author}</p>
                <p className="font-body text-sm text-accent">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
