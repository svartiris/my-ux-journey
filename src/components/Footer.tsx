const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Melanie Gierszal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="mailto:gierszal.melanie@gmail.com" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
