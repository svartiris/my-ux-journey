import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const buzzwords = ["curious", "multilingual", "asking the right questions"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % buzzwords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-3xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in">
            UX Research Portfolio
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-8 animate-fade-in-up">
            Hi, I'm
            <br />
            <span className="text-primary">Melanie Gierszal</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up h-8" style={{ animationDelay: "0.15s" }}>
            and I'm{" "}
            <span
              key={currentIndex}
              className="text-primary inline-block transition-all duration-500 animate-fade-in"
            >
              {buzzwords[currentIndex]}
            </span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#work" className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover:opacity-90 transition-opacity no-print">
              View Case Studies
            </a>
            <a href="#contact" className="inline-flex items-center px-8 py-3.5 rounded-lg border border-foreground/20 text-foreground font-body font-medium text-sm tracking-wide hover:bg-foreground/5 transition-colors no-print">
              Get in Touch
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-8 py-3.5 rounded-lg border border-foreground/20 text-foreground font-body font-medium text-sm tracking-wide hover:bg-foreground/5 transition-colors no-print"
            >
              Download as PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
