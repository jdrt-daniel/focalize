import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap } from "lucide-react";

const HomeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-100 h-100 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="container relative z-10 pt-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-xs text-muted-foreground mb-8">
            <Zap size={14} className="text-primary" />
            Desarrollo de software a medida
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Transformamos ideas en{" "}
            <span className="text-gradient">software profesional</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Diseñamos y desarrollamos soluciones digitales que impulsan el crecimiento 
            de tu negocio. Código limpio, entregas puntuales, resultados reales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="bg-teal-500 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-box"
            >
              Iniciar proyecto
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-teal-500/20 transition-colors"
            >
              <Code2 size={18} />
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Proyectos entregados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "5+", label: "Años de experiencia" },
            { value: "24/7", label: "Soporte técnico" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
