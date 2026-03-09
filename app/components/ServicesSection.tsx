import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Brain, Shield, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Plataformas web robustas y escalables con las tecnologías más modernas del mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma que ofrecen experiencias de usuario excepcionales.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Arquitecturas de servidor sólidas, APIs RESTful y microservicios optimizados.",
  },
  {
    icon: Brain,
    title: "IA & Automatización",
    description: "Integración de inteligencia artificial y automatización de procesos empresariales.",
  },
  {
    icon: Shield,
    title: "Consultoría Técnica",
    description: "Auditorías de código, mejora de rendimiento y asesoría en arquitectura de software.",
  },
  {
    icon: Rocket,
    title: "MVP & Startups",
    description: "Desarrollo ágil de productos mínimos viables para validar tu idea rápidamente.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Servicios</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Lo que hacemos <span className="text-gradient">mejor</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Soluciones end-to-end para cada etapa de tu producto digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl glass hover:glow-box transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
