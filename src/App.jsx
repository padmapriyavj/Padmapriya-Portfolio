import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiAwsamplify,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiApachekafka,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INFO = {
  name: "Padmapriya Vijayaragava Rengaraj",
  email: "padmapriya.vrj@gmail.com",
  links: {
    github: "https://github.com/padmapriyavj",
    linkedin: "https://www.linkedin.com/in/padmapriya-v-48ab1220a/",
    resume: "/Padmapriya_V_Resume.pdf", // Make sure this PDF exists in /public
  },
};

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: SiOpenjdk },
  { name: "Python", icon: SiPython },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "AWS", icon: SiAwsamplify },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Kafka", icon: SiApachekafka },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
];

const PROJECTS = [
  {
    title: "DevOps Orchestra",
    blurb:
      "AI-driven DevOps automation that orchestrates validation, IaC, testing, and deployment via a single YAML.",
    stack: ["Python", "Kafka", "GitHub Actions"],
    code: "https://github.com/Devops-orchestra/DevOps-Orchestra",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pulseboard",
    blurb:
      "Full-stack productivity dashboard featuring calendar, notes, weather, and charts using React, Flask, and PostgreSQL.",
    stack: ["React", "Flask", "PostgreSQL"],
    code: "https://github.com/padmapriyavj/Pulseboard",
    img: "https://images.unsplash.com/photo-1612832021500-2031c5e23946?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "RSS Digest Bot",
    blurb:
      "A Python bot that aggregates RSS feeds and sends weekly digest emails, customizable for different topics.",
    stack: ["Python", "BeautifulSoup", "SMTP"],
    code: "https://github.com/padmapriyavj/RSS-DIGEST-BOT",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Auction DApp",
    blurb:
      "A decentralized auction application built with Solidity and React, enabling trustless bidding on the blockchain.",
    stack: ["Solidity", "React", "Hardhat"],
    code: "https://github.com/Kiran9223/Auction-DApp",
    img: "https://images.unsplash.com/photo-1622810814354-c807e58f3d88?q=80&w=1200&auto=format&fit=crop",
  },
];


const BLOGS = [
  {
    title: "Bringing MCP to Life: A Practical RSS Digest Bot in Python",
    date: "Jun 22, 2025",
    url: "https://medium.com/@padmapriyavj2604/rss-digest-bot",
  },
  {
    title: "Why Model Context Protocol Is the REST for LLMs",
    date: "Jun 4, 2025",
    url: "https://medium.com/@padmapriyavj2604/model-context-protocol",
  },
];

const Pill = ({ children }) => (
  <span className="inline-block rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-1 text-sm">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="font-['EB_Garamond',serif] text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <a
            href="#home"
            className="text-xl md:text-2xl font-semibold tracking-tight"
          >
            {INFO.name}
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
      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 md:pt-32 bg-gradient-to-b from-amber-50 via-white to-rose-50"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl leading-tight font-semibold">
              {INFO.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl opacity-80">
              Full‑Stack Web Developer
            </p>
            <p className="mt-4 text-base md:text-lg max-w-prose">
              Building performant web apps with thoughtful UX, scalable backends
              and clean CI/CD.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Kubernetes",
                "GraphQL",
                "Kafka",
              ].map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href={INFO.links.resume}
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-2 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-out"
              >
                <FileText
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
                <span className="font-semibold">Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white text-black px-6 py-2 shadow hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-out"
              >
                <span className="font-semibold">View Projects</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Developer workspace"
              loading="lazy"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Remaining Sections (placeholders for now) */}
      <section id="about" className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Main About Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
            <p className="mt-4 leading-7 text-slate-700">
              I’m a Computer Science graduate student at CSU Fullerton with
              internship experience as a Software Technical Consultant. I enjoy
              building full‑stack apps with robust backends, intuitive UIs, and
              production-ready DevOps workflows. I'm passionate about scalable
              systems, cloud-native development, and developer automation.
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-1 text-slate-700">
              <li>
                <strong>Education:</strong> M.S. Computer Science (CSU
                Fullerton), B.Tech IT (Anna University)
              </li>
              <li>
                <strong>Interests:</strong> Full‑stack development,
                DevOps/Cloud, ML for real‑time systems
              </li>
              <li>
                <strong>Location:</strong> Los Angeles, CA, United States
              </li>
            </ul>
          </div>

          {/* Quick Links Sidebar */}
          <aside className="space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/padmapriyavj"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-black/10 p-3 hover:bg-amber-50 transition"
              >
                <div className="font-medium">GitHub</div>
                <div className="text-sm opacity-70">
                  Code, projects & activity
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/padmapriya-v-48ab1220a/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-black/10 p-3 hover:bg-amber-50 transition"
              >
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm opacity-70">Work & profile updates</div>
              </a>
              <a
                href="https://medium.com/@padmapriyavj2604"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-black/10 p-3 hover:bg-amber-50 transition"
              >
                <div className="font-medium">Medium</div>
                <div className="text-sm opacity-70">Blogs & writing</div>
              </a>
            </div>
          </aside>
        </div>
      </section>
      <section id="skills" className="bg-rose-50 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Skills</h2>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll w-[200%]">
              {/* Duplicate skills to create looping illusion */}
              {[...SKILLS, ...SKILLS].map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center px-4 py-3 rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 active:scale-95 min-w-[120px]"
                >
                  <Icon
                    size={28}
                    className="text-amber-600 group-hover:scale-110 transition-transform"
                  />
                  <span className="mt-2 text-sm text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-slate-700">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <Pill key={tech}>{tech}</Pill>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm font-medium text-amber-600 hover:underline"
                    >
                      View Code →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-blue-50 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold">Blog</h2>
            <a
              href="https://medium.com/@padmapriyavj2604"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 flex items-center gap-1"
            >
              View All <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BLOGS.map((blog, index) => (
              <motion.a
                href={blog.url}
                key={blog.title}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                <div className="text-lg font-semibold">{blog.title}</div>
                <div className="text-sm opacity-70 mt-1">{blog.date}</div>
                <p className="mt-3 text-sm opacity-80 flex items-center gap-1">
                  Read post <ArrowUpRight size={14} />
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
  id="contact"
  className="bg-white py-20 px-4 md:px-8"
>
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get in Touch</h2>
    <p className="text-lg text-slate-700 mb-6">
      Whether you want to collaborate, have a question, or just want to say hi — my inbox is always open.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href={`mailto:${INFO.email}`}
        className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-2 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-out"
      >
        <Mail size={18} />
        <span className="font-semibold">Say Hello</span>
      </a>

      <a
        href={INFO.links.resume}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white text-black px-6 py-2 shadow hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-out"
        target="_blank"
        rel="noreferrer"
      >
        <FileText size={18} />
        <span className="font-semibold">View Resume</span>
      </a>
    </div>
  </div>
</section>

      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {INFO.name}
      </footer>
    </div>
  );
}
