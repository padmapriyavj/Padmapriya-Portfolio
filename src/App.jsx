import React, { useState, useEffect } from "react";
import resumePDF from "./assets/Padmapriya_V_Resume_Fullstack_Developer.pdf";
import pulseboardImg from "./assets/pulseboard-img.png";
import devopsImg from "./assets/devops-img.png";
import earthquakeImg from "./assets/earthquake-img.png";
import mcpImg from "./assets/mcp-img.webp";
import auction from "./assets/auction-img.png";
import rssImg from "./assets/rss-digest-bot-img.webp";
import aboutImg from "./assets/about-img.jpeg";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
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
  SiSolidity,
  SiWeb3Dotjs,
  SiExpress,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiTerraform,
} from "react-icons/si";

import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { SiMedium } from "react-icons/si";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INFO = {
  name: "Padmapriya Vijayaragava Rengaraj",
  email: "padmapriya.vrj@gmail.com",
  links: {
    github: "https://github.com/padmapriyavj",
    linkedin: "https://www.linkedin.com/in/padmapriya-v-48ab1220a/",
    resume: resumePDF, // Make sure this PDF exists in /public
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
  { name: "Express", icon: SiExpress },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Kafka", icon: SiApachekafka },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Solidity", icon: SiSolidity },
  { name: "Web3.js", icon: SiWeb3Dotjs },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Terraform", icon: SiTerraform },
];

const PROJECTS = [
  {
    title: "Meta Mart - NFT Auction DApp",
    blurb:
      "A full-featured NFT marketplace and auction platform built on blockchain. Features NFT minting, marketplace trading, live auctions, and smart contract integration for decentralized trading.",
    stack: [
      "Solidity",
      "React",
      "JavaScript",
      "Truffle",
      "Ganache",
      "IPFS",
      "Web3.js",
      "CSS",
      "HTML",
    ],
    code: "https://github.com/Kiran9223/Auction-DApp",
    img: auction,
  },
  {
    title: "Pulseboard - IoT Analytics Dashboard",
    blurb:
      "Real-time IoT analytics dashboard with event-driven architecture, live alerts, and cloud-ready deployment. Collects, visualizes, and analyzes telemetry data from IoT devices with Kafka streaming.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "TimescaleDB",
      "JWT",
      "Docker",
      "GitHub Actions",
      "WebSocket",
    ],
    code: "https://github.com/padmapriyavj/Pulseboard",
    img: pulseboardImg,
  },
  {
    title: "DevOps Orchestra",
    blurb:
      "AI-driven DevOps automation platform that orchestrates validation, Infrastructure as Code, testing, and deployment through a single YAML configuration. Streamlines CI/CD pipelines with intelligent automation.",
    stack: [
      "Python",
      "Kafka",
      "GitHub Actions",
      "YAML",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    code: "https://github.com/Devops-orchestra/DevOps-Orchestra",
    img: devopsImg,
  },
  {
    title: "Geoshake Prediction",
    blurb:
      "Machine learning application for earthquake prediction and analysis using geospatial data. Implements advanced algorithms for seismic activity forecasting and risk assessment.",
    stack: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "Geospatial Analysis",
    ],
    code: "https://github.com/padmapriyavj/Geoshake_Prediction",
    img: earthquakeImg,
  },
  {
    title: "RSS Digest Bot",
    blurb:
      "Automated RSS feed aggregator and digest bot that collects articles from multiple sources and sends personalized weekly digest emails. Features customizable topics and intelligent content filtering.",
    stack: [
      "Python",
      "BeautifulSoup",
      "SMTP",
      "RSS",
      "Email Automation",
      "Web Scraping",
      "Scheduling",
      "Data Processing",
    ],
    code: "https://github.com/padmapriyavj/RSS-DIGEST-BOT",
    img: rssImg,
  },
];

const BLOGS = [
  {
    title: "Bringing MCP to Life: A Practical RSS Digest Bot in Python",
    date: "Jun 22, 2025",
    url: "https://medium.com/ai-in-plain-english/bringing-mcp-to-life-a-practical-rss-digest-bot-in-python-e5498b6271bf",
  },
  {
    title: "Why Model Context Protocol Is the REST for LLMs",
    date: "Jun 4, 2025",
    url: "https://medium.com/ai-in-plain-english/why-model-context-protocol-is-the-rest-for-llms-38de3c720fdf",
  },
];

