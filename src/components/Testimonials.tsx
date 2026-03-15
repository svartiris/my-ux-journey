const testimonials = [
  {
    quote: "Współpraca z Melanie to dowód na to, jak ogromny wpływ na biznes potrafi mieć świetny UX Research. Melanie to profesjonalistka w każdym calu. Jej przenikliwość i analityczny umysł pozwalają jej dostrzegać niuanse w zachowaniach użytkowników, które inni łatwo przeoczają. Najbardziej imponująca w pracy Melanie jest jej umiejętność łączenia perspektywy użytkownika z celami firmy. Jej badania nigdy nie kończyły się na samej diagnozie problemu, zawsze dostarczała konkretne, wartościowe rekomendacje, których wdrożenie przynosiło nam wymierne korzyści biznesowe. Gorąco polecam Melanie każdej organizacji, która chce tworzyć lepsze produkty i usługi w oparciu o rzetelne dane.",
    author: "Maciej Rynarzewski",
    role: "Strategy Director at ZEN.COM",
  },
  {
    quote: "During my time at G2A, Melanie was my team leader and my mentor. She is very thorough, pays attention to every small detail and has a very broad knowledge of research methods and cognitive science. She also has an impeccable command of four (!) languages, which makes her able to talk to users from all around the world. As a manager, she was very supportive, offered her help and shared her expertise whenever we needed it. I learned a lot from Melanie and I'm sure whoever gets to work with her will learn a lot, too.",
    author: "Olga Skoczek (Wojnarowska)",
    role: "UX Researcher at G2A.COM",
  },
  {
    quote: "I have pleasure to work with Melanie on many projects that focus strongly on UX Research. She has helped me improve my UX Designs plenty of times and as well as optimising many products. She's a very knowledgable researcher that has provided critical data and solutions to company's projects and has improved the flow of information across many branches in the company. I'm very thankful I get to design, knowing that my every move is being backed by such a professional.",
    author: "Kamil Rejman",
    role: "UX Designer at G2A.COM",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="p-8 rounded-xl bg-background border border-border flex flex-col justify-between"
            >
              <p className="font-body text-muted-foreground leading-relaxed italic mb-6 text-sm">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-display text-foreground">{t.author}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
