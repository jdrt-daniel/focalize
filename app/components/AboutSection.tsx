import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Código limpio y mantenible",
  "Comunicación transparente",
  "Entregas iterativas y puntuales",
  "Seguridad como prioridad",
  "Escalabilidad desde el día uno",
  "Soporte post-lanzamiento",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="pt-32 pb-24 relative">
      <div className="px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Nosotros</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
              Enfoque en lo que <span className="text-gradient">importa</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Somos un equipo apasionado por la tecnología que cree en construir software 
              con propósito. En focalize.io nos enfocamos en entender tu negocio para crear 
              soluciones que realmente generen impacto.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Code-like visual */}
            <div className="glass text-left rounded-xl p-6 font-mono text-sm space-y-2 glow-box">
              <div className="text-muted-foreground">{`// focalize.io`}</div>
              <div>
                <span className="text-primary">const</span>{" "}
                <span className="text-emerald-400">proyecto</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-primary">cliente</span>:{" "}
                <span className="text-amber-400">&quot;Tu empresa&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-primary">stack</span>:{" "}
                <span className="text-amber-400">[&quot;React&quot;, &quot;Node&quot;, &quot;Cloud&quot;]</span>,
              </div>
              <div className="pl-4">
                <span className="text-primary">calidad</span>:{" "}
                <span className="text-emerald-400">&quot;Excelente&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-primary">entrega</span>:{" "}
                <span className="text-emerald-400">&quot;Puntual&quot;</span>,
              </div>
              <div>{"}"}</div>
              <div className="mt-4">
                <span className="text-primary">await</span>{" "}
                <span className="text-foreground">focalize</span>.
                <span className="text-emerald-400">build</span>(proyecto)
              </div>
              <div className="flex items-center gap-2 mt-2 text-primary">
                <span>✓</span> Proyecto entregado exitosamente
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
