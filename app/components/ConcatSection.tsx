import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center glass rounded-2xl p-12 glow-box-strong relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 pointer-events-none" />
          <div className="relative z-10">
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para <span className="text-gradient">empezar</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas. 
              Sin compromiso, sin letra pequeña.
            </p>
            <a
              href="mailto:hello@focalize.io"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              hello@focalize.io
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
