import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const requirements = [
  "Conocimientos en JavaScript",
  "Conocimientos en Python",
  "Conocimientos en C++",
  "Desarrollo web (HTML, CSS)",
  "Bases de datos SQL (si aplica)",
];

const offerings = [
  "Disponibilidad para trabajo remoto",
  "Horario flexible",
  "Compromiso y responsabilidad",
  "Aprendizaje constante",
  "Adaptación a nuevos desafíos",
];

type ProfessionalProfileBannerProps = {
  email: string;
};

export function ProfessionalProfileBanner({
  email,
}: ProfessionalProfileBannerProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900",
        "p-6 text-white shadow-xl ring-1 ring-white/10 sm:p-8",
        "font-sans",
      )}
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="mr-1.5" aria-hidden>
            💻
          </span>
          ¡BUSCO OPORTUNIDAD COMO PROGRAMADOR!
        </h3>
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-blue-100/95 sm:text-base">
          Estoy en búsqueda de mi primera experiencia laboral en el mundo IT,
          con muchas ganas de aprender, crecer y aportar valor en un equipo de
          desarrollo.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200/90">
            Requisitos que cumplo
          </h4>
          <ul className="mt-3 space-y-2.5 text-sm text-white/95">
            {requirements.map((item) => (
              <li key={item} className="flex gap-2">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200/90">
            <span className="mr-1" aria-hidden>
              🚀
            </span>
            Lo que ofrezco
          </h4>
          <ul className="mt-3 space-y-2.5 text-sm text-white/95">
            {offerings.map((item) => (
              <li key={item} className="flex gap-2">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-stretch border-t border-white/10 pt-6 sm:items-center">
        <Button
          className="w-full bg-white font-semibold text-slate-950 hover:bg-blue-50 sm:w-auto"
          size="lg"
          asChild
        >
          <a href={`mailto:${email}`}>
            <span className="mr-1.5" aria-hidden>
              📩
            </span>
            Contactame para oportunidades laborales
          </a>
        </Button>
      </div>
    </div>
  );
}
