import React from "react";

// Minimal, accessible About component with grouped skills and color-aligned pills
// Uses Tailwind v4 classes. Accent color: #21AE6C

const ACCENT = "#21AE6C";
const ACCENT_BG = "#21AE6C/20"; // Tailwind arbitrary opacity

const SKILLS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native (Expo)", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "Django", "Django REST Framework", "Laravel", "Axios"],
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "Mongoose", "MySQL", "Firestore (Firebase)", "Firebase Storage"],
  },
  {
    title: "DevOps & Infra",
    items: ["Docker", "Docker Compose", "Nginx", "Git & GitHub", "Vercel", "Netlify", "AWS (Basic deployment)"],
  },
  {
    title: "Tools & Other",
    items: ["Leaflet (maps)", "Axios Interceptors", "Image classification / Robofflow"]
  }
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center text-white gap-4">
        <h2 className="font-bold text-3xl">About Me</h2>
        <p className="italic text-center max-w-[700px] text-white/80">
          I’m a Fullstack Developer with experience building and maintaining web and mobile
          applications across the full stack — from UI and frontend state to backend APIs,
          databases, and deployment. I focus on clean, maintainable code and practical solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left column - avatar + summary card */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="bg-[rgba(0,0,0,0.45)] p-6 rounded-2xl w-full max-w-[420px] shadow-sm">
            <div className="flex items-center gap-5">
              <img
                src="/public/aboutimg.png"
                alt="profile"
                className="w-28 h-28 rounded-full object-cover shrink-0"
              />

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Mr. Justin</h3>
                <p className="text-sm text-white/80">Fullstack Developer</p>
                <p className="text-xs text-white/60 mt-1">May 2025 — Present</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              I build web and mobile applications from front-end to back-end, solving problems and
              delivering clean, efficient code. I enjoy working with modern JS tooling, PHP
              frameworks, and containerized deployments.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="#projects"
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold border"
                style={{ borderColor: ACCENT, color: "#fff" }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Minimal stat row - optional */}
          <div className="w-full max-w-[420px] flex justify-between text-center text-white">
            <div>
              <p className="text-xl font-bold">7</p>
              <p className="text-xs text-white/80">Months Exp</p>
            </div>
            <div>
              <p className="text-xl font-bold">10+</p>
              <p className="text-xs text-white/80">Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold">Laravel</p>
              <p className="text-xs text-white/80">Stack</p>
            </div>
          </div>
        </div>

        {/* Right column - skills */}
        <div className="">
          <h4 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((group) => (
              <div key={group.title} className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl">
                <p className="text-sm font-semibold text-white/90 mb-3">{group.title}</p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* small note */}
          <p className="mt-6 text-sm text-white/70">
            Tools: Git, GitHub, Docker, Docker Compose, Nginx, VS Code, Postman
          </p>
        </div>
      </div>
    </section>
  );
}
