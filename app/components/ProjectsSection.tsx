import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project2,
    title: "DataPulse Analytics",
    category: "Plataforma SaaS",
    description:
      "Dashboard de analítica en tiempo real para gestión de métricas empresariales con visualización avanzada de datos.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    image: project2,
    title: "NeoBank App",
    category: "Fintech · App Móvil",
    description:
      "Aplicación de banca digital con transferencias instantáneas, gestión de gastos e integración con pasarelas de pago.",
    tags: ["React Native", "Go", "Redis", "Stripe"],
  },
  {
    image: project3,
    title: "ShopVerse",
    category: "E-Commerce",
    description:
      "Plataforma de comercio electrónico con catálogo inteligente, recomendaciones por IA y checkout optimizado.",
    tags: ["Next.js", "Python", "Elasticsearch", "AWS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Portafolio
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Proyectos <span className="text-gradient">relevantes</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Una selección de proyectos que demuestran nuestra capacidad técnica y compromiso con la calidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group glass rounded-xl overflow-hidden hover:glow-box transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <span className="w-9 h-9 rounded-lg bg-primary/90 flex items-center justify-center">
                    <ExternalLink size={16} className="text-primary-foreground" />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-primary font-medium">{project.category}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
