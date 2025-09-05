"use client";

import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, MapPin, Download,
  Code, ArrowRight,
  Star, ExternalLink, ChevronDown, Send, Menu, X
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import saif from "@/saif.jpg";

// Floating Particles Component
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{ left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, (i * 5) % 100 - 50],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
          }}
          transition={{
            duration: (i % 8) + 8,
            repeat: Infinity,
            delay: i % 3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

// Skills Section (concise badges)
const SkillsSection = () => {
  const categories: { title: string; items: string[] }[] = [
    { title: "Programming Languages", items: ["Python", "Java", "JavaScript", "PHP"] },
    { title: "Web Development", items: ["React", "Angular", "Ionic", "CSS", "Tailwind CSS", "Bootstrap"] },
    { title: "APIs", items: ["REST", "SOAP"] },
    { title: "Databases", items: ["MySQL", "Firebase"] },
    { title: "Methodologies", items: ["Scrum (Agile)"] },
    { title: "Mobile", items: ["Flutter", "Android Studio"] },
    { title: "Embedded Systems", items: ["Arduino", "Raspberry Pi", "ESP32/ESP8266"] },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            A curated selection of tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-gray-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-800 text-gray-200 border border-gray-700 hover:border-purple-500/60 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Seif Eddine BOUSSAID
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(item => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl"
      >
        <div className="py-4 space-y-2 px-4">
          {navItems.map(item => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ x: 10 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-base py-2 px-2 rounded-lg hover:bg-white/10 transition-all"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 animate-pulse"></div>
    <FloatingParticles />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 sm:space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
        >
          {/* Accessible heading text (visually hidden) */}
          <span className="sr-only">Boussaid Seif Eddine — Creative Developer</span>
          {/* Profile image shown in place of the heading words */}
          <div className="flex justify-center">
            <Image
              src={saif}
              alt="Boussaid Seif Eddine"
              width={240}
              height={240}
              priority
              className="rounded-full shadow-lg shadow-purple-500/25 ring-2 ring-white/10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 object-cover"
            />
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4"
        >
          Building amazing digital experiences with modern technologies and creative solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
          >
            View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="w-full sm:w-auto border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 pt-8"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/Saif2841"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://www.linkedin.com/in/seif-eddine-boussaid-24a859226/"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="mailto:bousaidsaiif@gmail.com"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            I'm <span className="font-semibold text-white">BOUSSAID Seif Eddine</span>, an Engineering student at <span className="font-semibold text-white">ESPRIT (Tunisia)</span> passionate about building delightful, high-performance digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">A bit about me</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              I love working across the stack with React, Next.js and TypeScript, and I enjoy crafting clean UI with motion and accessibility in mind. At ESPRIT, I focus on engineering fundamentals while building real-world projects.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              Outside of school and code, I explore new tech, iterate on side projects, and collaborate with peers on ideas that ship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                <div>
                  <dt className="text-gray-400">Full Name</dt>
                  <dd className="text-white font-medium">Boussaid Seif Eddine</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Education</dt>
                  <dd className="text-white font-medium">Engineering student, ESPRIT (Tunisia)</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      name: "Aiesec Application",
      description: "A full-stack application with modern UI and advanced features",
      link: "https://github.com/Saif2841/Natco2k22",
      tech: ["Java", "XML", "Firebase", "Git"],
      featured: true
    },
    {
      name: "fittracker Platform",
      description: "A fitness tracking web app with user authentication and data visualization",
      link: "https://github.com/ghofrane-jendoubi/fittracker",
      tech: ["Symfony", "Node.js", "Firebase", "Git"],
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            Here are some of the projects I've worked on recently. They showcase my skills in web and mobile development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-xl border border-gray-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              {proj.featured && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" /> Featured
                  </span>
                </div>
              )}

              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <Code className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {proj.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={proj.link}
                    className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={proj.link}
                    className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            Ready to work together? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <p className="text-gray-300 text-sm sm:text-base truncate">bousaidsaiif@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <p className="text-gray-300 text-sm sm:text-base">+216 90 432 614</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-gray-300 text-sm sm:text-base">Tunisie</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-white placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-white placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-white placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none text-white placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
                placeholder="Your message"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="py-8 sm:py-12 bg-black border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Boussaid Seif Eddine. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Saif2841"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/seif-eddine-boussaid-24a859226/"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:bousaidsaiif@gmail.com"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </footer>
);

// (Skills section removed as per new design)

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}