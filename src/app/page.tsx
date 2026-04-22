/* 
  ========================================
  PAGE - Main Portfolio Page
  ========================================
  This is the main entry point that assembles all the sections.
  Uses data from portfolio.ts for customization.
*/

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Tecnologia from "@/components/Tecnologias";
import Proyectos from "@/components/Proyectos";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import { 
  personalInfo, 
  technologies, 
  projects, 
  services 
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation - Fixed at top */}
      <Navigation />

      {/* Sections */}
      <Hero 
        name={personalInfo.name}
        title={personalInfo.title}
        valueProposition={personalInfo.valueProposal}
      />

      <SobreMi />

      <Tecnologia technologies={technologies} />

      <Proyectos projects={projects} />

      <Servicios services={services} />

      <Contacto 
        email={personalInfo.email}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
        instagram={personalInfo.instagram}
        tiktok={personalInfo.tiktok}
        whatsapp={personalInfo.whatsapp}
      />

      <Footer 
        name={personalInfo.name}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
        instagram={personalInfo.instagram}
        tiktok={personalInfo.tiktok}
      />
    </main>
  );
}