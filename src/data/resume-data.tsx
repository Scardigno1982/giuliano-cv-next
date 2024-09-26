import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Giuliano Netti",
  initials: "GN",
  location: "Chascomus, Buenos Aires, AR",
  locationLink:
    "https://www.google.com/maps/place/Chascomus,+Provincia+de+Buenos+Aires/",
  about: "Estudiante",
  summary:
    "Soy una persona apasionada por la tecnología y el análisis de datos, con habilidades desarrolladas en informática y diseño. Me gusta resolver problemas, crear soluciones tecnológicas y aplicar la creatividad en mis proyectos. Busco crecer profesionalmente en el área de tecnología, combinando mis conocimientos prácticos y teóricos.",
  avatarUrl: "/img/giuli.jpg",
  personalWebsiteUrl: "#",
  contact: {
    email: "giulianonetti82@gmail.com",
    tel: "+5492241679616",
    asesoramiento: "/",
    social: [
      {
        name: "Github",
        url: "https://github.com/GiulianoNetti",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Escuela de Educacion Secundaria Tecnica N1",
      link: "#",
      degree:
        "Estudiante de nivel secundario con orientación en carreras tecnológicas, enfocado en adquirir competencias técnicas y prácticas en el ámbito de la tecnología.",
      aptitudes: "",
      start: "2023",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Magdalena Virtual",
      link: "https://mapaescolar.abc.gob.ar",
      badges: [],
      title: "Tecnico Instalador",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Responsable de la instalación y configuración de equipos de internet para diversos clientes, asegurando un servicio eficiente y de calidad.",
    },
  ],

  awards: [
    {
      award: "Implement Load Balancing on Compute Engine Skill Badge",
      link: "https://www.credly.com/badges/bb904419-d430-44d2-9803-ea939e519de6/",
      year: "2024",
      url: "/img/implement-load-balancing-on-compute-engine-skill-ba.png",
    },
  ],

  published: [
    {
      title:
        "Simplificando la Extracción de Números en Documentos PDF con Python",
      pub: "Este proyecto surge de la necesidad de extraer números específicos de documentos PDF, especialmente cuando estos números están incrustados como imágenes.",
      year: "2024",
      link: "https://www.linkedin.com/pulse/simplificando-la-extracci%25C3%25B3n-de-n%25C3%25BAmeros-en-documentos-pdf-scardigno-gftyf/",
    },
  ],

  // end insert

  skills: ["Internet, Microsoft Office, Windows"],
  projects: [
    {
      title: "Vagrant, Docker, Kubernetes, Helm y ArgoCD",
      techStack: ["Vagrant", "Docker", "Kubernetes", "Helm", "ArgoCD"],
      description:
        "El proyecto implica la creación de una máquina virtual con Vagrant, dockerización de una aplicación, automatización del proceso con CI/CD, despliegue en Kubernetes con actualización sin interrupciones, y la implementación de Helm y ArgoCD para la gestión de aplicaciones con y sin Helm en distintos namespaces.",
      logo: ConsultlyLogo,
      link: {
        label: "https://gitlab.com/sergioscardigno82/tp-10/",
        href: "https://gitlab.com/sergioscardigno82/tp-10/",
      },
    },
  ],
} as const;
