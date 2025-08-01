import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaVideo,
  FaBullhorn,
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaUsers,
  FaPenFancy,
  FaFilm,
  FaMagic,
  FaLanguage,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJsonwebtokens,
  SiVercel,
  SiExpress,
  SiGoogleads,
  SiGoogleanalytics,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiTiktok,
  SiYoutubegaming,
  SiCanva,
  SiNotion,
  SiJira,
  SiFigma,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const mainSkills = [
  {
    icon: <FaHtml5 className="text-orange-500 text-4xl animate-bounce" />,
    title: "HTML5",
    desc: "Estructuro interfaces limpias y semánticas.",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-4xl animate-bounce" />,
    title: "CSS3",
    desc: "Estilizo sitios con layouts responsivos.",
  },
  {
    icon: <FaJs className="text-yellow-300 text-4xl animate-pulse" />,
    title: "JavaScript",
    desc: "Agrego lógica e interactividad al frontend.",
  },
  {
    icon: <SiTypescript className="text-blue-400 text-4xl animate-pulse" />,
    title: "TypeScript",
    desc: "Uso tipado estático para evitar errores.",
  },
  {
    icon: <FaReact className="text-cyan-400 text-4xl animate-spin" />,
    title: "React",
    desc: "Creo interfaces dinámicas con componentes.",
  },
  {
    icon: <SiTailwindcss className="text-teal-300 text-4xl animate-bounce" />,
    title: "Tailwind CSS",
    desc: "Diseño rápido con clases utilitarias.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl animate-pulse" />,
    title: "Node.js",
    desc: "Servidor rápido en JS con Express.",
  },
  {
    icon: <SiExpress className="text-white text-4xl animate-ping" />,
    title: "Express.js",
    desc: "Framework minimalista para APIs REST.",
  },
  {
    icon: <SiMongodb className="text-green-400 text-4xl animate-bounce" />,
    title: "MongoDB",
    desc: "Base de datos NoSQL para datos flexibles.",
  },
  {
    icon: <SiPostgresql className="text-blue-300 text-4xl animate-pulse" />,
    title: "PostgreSQL",
    desc: "BD relacional con estructuras complejas.",
  },
  {
    icon: <SiJsonwebtokens className="text-yellow-200 text-4xl animate-spin" />,
    title: "JWT",
    desc: "Autenticación segura con tokens.",
  },
  {
    icon: <FaGitAlt className="text-orange-400 text-4xl animate-bounce" />,
    title: "Git",
    desc: "Versiono y gestiono mi código localmente.",
  },
  {
    icon: <FaGithub className="text-white text-4xl animate-bounce" />,
    title: "GitHub",
    desc: "Trabajo colaborativo y despliegues.",
  },
  {
    icon: <SiFirebase className="text-yellow-500" />,
    title: "Firebase",
    desc: "Backend serverless y autenticación.",
  },
  {
    icon: <SiVercel className="text-white text-4xl animate-pulse" />,
    title: "Vercel",
    desc: "Despliego mis sitios en segundos.",
  },
  {
    icon: <FaDatabase className="text-purple-300 text-4xl animate-ping" />,
    title: "REST API",
    desc: "Diseño APIs claras y bien documentadas.",
  },
  {
    icon: <SiJira className="text-blue-400 text-4xl animate-pulse" />,
    title: "Jira",
    desc: "Gestiono tareas y flujos ágiles en equipo.",
  },
  {
    icon: <SiFigma className="text-pink-400 text-4xl animate-bounce" />,
    title: "Figma",
    desc: "Diseño interfaces colaborativas y prototipos UX/UI.",
  },
  {
    icon: <FaLanguage className="text-blue-300 text-4xl animate-bounce" />,
    title: "Inglés B2/Bilingüe",
    desc: "Comunicación fluida en inglés para proyectos internacionales.",
  },
];

// Otras habilidades: Edición y Marketing
export const otherSkills = [
  {
    icon: <FaVideo className="text-red-400 text-4xl animate-pulse" />,
    title: "Edición de Video",
    desc: "Creo contenido atractivo para redes y YouTube.",
  },
  {
    icon: (
      <SiAdobepremierepro className="text-purple-400 text-4xl animate-pulse" />
    ),
    title: "Premiere Pro",
    desc: "Edición profesional para YouTube y reels.",
  },
  {
    icon: (
      <SiAdobeaftereffects className="text-blue-400 text-4xl animate-spin" />
    ),
    title: "After Effects",
    desc: "Animaciones, intros y efectos especiales.",
  },
  {
    icon: <FaFilm className="text-white text-4xl animate-bounce" />,
    title: "CapCut",
    desc: "Edición móvil para contenido viral y rápido.",
  },
  {
    icon: <SiTiktok className="text-pink-400 text-4xl animate-bounce" />,
    title: "TikTok Editing",
    desc: "Edición vertical optimizada para engagement viral.",
  },
  {
    icon: <SiYoutubegaming className="text-red-500 text-4xl animate-pulse" />,
    title: "YouTube Shorts",
    desc: "Edición rápida para videos de formato corto.",
  },
  {
    icon: <SiCanva className="text-teal-200 text-4xl animate-ping" />,
    title: "Canva",
    desc: "Diseño de miniaturas, banners y contenido visual.",
  },
  {
    icon: <FaBullhorn className="text-yellow-300 text-4xl animate-bounce" />,
    title: "Marketing Digital",
    desc: "Promuevo marcas usando SEO, redes y campañas.",
  },
  {
    icon: <FaSearch className="text-white text-4xl animate-bounce" />,
    title: "SEO",
    desc: "Optimizo páginas para posicionarlas en buscadores como Google.",
  },
  {
    icon: <SiGoogleads className="text-blue-500 text-4xl animate-ping" />,
    title: "Google Ads",
    desc: "Gestiono campañas pagas efectivas con ROI positivo.",
  },
  {
    icon: <FaFacebookF className="text-blue-600 text-4xl animate-pulse" />,
    title: "Facebook Ads",
    desc: "Segmento audiencias y creo campañas sociales.",
  },
  {
    icon: <FaInstagram className="text-pink-500 text-4xl animate-bounce" />,
    title: "Instagram Marketing",
    desc: "Impulso contenido visual y engagement.",
  },
  {
    icon: <MdEmail className="text-red-300 text-4xl animate-ping" />,
    title: "Email Marketing",
    desc: "Automatizo y personalizo campañas por correo.",
  },
  {
    icon: <FaUsers className="text-green-300 text-4xl animate-bounce" />,
    title: "Community Management",
    desc: "Gestiono comunidades digitales y redes sociales.",
  },
  {
    icon: <FaPenFancy className="text-yellow-200 text-4xl animate-pulse" />,
    title: "Content Marketing",
    desc: "Creo contenido relevante y orientado a SEO.",
  },
  {
    icon: (
      <SiGoogleanalytics className="text-indigo-300 text-4xl animate-bounce" />
    ),
    title: "Google Analytics",
    desc: "Analizo métricas para tomar decisiones.",
  },
  {
    icon: <SiNotion className="text-white text-4xl animate-bounce" />,
    title: "Planificación de Contenido",
    desc: "Organizo ideas y flujos de trabajo en Notion.",
  },
  {
    icon: <FaFilm className="text-red-200 text-4xl animate-ping" />,
    title: "Montaje Narrativo",
    desc: "Cuento historias con impacto emocional.",
  },
  {
    icon: <FaMagic className="text-pink-300 text-4xl animate-bounce" />,
    title: "Transiciones Creativas",
    desc: "Mantengo el interés visual con efectos dinámicos.",
  },
];
