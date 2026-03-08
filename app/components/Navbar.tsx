import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    name: "Servicios",
    href: "#servicios",
  },
  {
    name: "Nosotros",
    href: "#nosotros",
  },
  {
    name: "Proceso",
    href: "#proceso",
  },
  {
    name: "Proyectos",
    href: "#proyectos",
  },
  {
    name: "Contacto",
    href: "#contacto",
  },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-3xl font-display font-bold tracking-tight ml-8">
          <span className="text-gradient">focalize</span>
          <span className="text-muted-foreground">.io</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 rounded-lg  text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-teal-500/20 transition-colors "
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={navItems[3].href}
            className="px-5 py-2 rounded-lg bg-teal-500 text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hablemos
          </Link>
        </div>

        <button
          className="md:hidden text-foreground mr-8"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
