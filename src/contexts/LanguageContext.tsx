"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.about": "Acerca de",
    "nav.faqs": "Preguntas Frecuentes",
    "nav.contact": "Contacto",
    "nav.getStarted": "Comenzar",

    // Hero Section
    "hero.badge": "Bienvenido al Futuro",
    "hero.title": "Construye Algo",
    "hero.titleHighlight": "Increíble",
    "hero.subtitle":
      "Transforma tus ideas en realidad con soluciones de vanguardia que escalan e inspiran",
    "hero.getStarted": "Comenzar",
    "hero.learnMore": "Saber Más",

    // About Section
    "about.badge": "Acerca de Nosotros",
    "about.title": "Creamos Experiencias Digitales que Importan",
    "about.description1":
      "Con más de una década de experiencia, nos especializamos en crear soluciones digitales innovadoras que generan resultados. Nuestro equipo combina creatividad con experiencia técnica para ofrecer experiencias excepcionales para empresas de todos los tamaños.",
    "about.description2":
      "Desde startups hasta grandes empresas, hemos ayudado a cientos de clientes a transformar su visión en realidad a través de diseño y desarrollo de vanguardia.",
    "about.ourStory": "Nuestra Historia",
    "about.meetTeam": "Conoce al Equipo",
    "about.innovation": "Innovación Primero",
    "about.innovationDesc":
      "Aprovechando las últimas tecnologías para construir soluciones a prueba de futuro",
    "about.clientCentered": "Enfocados en el Cliente",
    "about.clientDesc":
      "Tu éxito es nuestra prioridad. Trabajamos estrechamente contigo en cada paso del camino",
    "about.quality": "Calidad Asegurada",
    "about.qualityDesc":
      "Pruebas rigurosas y atención al detalle en todo lo que entregamos",
    "about.projects": "Proyectos",
    "about.clients": "Clientes",
    "about.years": "Años",
    "about.satisfaction": "Satisfacción",

    // Services Section
    "services.badge": "Nuestros Servicios",
    "services.title": "Lo Que Mejor Hacemos",
    "services.subtitle":
      "Soluciones digitales integrales adaptadas para elevar tu marca y acelerar el crecimiento",
    "services.webDev": "Desarrollo Web",
    "services.webDevDesc":
      "Sitios web y aplicaciones web personalizadas construidas con frameworks modernos y mejores prácticas",
    "services.responsiveDesign": "Diseño Responsivo",
    "services.performance": "Optimización de Rendimiento",
    "services.mobileApps": "Aplicaciones Móviles",
    "services.mobileAppsDesc":
      "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias fluidas",
    "services.appStore": "Publicación en Tiendas de Apps",
    "services.uiux": "Diseño UI/UX",
    "services.uiuxDesc":
      "Interfaces hermosas e intuitivas diseñadas pensando en los usuarios desde el concepto hasta el pixel",
    "services.userResearch": "Investigación de Usuarios",
    "services.wireframing": "Wireframes y Prototipos",
    "services.designSystems": "Sistemas de Diseño",
    "services.cta": "¿Listo para comenzar tu proyecto?",
    "services.getStarted": "Comenzar",

    // Contact Section
    "contact.badge": "Ponte en Contacto",
    "contact.title": "Conectemos",
    "contact.titleHighlight": "Juntos",
    "contact.subtitle":
      "¿Tienes un proyecto en mente? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.",
    "contact.nameLabel": "Tu Nombre",
    "contact.namePlaceholder": "Juan Pérez",
    "contact.emailLabel": "Dirección de Correo",
    "contact.emailPlaceholder": "juan@ejemplo.com",
    "contact.messageLabel": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.sendMessage": "Enviar Mensaje",
    "contact.emailTitle": "Correo",
    "contact.phoneTitle": "Teléfono",
    "contact.officeTitle": "Oficina",

    // About Page
    "aboutPage.badge": "Acerca de Nosotros",
    "aboutPage.title": "Construimos",
    "aboutPage.titleHighlight": "Experiencias Digitales",
    "aboutPage.subtitle":
      "Creando soluciones innovadoras que transforman ideas en realidad con tecnología de vanguardia y excelencia creativa.",
    "aboutPage.missionTitle": "Nuestra Misión",
    "aboutPage.missionDesc":
      "Estamos dedicados a superar los límites de lo posible en innovación digital. Nuestra misión es empoderar a las empresas con soluciones tecnológicas transformadoras que impulsen el crecimiento y el éxito.",
    "aboutPage.visionTitle": "Nuestra Visión",
    "aboutPage.visionDesc":
      "Ser la fuerza líder en transformación digital, creando soluciones intuitivas y poderosas que den forma al futuro de la tecnología y mejoren la forma en que las personas interactúan con productos digitales.",
    "aboutPage.valuesTitle": "Nuestros",
    "aboutPage.valuesHighlight": "Valores",
    "aboutPage.innovationTitle": "Innovación",
    "aboutPage.innovationDesc":
      "Superando constantemente límites y explorando nuevas posibilidades para ofrecer soluciones de vanguardia.",
    "aboutPage.excellenceTitle": "Excelencia",
    "aboutPage.excellenceDesc":
      "Comprometidos con los más altos estándares de calidad en todo lo que creamos y entregamos.",
    "aboutPage.collaborationTitle": "Colaboración",
    "aboutPage.collaborationDesc":
      "Trabajando junto a nuestros clientes para lograr objetivos compartidos y éxito mutuo.",
    "aboutPage.teamTitle": "Conoce a Nuestro",
    "aboutPage.teamHighlight": "Equipo",
    "aboutPage.teamDesc":
      "Un grupo diverso de personas talentosas apasionadas por crear experiencias digitales excepcionales e impulsar la innovación.",
    "aboutPage.joinTeam": "Únete a Nuestro Equipo",

    // FAQs Page
    "faqs.badge": "Preguntas Frecuentes",
    "faqs.title": "Preguntas",
    "faqs.titleHighlight": "Frecuentes",
    "faqs.subtitle":
      "Encuentra respuestas a preguntas comunes sobre nuestros servicios, proceso y cómo podemos ayudarte a dar vida a tu proyecto.",
    "faqs.q1": "¿Qué servicios ofrecen?",
    "faqs.a1":
      "Ofrecemos una gama completa de servicios digitales incluyendo desarrollo web, desarrollo de aplicaciones móviles, diseño UI/UX, soluciones en la nube y consultoría de transformación digital. Nuestro equipo se especializa en crear soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.",
    "faqs.q2": "¿Cuánto tiempo toma un proyecto típico?",
    "faqs.a2":
      "Los plazos del proyecto varían según el alcance y la complejidad. Un sitio web simple puede tomar de 2 a 4 semanas, mientras que una aplicación web compleja podría tomar de 3 a 6 meses. Proporcionamos estimaciones detalladas de los plazos durante la fase de consulta inicial.",
    "faqs.q3": "¿Cuál es su proceso de desarrollo?",
    "faqs.a3":
      "Seguimos una metodología de desarrollo ágil con sprints regulares y sesiones de retroalimentación con el cliente. Nuestro proceso incluye descubrimiento, diseño, desarrollo, pruebas, implementación y soporte continuo. Tendrás total visibilidad durante todo el ciclo de vida del proyecto.",
    "faqs.q4": "¿Ofrecen soporte continuo después del lanzamiento?",
    "faqs.a4":
      "¡Sí! Ofrecemos varios paquetes de mantenimiento y soporte para garantizar que tu proyecto continúe funcionando sin problemas. Esto incluye correcciones de errores, actualizaciones de seguridad, optimización del rendimiento y mejoras de funciones según tus necesidades.",
    "faqs.q5": "¿Con qué tecnologías trabajan?",
    "faqs.a5":
      "Trabajamos con tecnologías modernas incluyendo React, Next.js, Node.js, TypeScript, Python, AWS y muchas más. Seleccionamos cuidadosamente el mejor stack tecnológico para cada proyecto según tus requisitos y objetivos a largo plazo.",
    "faqs.q6": "¿Cuánto cuesta un proyecto?",
    "faqs.a6":
      "Los costos del proyecto varían según la complejidad, las características y el cronograma. Proporcionamos precios transparentes y cotizaciones detalladas después de comprender tus requisitos. Ofrecemos modelos de compromiso flexibles que incluyen precio fijo, tiempo y materiales, y opciones de equipo dedicado.",
    "faqs.q7": "¿Pueden ayudar con un proyecto existente?",
    "faqs.a7":
      "¡Absolutamente! Podemos ayudar a mejorar, mantener o escalar tus aplicaciones existentes. Nuestro equipo puede realizar revisiones de código, implementar nuevas funciones, optimizar el rendimiento o refactorizar completamente tu código base si es necesario.",
    "faqs.q8": "¿Trabajan con startups?",
    "faqs.a8":
      "¡Sí, nos encanta trabajar con startups! Entendemos los desafíos únicos que enfrentan las startups y ofrecemos soluciones flexibles que pueden escalar con tu crecimiento. Podemos ayudarte a construir MVPs, validar ideas e iterar rápidamente según la retroalimentación del mercado.",
    "faqs.ctaTitle": "¿Aún tienes preguntas?",
    "faqs.ctaDesc": "¿No encuentras la respuesta que buscas? Nos encantaría saber de ti.",
    "faqs.ctaButton": "Ponte en Contacto",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.faqs": "FAQs",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "Welcome to the Future",
    "hero.title": "Build Something",
    "hero.titleHighlight": "Amazing",
    "hero.subtitle":
      "Transform your ideas into reality with cutting-edge solutions that scale and inspire",
    "hero.getStarted": "Get Started",
    "hero.learnMore": "Learn More",

    // About Section
    "about.badge": "About Us",
    "about.title": "We Create Digital Experiences That Matter",
    "about.description1":
      "With over a decade of experience, we specialize in crafting innovative digital solutions that drive results. Our team combines creativity with technical expertise to deliver exceptional experiences for businesses of all sizes.",
    "about.description2":
      "From startups to enterprises, we've helped hundreds of clients transform their vision into reality through cutting-edge design and development.",
    "about.ourStory": "Our Story",
    "about.meetTeam": "Meet the Team",
    "about.innovation": "Innovation First",
    "about.innovationDesc":
      "Leveraging the latest technologies to build future-proof solutions",
    "about.clientCentered": "Client-Centered",
    "about.clientDesc":
      "Your success is our priority. We work closely with you every step of the way",
    "about.quality": "Quality Assured",
    "about.qualityDesc":
      "Rigorous testing and attention to detail in everything we deliver",
    "about.projects": "Projects",
    "about.clients": "Clients",
    "about.years": "Years",
    "about.satisfaction": "Satisfaction",

    // Services Section
    "services.badge": "Our Services",
    "services.title": "What We Do Best",
    "services.subtitle":
      "Comprehensive digital solutions tailored to elevate your brand and accelerate growth",
    "services.webDev": "Web Development",
    "services.webDevDesc":
      "Custom websites and web applications built with modern frameworks and best practices",
    "services.responsiveDesign": "Responsive Design",
    "services.performance": "Performance Optimization",
    "services.mobileApps": "Mobile Apps",
    "services.mobileAppsDesc":
      "Native and cross-platform mobile applications that deliver seamless experiences",
    "services.appStore": "App Store Deployment",
    "services.uiux": "UI/UX Design",
    "services.uiuxDesc":
      "Beautiful and intuitive interfaces designed with users in mind from concept to pixel",
    "services.userResearch": "User Research",
    "services.wireframing": "Wireframing & Prototyping",
    "services.designSystems": "Design Systems",
    "services.cta": "Ready to start your project?",
    "services.getStarted": "Get Started",

    // Contact Section
    "contact.badge": "Get In Touch",
    "contact.title": "Let's",
    "contact.titleHighlight": "Connect",
    "contact.subtitle":
      "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "contact.nameLabel": "Your Name",
    "contact.namePlaceholder": "John Doe",
    "contact.emailLabel": "Email Address",
    "contact.emailPlaceholder": "john@example.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.sendMessage": "Send Message",
    "contact.emailTitle": "Email",
    "contact.phoneTitle": "Phone",
    "contact.officeTitle": "Office",

    // About Page
    "aboutPage.badge": "About Us",
    "aboutPage.title": "We Build",
    "aboutPage.titleHighlight": "Digital Experiences",
    "aboutPage.subtitle":
      "Crafting innovative solutions that transform ideas into reality with cutting-edge technology and creative excellence.",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDesc":
      "We're dedicated to pushing the boundaries of what's possible in digital innovation. Our mission is to empower businesses with transformative technology solutions that drive growth and success.",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDesc":
      "To be the leading force in digital transformation, creating intuitive and powerful solutions that shape the future of technology and enhance the way people interact with digital products.",
    "aboutPage.valuesTitle": "Our Core",
    "aboutPage.valuesHighlight": "Values",
    "aboutPage.innovationTitle": "Innovation",
    "aboutPage.innovationDesc":
      "Constantly pushing boundaries and exploring new possibilities to deliver cutting-edge solutions.",
    "aboutPage.excellenceTitle": "Excellence",
    "aboutPage.excellenceDesc":
      "Committed to the highest standards of quality in everything we create and deliver.",
    "aboutPage.collaborationTitle": "Collaboration",
    "aboutPage.collaborationDesc":
      "Working together with our clients to achieve shared goals and mutual success.",
    "aboutPage.teamTitle": "Meet Our",
    "aboutPage.teamHighlight": "Team",
    "aboutPage.teamDesc":
      "A diverse group of talented individuals passionate about creating exceptional digital experiences and driving innovation forward.",
    "aboutPage.joinTeam": "Join Our Team",

    // FAQs Page
    "faqs.badge": "FAQs",
    "faqs.title": "Frequently Asked",
    "faqs.titleHighlight": "Questions",
    "faqs.subtitle":
      "Find answers to common questions about our services, process, and how we can help bring your project to life.",
    "faqs.q1": "What services do you offer?",
    "faqs.a1":
      "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
    "faqs.q2": "How long does a typical project take?",
    "faqs.a2":
      "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timeline estimates during the initial consultation phase.",
    "faqs.q3": "What is your development process?",
    "faqs.a3":
      "We follow an agile development methodology with regular sprints and client feedback sessions. Our process includes discovery, design, development, testing, deployment, and ongoing support. You'll have full visibility throughout the entire project lifecycle.",
    "faqs.q4": "Do you provide ongoing support after launch?",
    "faqs.a4":
      "Yes! We offer various maintenance and support packages to ensure your project continues to run smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements based on your needs.",
    "faqs.q5": "What technologies do you work with?",
    "faqs.a5":
      "We work with modern technologies including React, Next.js, Node.js, TypeScript, Python, AWS, and many more. We carefully select the best technology stack for each project based on your requirements and long-term goals.",
    "faqs.q6": "How much does a project cost?",
    "faqs.a6":
      "Project costs vary based on complexity, features, and timeline. We provide transparent pricing and detailed quotes after understanding your requirements. We offer flexible engagement models including fixed-price, time & materials, and dedicated team options.",
    "faqs.q7": "Can you help with an existing project?",
    "faqs.a7":
      "Absolutely! We can help improve, maintain, or scale your existing applications. Our team can conduct code reviews, implement new features, optimize performance, or completely refactor your codebase if needed.",
    "faqs.q8": "Do you work with startups?",
    "faqs.a8":
      "Yes, we love working with startups! We understand the unique challenges startups face and offer flexible solutions that can scale with your growth. We can help you build MVPs, validate ideas, and iterate quickly based on market feedback.",
    "faqs.ctaTitle": "Still have questions?",
    "faqs.ctaDesc": "Can't find the answer you're looking for? We'd love to hear from you.",
    "faqs.ctaButton": "Get In Touch",
  },
};
