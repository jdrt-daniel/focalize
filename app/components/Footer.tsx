const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          <span className="text-gradient">focalize</span>
          <span className="text-muted-foreground">.io</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} focalize.io — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