const Pill = ({ children, delay = 0, isDarkMode = false }) => (
  <motion.span
    className={`inline-block rounded-full border backdrop-blur px-3 py-1 text-sm transition-colors duration-300 ${
      isDarkMode
        ? "border-slate-600/30 bg-slate-800/60"
        : "border-slate-200/50 bg-white/60"
    }`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{
      scale: 1.05,
      backgroundColor: isDarkMode
        ? "rgba(139, 92, 246, 0.1)"
        : "rgba(16, 185, 129, 0.1)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.span>
);

// Animation variants for consistent animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section for navigation highlighting
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "blog", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`font-['EB_Garamond',serif] transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"
      }`}
    >
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${
          isDarkMode
            ? "bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500"
            : "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"
        }`}
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-slate-900/80 border-slate-700/50"
            : "bg-white/80 border-slate-200/50"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-center px-4 md:px-8 py-3">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Blog", "blog"],
              ["Contact", "contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <motion.a
                  href={`#${href}`}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === href
                      ? isDarkMode
                        ? "text-violet-400 font-medium"
                        : "text-emerald-600 font-medium"
                      : isDarkMode
                      ? "hover:text-violet-400"
                      : "hover:text-emerald-600"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {activeSection === href && (
                    <motion.div
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isDarkMode ? "bg-violet-900/30" : "bg-emerald-50"
                      }`}
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 ml-8">
            <motion.a
              href={INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://medium.com/@padmapriyavj2604"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiMedium size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${INFO.email}`}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`md:hidden border-t backdrop-blur-md ${
                isDarkMode
                  ? "border-slate-700/50 bg-slate-900/95"
                  : "border-slate-200/50 bg-white/95"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-4 space-y-3">
                {[
                  ["About", "about"],
                  ["Skills", "skills"],
                  ["Projects", "projects"],
                  ["Blog", "blog"],
                  ["Contact", "contact"],
                ].map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={`#${href}`}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      activeSection === href
                        ? isDarkMode
                          ? "text-violet-400 font-medium bg-violet-900/30"
                          : "text-emerald-600 font-medium bg-emerald-50"
                        : isDarkMode
                        ? "hover:text-violet-400 hover:bg-slate-800"
                        : "hover:text-emerald-600 hover:bg-emerald-50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </motion.a>
                ))}
                <div
                  className={`flex items-center gap-3 pt-3 border-t ${
                    isDarkMode ? "border-slate-700/50" : "border-slate-200/50"
                  }`}
                >
                  <motion.a
                    href={INFO.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={INFO.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://medium.com/@padmapriyavj2604"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SiMedium size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${INFO.email}`}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Hero Section */}
      <section
        id="home"
        className={`pt-32 md:pt-40 pb-20 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-emerald-50 via-white to-teal-50"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
                : "bg-gradient-to-br from-emerald-300/30 to-teal-300/30"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20"
                : "bg-gradient-to-tr from-cyan-300/30 to-blue-300/30"
            }`}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-12 md:gap-16 relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className={`text-4xl md:text-6xl leading-tight font-semibold bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400"
                  : "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {INFO.name}
            </motion.h1>
            <motion.div
              className={`mt-3 text-lg md:text-xl transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full‑Stack Developer | AI Practitioner | DevOps Engineer{" "}
            </motion.div>
            <motion.div
              className={`mt-4 mb-8 text-base md:text-lg max-w-prose transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I design intelligent, end‑to‑end applications powered by modern
              web stacks, real-time systems, and AI/ML workflows. With hands‑on
              experience in scalable backend systems, cloud deployments, and
              DevOps automation, I build solutions that are fast, secure, and
              production‑ready.
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                alt="Developer workspace"
                loading="lazy"
                className="w-full rounded-3xl shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              {/* Floating elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                  isDarkMode ? "bg-violet-400" : "bg-emerald-400"
                }`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full ${
                  isDarkMode ? "bg-purple-400" : "bg-teal-400"
                }`}
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className={`text-3xl md:text-4xl font-semibold bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-r from-violet-400 to-purple-400"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About
            </motion.h2>
            <motion.div
              className={`mt-4 leading-7 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Computer Science graduate student at CSU Fullerton with a
              B.Tech in IT from Anna University. I bring hands-on experience in
              full‑stack development, DevOps, and machine learning. At
              DigitranIT, I helped build “HealthyChamps” - a personalized
              meal-planning app - working on Angular frontends, Node.js APIs,
              and PostgreSQL optimization. I also implemented JWT auth and
              Docker-based CI/CD. I'm passionate about scalable systems,
              cloud-native apps, and intelligent automation. My recent work
              spans GNNs for geospatial data and multi-agent DevOps platforms.
            </motion.div>

            {/* One-liner separate block */}
            <motion.p
              className={`mt-4 italic transition-colors duration-300 ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              When I'm not coding, you'll find me refining backend architecture,
              designing intuitive UIs, or exploring the latest in AI and
              developer tooling.
            </motion.p>

            <motion.ul
              className={`mt-4 list-disc pl-6 space-y-1 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.li
                variants={fadeInUp}
                className={`transition-colors ${
                  isDarkMode
                    ? "hover:text-violet-400"
                    : "hover:text-emerald-600"
                }`}
              >
                <strong>Education:</strong> M.S. Computer Science (CSU
                Fullerton), B.Tech IT (Anna University)
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className={`transition-colors ${
                  isDarkMode
                    ? "hover:text-violet-400"
                    : "hover:text-emerald-600"
                }`}
              >
                <strong>Interests:</strong> Full‑stack development, Devops,
                Cloud, AI/ML
              </motion.li>
              <motion.li
                variants={fadeInUp}
                className={`transition-colors ${
                  isDarkMode
                    ? "hover:text-violet-400"
                    : "hover:text-emerald-600"
                }`}
              >
                <strong>Location:</strong> Los Angeles, CA, United States
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Animated Image/Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.img
                src={aboutImg}
                alt="Portrait"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Code Elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-16 h-16 rounded-xl shadow-lg flex items-center justify-center text-white font-mono text-sm ${
                  isDarkMode ? "bg-violet-600" : "bg-emerald-600"
                }`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs">{"</>"}</span>
              </motion.div>

              <motion.div
                className={`absolute -bottom-4 -left-4 w-12 h-12 rounded-lg shadow-lg flex items-center justify-center text-white font-mono text-xs ${
                  isDarkMode ? "bg-purple-600" : "bg-teal-600"
                }`}
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs">JS</span>
              </motion.div>

              <motion.div
                className={`absolute top-1/2 -right-6 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white font-mono text-xs ${
                  isDarkMode ? "bg-indigo-600" : "bg-cyan-600"
                }`}
                animate={{
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs">⚡</span>
              </motion.div>

              {/* Background Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-violet-500 to-purple-500"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id="skills"
        className={`py-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
                : "bg-gradient-to-br from-emerald-300/20 to-teal-300/20"
            }`}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-2xl ${
              isDarkMode
                ? "bg-gradient-to-tl from-indigo-500/20 to-cyan-500/20"
                : "bg-gradient-to-tl from-cyan-300/20 to-blue-300/20"
            }`}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className={`text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent ${
              isDarkMode
                ? "bg-gradient-to-r from-violet-400 to-purple-400"
                : "bg-gradient-to-r from-emerald-600 to-teal-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 animate-scroll w-[200%]"
              animate={{ x: [0, -50] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate skills to create looping illusion */}
              {[...SKILLS, ...SKILLS].map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  className={`group flex flex-col items-center justify-center px-4 py-3 rounded-xl border backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 active:scale-95 min-w-[120px] ${
                    isDarkMode
                      ? "border-slate-600/30 bg-slate-800/80"
                      : "border-slate-200/50 bg-white/80"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      size={28}
                      className={`transition-colors ${
                        isDarkMode
                          ? "text-violet-400 group-hover:text-purple-400"
                          : "text-emerald-600 group-hover:text-teal-600"
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`mt-2 text-sm text-center font-medium transition-colors ${
                      isDarkMode ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-slate-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent ${
              isDarkMode
                ? "bg-gradient-to-r from-violet-400 to-purple-400"
                : "bg-gradient-to-r from-emerald-600 to-teal-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              className={`group rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform ${
                isDarkMode ? "bg-slate-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold">
                Software Technical Consultant (Internship)
              </h3>
              <p className="text-sm text-slate-500">
                DigitranIT Software Solutions Pvt Ltd — Chennai, India | Mar
                2022 – Jun 2023
              </p>
              <ul
                className={`mt-4 list-disc pl-5 space-y-2 ${
                  isDarkMode ? "text-gray-200" : "text-slate-800"
                }`}
              >
                <li>
                  Designed and launched a personalized nutrition-based meal
                  planner app used by 1,000+ users across 6 countries.
                </li>
                <li>
                  Built modular backend using <strong>Node.js</strong> &{" "}
                  <strong>Express</strong>, optimized{" "}
                  <strong>PostgreSQL</strong> schemas and queries.
                </li>
                <li>
                  Enhanced frontend UX using <strong>Angular</strong> and
                  real-time updates, boosting engagement by 15%.
                </li>
                <li>
                  Secured APIs with <strong>JWT</strong> and{" "}
                  <strong>OAuth2</strong>; implemented RBAC for authorization.
                </li>
                <li>
                  Automated <strong>CI/CD pipelines</strong> with{" "}
                  <strong>Docker</strong> and <strong>GitHub Actions</strong>,
                  speeding up deployment by 50%.
                </li>
                <li>
                  Led a 5-member Agile team, conducted sprints and code reviews
                  to ensure timely feature delivery.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent ${
              isDarkMode
                ? "bg-gradient-to-r from-violet-400 to-purple-400"
                : "bg-gradient-to-r from-emerald-600 to-teal-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {PROJECTS.map((p, index) => (
              <motion.div
                key={index}
                className={`group rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "border-slate-600/30 bg-slate-800"
                    : "border-slate-200/50 bg-white"
                }`}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur rounded-lg font-medium transition-colors ${
                          isDarkMode
                            ? "bg-slate-800/90 text-slate-200 hover:bg-slate-700/90"
                            : "bg-white/90 text-slate-800 hover:bg-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Code</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight size={16} />
                        </motion.div>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className={`text-xl font-semibold mb-3 transition-colors ${
                      isDarkMode
                        ? "group-hover:text-violet-400 text-slate-200"
                        : "group-hover:text-emerald-600 text-slate-800"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {p.title}
                  </motion.h3>
                  <p
                    className={`leading-relaxed mb-4 transition-colors ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {p.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tech, techIndex) => (
                      <Pill
                        key={tech}
                        delay={techIndex * 0.05}
                        isDarkMode={isDarkMode}
                      >
                        {tech}
                      </Pill>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="blog"
        className={`py-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute top-10 right-20 w-40 h-40 rounded-full blur-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-500/20 to-indigo-500/20"
                : "bg-gradient-to-br from-blue-300/20 to-indigo-300/20"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className={`absolute bottom-10 left-20 w-32 h-32 rounded-full blur-2xl ${
              isDarkMode
                ? "bg-gradient-to-tl from-purple-500/20 to-pink-500/20"
                : "bg-gradient-to-tl from-purple-300/20 to-pink-300/20"
            }`}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className={`text-3xl md:text-4xl font-semibold bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-r from-violet-400 to-purple-400"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Blog
            </motion.h2>
            <motion.a
              href="https://medium.com/@padmapriyavj2604"
              target="_blank"
              rel="noreferrer"
              className={`group text-sm underline underline-offset-4 flex items-center gap-1 transition-colors ${
                isDarkMode ? "hover:text-violet-400" : "hover:text-emerald-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {BLOGS.map((blog, index) => (
              <motion.a
                href={blog.url}
                key={blog.title}
                target="_blank"
                rel="noreferrer"
                variants={fadeInUp}
                className={`group rounded-2xl border backdrop-blur p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "border-slate-600/30 bg-slate-800/80"
                    : "border-slate-200/50 bg-white/80"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`text-lg font-semibold transition-colors mb-2 ${
                    isDarkMode
                      ? "group-hover:text-violet-400 text-slate-200"
                      : "group-hover:text-emerald-600 text-slate-800"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {blog.title}
                </motion.div>
                <p
                  className={`text-sm mb-3 transition-colors ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {blog.date}
                </p>

                <motion.div
                  className={`text-sm flex items-center gap-1 transition-colors ${
                    isDarkMode
                      ? "text-slate-300 group-hover:text-violet-400"
                      : "text-slate-600 group-hover:text-emerald-600"
                  }`}
                  whileHover={{ x: 3 }}
                >
                  Read post
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={14} />
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
                : "bg-gradient-to-br from-emerald-300/20 to-teal-300/20"
            }`}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className={`absolute bottom-20 right-1/4 w-48 h-48 rounded-full blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-tl from-indigo-500/20 to-cyan-500/20"
                : "bg-gradient-to-tl from-cyan-300/20 to-blue-300/20"
            }`}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2
            className={`text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent ${
              isDarkMode
                ? "bg-gradient-to-r from-violet-400 to-purple-400"
                : "bg-gradient-to-r from-emerald-600 to-teal-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className={`text-lg mb-8 leading-relaxed transition-colors ${
              isDarkMode ? "text-slate-300" : "text-slate-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you want to collaborate, have a question or just want to say
            hi - my inbox is always open.
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href={`mailto:${INFO.email}`}
              className={`group inline-flex items-center gap-2 rounded-full text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-out ${
                isDarkMode
                  ? "bg-gradient-to-r from-violet-600 to-purple-600"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} />
              </motion.div>
              <span className="font-semibold">Say Hello</span>
            </motion.a>

            <motion.a
              href={INFO.links.resume}
              className={`group inline-flex items-center gap-2 rounded-full border backdrop-blur px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-out ${
                isDarkMode
                  ? "border-slate-600/30 bg-slate-800/80 text-slate-200 hover:bg-slate-700/80"
                  : "border-slate-200/50 bg-white/80 text-slate-800 hover:bg-emerald-50/80"
              }`}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.2 }}
              >
                <FileText size={18} />
              </motion.div>
              <span className="font-semibold">View Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <motion.footer
        className={`py-10 text-center text-sm transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-900 to-slate-800 text-slate-400"
            : "bg-gradient-to-r from-slate-50 to-emerald-50/30 text-slate-600"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} {INFO.name}
      </motion.footer>
    </div>
  );
}
