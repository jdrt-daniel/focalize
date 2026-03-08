import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    description: "Entendemos tus necesidades, objetivos y la visión de tu producto.",
  },
  {
    num: "02",
    title: "Diseño & Planificación",
    description: "Creamos wireframes, definimos la arquitectura y planificamos sprints.",
  },
  {
    num: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con metodología ágil y revisiones constantes.",
  },
  {
    num: "04",
    title: "Lanzamiento & Soporte",
    description: "Desplegamos, monitoreamos y ofrecemos soporte continuo post-lanzamiento.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Proceso</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Cómo <span className="text-gradient">trabajamos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 rounded-xl glass group"
            >
              <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
