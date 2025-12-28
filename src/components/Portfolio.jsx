import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code, ExternalLink, ChevronDown, User, Briefcase, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Datos del perfil (Fáciles de editar)
  const personalInfo = {
    name: "Alex Desarrollador",
    role: "Frontend Developer",
    description: "Creo experiencias web excepcionales centradas en la usabilidad y el diseño limpio.",
    about: {
      technical: "Especializado en el ecosistema de JavaScript con un enfoque profundo en React y optimización de rendimiento. Tengo experiencia construyendo aplicaciones escalables y mantenibles.",
      interests: "Me apasiona la arquitectura de software, el diseño UI/UX y contribuir a proyectos Open Source. En mi tiempo libre, exploro nuevas tecnologías de backend y automatización."
    }
  };

  const stack = [
    "React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", 
    "Node.js", "Git/GitHub", "Next.js", "Figma"
  ];

  const projects = [
    {
      id: 1,
      name: "E-Commerce Dashboard",
      desc: "Panel de administración completo con gráficos en tiempo real y gestión de inventario.",
      tech: ["React", "Recharts", "Firebase"],
      github: "#",
    },
    {
      id: 2,
      name: "Task Master App",
      desc: "Aplicación de gestión de tareas colaborativa estilo Kanban con drag-and-drop.",
      tech: ["React", "Redux", "Node.js"],
      github: "#",
    },
    {
      id: 3,
      name: "Travel Landing Page",
      desc: "Landing page de alto rendimiento para agencia de viajes con animaciones fluidas.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
    }
  ];

  // Función para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'stack', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, label, icon: Icon }) => (
    <button
      onClick={() => scrollToSection(to)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === to 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
          : 'text-gray-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      {Icon && <Icon size={18} />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              DevPortfolio.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              <NavLink to="home" label="Inicio" />
              <NavLink to="stack" label="Stack" />
              <NavLink to="projects" label="Proyectos" />
              <NavLink to="about" label="Sobre Mí" />
              <NavLink to="contact" label="Contacto" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 animate-fadeIn">
            <div className="flex flex-col p-4 gap-2">
              <NavLink to="home" label="Inicio" />
              <NavLink to="stack" label="Stack" />
              <NavLink to="projects" label="Proyectos" />
              <NavLink to="about" label="Sobre Mí" />
              <NavLink to="contact" label="Contacto" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Disponible para trabajar
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hola, soy <br/>
              <span className="text-blue-500">{personalInfo.name}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              {personalInfo.role}. {personalInfo.description}
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                Ver Proyectos <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-white rounded-lg font-medium transition-all"
              >
                Contáctame
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center animate-fadeIn">
             {/* Abstract Code Visualization Placeholder */}
            <div className="relative w-80 h-80 bg-slate-800 rounded-2xl rotate-3 border border-slate-700 shadow-2xl flex items-center justify-center group hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
              <Code size={80} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Stack Principal */}
      <section id="stack" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <Terminal className="text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Stack Principal</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {stack.map((tech, index) => (
              <div 
                key={index}
                className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-center hover:border-blue-500/50 hover:bg-slate-700 transition-all cursor-default group"
              >
                <span className="font-medium text-slate-300 group-hover:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 group">
                <div className="h-48 bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  {/* Placeholder for project image */}
                  <div className="text-slate-500 text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    {project.name[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} /> Ver en GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <User className="text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Sobre Mí</h2>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  Perfil Técnico
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.about.technical}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                  Intereses Profesionales
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.about.interests}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para colaborar?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:email@ejemplo.com"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <Mail className="group-hover:text-blue-400 transition-colors" />
              <span>Enviar Correo</span>
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <Linkedin className="group-hover:text-blue-400 transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <Github className="group-hover:text-blue-400 transition-colors" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Creado con React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;