"use client";

import AboutSection from "@/components/Main/AboutSection";
import ProjectSection from "@/components/Main/ProjectSection";
import TechStackSection from "@/components/Main/TechStackSection";

export default function Main() {
    return (
        <main className="mx-auto mb-12 flex max-w-4xl flex-col lg:max-w-5xl xl:max-w-6xl">
            <AboutSection />
            <TechStackSection />
            <ProjectSection />
        </main>
    );
}
