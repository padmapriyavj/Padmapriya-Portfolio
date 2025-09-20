import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const INFO = {
  name: "Padmapriya Vijayaragava Rengaraj",
  email: "padmapriya.vrj@gmail.com",
  links: {
    github: "https://github.com/padmapriyavj",
    linkedin: "https://www.linkedin.com/in/padmapriya-v-48ab1220a/",
  },
};

export default function App() {
  return (
    <div className="font-['EB_Garamond',serif] text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <a
            href="#home"
            className="text-xl md:text-2xl font-semibold tracking-tight"
          >
            {INFO.name.split(" ")[0]}{" "}
            <span className="opacity-60">Portfolio</span>
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Blog", "blog"],
              ["Contact", "contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={`#${href}`}
                  className="hover:underline underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-black/5"
            >
              <Github size={20} />
            </a>
            <a
              href={INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-black/5"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${INFO.email}`}
              className="p-2 rounded-lg hover:bg-black/5"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="h-[100vh] bg-amber-50 flex items-center justify-center"
      >
        <h1 className="text-3xl">Home </h1>
      </section>
      <section
        id="about"
        className="h-[80vh] bg-white flex items-center justify-center"
      >
        <h1 className="text-3xl">About Section</h1>
      </section>
      <section
        id="skills"
        className="h-[80vh] bg-rose-50 flex items-center justify-center"
      >
        <h1 className="text-3xl">Skills Section</h1>
      </section>
      <section
        id="projects"
        className="h-[80vh] bg-white flex items-center justify-center"
      >
        <h1 className="text-3xl">Projects Section</h1>
      </section>
      <section
        id="blog"
        className="h-[80vh] bg-blue-50 flex items-center justify-center"
      >
        <h1 className="text-3xl">Blog Section</h1>
      </section>
      <section
        id="contact"
        className="h-[80vh] bg-white flex items-center justify-center"
      >
        <h1 className="text-3xl">Contact Section</h1>
      </section>

      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {INFO.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}
