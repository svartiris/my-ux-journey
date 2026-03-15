import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
