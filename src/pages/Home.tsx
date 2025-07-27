import { useState, useRef } from "react";
import "../styles/style.css";
import videoFile from "../assets/background.mp4";
import { mainSkills, otherSkills } from "../components/skillsData";
import {
  paginasWeb,
  disenoUXUI,
  edicionVideo,
  paginasWebLinks,
} from "../components/portfolioData";
import Portfolium from "../components/Portfolium";

import { FaGithub, FaFacebookF, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";

const Home: React.FC = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeSection, setActiveSection] = useState("paginasWeb");
  const [showOthers, setShowOthers] = useState(false);

  const paginasWebRef = useRef<HTMLDivElement>(null);
  const disenoUXUIRef = useRef<HTMLDivElement>(null);
  const edicionVideoRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    setActiveSection(section);
    let ref;
    if (section === "paginasWeb") ref = paginasWebRef;
    else if (section === "disenoUXUI") ref = disenoUXUIRef;
    else ref = edicionVideoRef;
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const skillsToShow = showOthers
    ? [...mainSkills, ...otherSkills]
    : mainSkills;

  return (
    <>
      <header className="bg-[#020942] text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-bold">Reinaldo Landaeta</h1>
        <nav className="flex gap-4">
          <a href="#skills" className="link-underline text-white">
            Ver Curriculum
          </a>
          <a href="#contacto" className="link-underline text-white">
            Contacto
          </a>
        </nav>
      </header>

      <div className="pt-20">
        <div className="bg-[#020942] px-0.5 py-0.5 overflow-hidden">
          <div
            className={`flex transition-transform duration-700 ease-in-out ${
              showPortfolio ? "-translate-x-[100vw]" : ""
            } w-[200vw]`}
          >
            <section className="w-screen pr-4 relative">
              <video
                autoPlay
                loop
                muted
                className="w-full max-h-[600px] object-cover rounded-xl shadow-lg"
              >
                <source src={videoFile} type="video/mp4" />
              </video>
              <button
                onClick={() => setShowPortfolio(true)}
                className="absolute bottom-20 cursor-pointer left-1/2 transform -translate-x-1/2 border border-gray-50 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-[#020942] transition duration-300"
              >
                Ver Portafolio →
              </button>
            </section>

            {showPortfolio && (
              <Portfolium
                showPortfolio={showPortfolio}
                setShowPortfolio={setShowPortfolio}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                paginasWebRef={paginasWebRef}
                disenoUXUIRef={disenoUXUIRef}
                edicionVideoRef={edicionVideoRef}
                handleScroll={handleScroll}
                paginasWeb={paginasWeb}
                disenoUXUI={disenoUXUI}
                edicionVideo={edicionVideo}
                paginasWebLinks={paginasWebLinks}
              />
            )}
          </div>

          {!showPortfolio && (
            <section className="bg-[#232954] text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 z-20 relative">
              <div>
                <h2 className="text-xl font-bold">Sígueme en mis redes</h2>
                <p className="text-sm">
                  Contenido exclusivo en cada plataforma
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="https://github.com/REyyyy43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-400 transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reinaldo-landaeta-232188289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition"
                >
                  <SiLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://discord.com/channels/1141530033949773905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-500 transition"
                >
                  <FaDiscord className="text-2xl" />
                </a>
                <a
                  href="https://w.app/micontacto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-700 transition"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01d4bcd03c2f8ed577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 transition"
                >
                  <FaUpwork className="text-2xl" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition"
                >
                  <MdEmail className="text-2xl" />
                </a>
              </div>

              <div>
                <a
                  href="https://w.app/micontacto"
                  className="bg-white text-[#020942] px-4 py-2 rounded-full hover:bg-gray-100 transition"
                >
                  Contactar
                </a>
              </div>
            </section>
          )}

          {!showPortfolio && (
            <section id="skills" className="mt-0 text-white px-0 relative">
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
                <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-20 pb-20">
                  <h2 className="text-3xl font-bold mb-10 text-center">
                    Mis Habilidades
                  </h2>
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full">
                    {skillsToShow.map(({ icon, title, desc }, i) => (
                      <li
                        key={i}
                        className="bg-[#03155b] p-4 rounded-lg shadow-md flex items-start gap-4"
                      >
                        {icon}
                        <div>
                          <h3 className="text-lg font-semibold">{title}</h3>
                          <p className="text-sm text-gray-300">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowOthers(!showOthers)}
                    className="mt-8 text-[#f0f2ff] hover:text-[#35385f] border-2 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition-colors"
                  >
                    {showOthers
                      ? "Ocultar otras habilidades"
                      : "Mostrar otras habilidades"}
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <footer
        id="contacto"
        className="bg-[#020942] text-white text-center py-6"
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Mi Portafolio. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
};

export default Home;
