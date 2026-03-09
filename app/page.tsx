"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContacSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
