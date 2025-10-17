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
    "hero.badge": "Estudio de Desarrollo Web",
    "hero.title": "Creamos Sitios Web",
    "hero.titleHighlight": "Extraordinarios",
    "hero.subtitle":
      "En Artificial Webs transformamos tu visión en experiencias digitales impactantes que conectan con tu audiencia",
    "hero.getStarted": "Comenzar Proyecto",
    "hero.learnMore": "Ver Portfolio",

    // About Section
    "about.badge": "Acerca de Artificial Webs",
    "about.title": "Tu Estudio de Desarrollo Web de Confianza",
    "about.description1":
      "Somos Artificial Webs, un estudio especializado en el desarrollo de sitios web modernos y soluciones digitales a medida. Combinamos diseño innovador con tecnología de punta para crear presencias web que destacan y generan resultados reales para tu negocio.",
    "about.description2":
      "Desde sitios corporativos hasta tiendas en línea y aplicaciones web complejas, trabajamos contigo en cada paso del proceso para asegurar que tu proyecto supere todas las expectativas.",
    "about.ourStory": "Nuestra Historia",
    "about.meetTeam": "Conoce al Equipo",
    "about.innovation": "Tecnología Moderna",
    "about.innovationDesc":
      "Utilizamos React, Next.js y las últimas tecnologías para sitios web rápidos y escalables",
    "about.clientCentered": "Enfoque Personalizado",
    "about.clientDesc":
      "Cada proyecto es único. Trabajamos estrechamente contigo para entender tu visión y objetivos",
    "about.quality": "Diseño & Código Impecable",
    "about.qualityDesc":
      "Atención meticulosa al detalle tanto en diseño visual como en la calidad del código",
    "about.projects": "Proyectos",
    "about.clients": "Clientes",
    "about.years": "Años",
    "about.satisfaction": "Satisfacción",

    // Services Section
    "services.badge": "Servicios de Artificial Webs",
    "services.title": "Servicios Especializados",
    "services.subtitle":
      "Desarrollamos sitios web y soluciones digitales completas que impulsan tu negocio al siguiente nivel",
    "services.webDev": "Sitios Web Corporativos",
    "services.webDevDesc":
      "Sitios web profesionales, responsivos y optimizados que reflejan la esencia de tu marca con tecnología de punta",
    "services.responsiveDesign": "Diseño Responsivo",
    "services.performance": "Optimización de Rendimiento",
    "services.mobileApps": "E-Commerce & Tiendas",
    "services.mobileAppsDesc":
      "Plataformas de comercio electrónico completas con pasarelas de pago, gestión de inventario y más",
    "services.appStore": "Publicación en Tiendas de Apps",
    "services.uiux": "Aplicaciones Web",
    "services.uiuxDesc":
      "Aplicaciones web personalizadas, dashboards y sistemas que automatizan y optimizan tus procesos",
    "services.userResearch": "Investigación de Usuarios",
    "services.wireframing": "Wireframes y Prototipos",
    "services.designSystems": "Sistemas de Diseño",
    "services.cta": "¿Listo para llevar tu negocio al mundo digital?",
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
    "aboutPage.badge": "Sobre Artificial Webs",
    "aboutPage.title": "Desarrollamos Sitios Web",
    "aboutPage.titleHighlight": "Que Impulsan Negocios",
    "aboutPage.subtitle":
      "Somos un estudio dedicado a crear soluciones web innovadoras que ayudan a empresas y emprendedores a destacar en el mundo digital.",
    "aboutPage.missionTitle": "Nuestra Misión",
    "aboutPage.missionDesc":
      "Hacer que el desarrollo web profesional sea accesible para todos. Creemos que cada negocio merece una presencia web de calidad que refleje su valor y ayude a alcanzar sus objetivos.",
    "aboutPage.visionTitle": "Nuestra Visión",
    "aboutPage.visionDesc":
      "Convertirnos en el estudio de desarrollo web preferido, reconocido por nuestra creatividad, calidad técnica y compromiso con el éxito de nuestros clientes.",
    "aboutPage.valuesTitle": "Nuestros",
    "aboutPage.valuesHighlight": "Valores",
    "aboutPage.innovationTitle": "Innovación",
    "aboutPage.innovationDesc":
      "Adoptamos las últimas tecnologías y tendencias para crear sitios web modernos y funcionales.",
    "aboutPage.excellenceTitle": "Calidad",
    "aboutPage.excellenceDesc":
      "Cada línea de código y cada pixel cuenta. Nos enfocamos en entregar trabajo excepcional.",
    "aboutPage.collaborationTitle": "Colaboración",
    "aboutPage.collaborationDesc":
      "Tu proyecto es nuestro proyecto. Trabajamos codo a codo contigo desde el concepto hasta el lanzamiento.",
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
    "faqs.q1": "¿Qué servicios ofrece Artificial Webs?",
    "faqs.a1":
      "En Artificial Webs nos especializamos en desarrollo de sitios web corporativos, tiendas en línea (e-commerce), aplicaciones web personalizadas, landing pages, y mantenimiento web. Trabajamos principalmente con tecnologías modernas como React, Next.js y Node.js.",
    "faqs.q2": "¿Cuánto tiempo toma desarrollar un sitio web?",
    "faqs.a2":
      "Depende del tipo de proyecto. Una landing page puede estar lista en 1-2 semanas, un sitio corporativo completo toma 3-6 semanas, y una tienda en línea completa puede tomar 6-12 semanas. Te daremos un estimado preciso después de analizar tus requisitos.",
    "faqs.q3": "¿Cuál es su proceso de desarrollo?",
    "faqs.a3":
      "Seguimos una metodología de desarrollo ágil con sprints regulares y sesiones de retroalimentación con el cliente. Nuestro proceso incluye descubrimiento, diseño, desarrollo, pruebas, implementación y soporte continuo. Tendrás total visibilidad durante todo el ciclo de vida del proyecto.",
    "faqs.q4": "¿Ofrecen soporte continuo después del lanzamiento?",
    "faqs.a4":
      "¡Sí! Ofrecemos varios paquetes de mantenimiento y soporte para garantizar que tu proyecto continúe funcionando sin problemas. Esto incluye correcciones de errores, actualizaciones de seguridad, optimización del rendimiento y mejoras de funciones según tus necesidades.",
    "faqs.q5": "¿Qué tecnologías utiliza Artificial Webs?",
    "faqs.a5":
      "Trabajamos con tecnologías modernas y probadas como React, Next.js, TypeScript, Tailwind CSS, Node.js, y bases de datos como PostgreSQL y MongoDB. Elegimos las mejores herramientas para cada proyecto para garantizar velocidad, seguridad y escalabilidad.",
    "faqs.q6": "¿Cuánto cuesta un proyecto?",
    "faqs.a6":
      "Los costos del proyecto varían según la complejidad, las características y el cronograma. Proporcionamos precios transparentes y cotizaciones detalladas después de comprender tus requisitos. Ofrecemos modelos de compromiso flexibles que incluyen precio fijo, tiempo y materiales, y opciones de equipo dedicado.",
    "faqs.q7": "¿Pueden ayudar con un proyecto existente?",
    "faqs.a7":
      "¡Absolutamente! Podemos ayudar a mejorar, mantener o escalar tus aplicaciones existentes. Nuestro equipo puede realizar revisiones de código, implementar nuevas funciones, optimizar el rendimiento o refactorizar completamente tu código base si es necesario.",
    "faqs.q8": "¿Trabajan con startups y pequeños negocios?",
    "faqs.a8":
      "¡Por supuesto! Artificial Webs trabaja con empresas de todos los tamaños. Ya sea que estés lanzando tu primer negocio o buscando renovar tu presencia digital existente, tenemos soluciones adaptadas a diferentes presupuestos y necesidades.",
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
    "hero.badge": "Web Development Studio",
    "hero.title": "We Create",
    "hero.titleHighlight": "Extraordinary Websites",
    "hero.subtitle":
      "At Artificial Webs, we transform your vision into impactful digital experiences that connect with your audience",
    "hero.getStarted": "Start Your Project",
    "hero.learnMore": "View Portfolio",

    // About Section
    "about.badge": "About Artificial Webs",
    "about.title": "Your Trusted Web Development Studio",
    "about.description1":
      "We are Artificial Webs, a studio specialized in developing modern websites and custom digital solutions. We combine innovative design with cutting-edge technology to create web presences that stand out and generate real results for your business.",
    "about.description2":
      "From corporate sites to online stores and complex web applications, we work with you every step of the way to ensure your project exceeds all expectations.",
    "about.ourStory": "Our Story",
    "about.meetTeam": "Meet the Team",
    "about.innovation": "Modern Technology",
    "about.innovationDesc":
      "We use React, Next.js and the latest technologies for fast and scalable websites",
    "about.clientCentered": "Personalized Approach",
    "about.clientDesc":
      "Every project is unique. We work closely with you to understand your vision and goals",
    "about.quality": "Impeccable Design & Code",
    "about.qualityDesc":
      "Meticulous attention to detail in both visual design and code quality",
    "about.projects": "Projects",
    "about.clients": "Clients",
    "about.years": "Years",
    "about.satisfaction": "Satisfaction",

    // Services Section
    "services.badge": "Artificial Webs Services",
    "services.title": "Specialized Services",
    "services.subtitle":
      "We develop websites and complete digital solutions that take your business to the next level",
    "services.webDev": "Corporate Websites",
    "services.webDevDesc":
      "Professional, responsive and optimized websites that reflect the essence of your brand with cutting-edge technology",
    "services.responsiveDesign": "Responsive Design",
    "services.performance": "Performance Optimization",
    "services.mobileApps": "E-Commerce & Stores",
    "services.mobileAppsDesc":
      "Complete e-commerce platforms with payment gateways, inventory management, and more",
    "services.appStore": "App Store Deployment",
    "services.uiux": "Web Applications",
    "services.uiuxDesc":
      "Custom web applications, dashboards and systems that automate and optimize your processes",
    "services.userResearch": "User Research",
    "services.wireframing": "Wireframing & Prototyping",
    "services.designSystems": "Design Systems",
    "services.cta": "Ready to take your business to the digital world?",
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
    "aboutPage.badge": "About Artificial Webs",
    "aboutPage.title": "We Develop Websites",
    "aboutPage.titleHighlight": "That Drive Business",
    "aboutPage.subtitle":
      "We are a studio dedicated to creating innovative web solutions that help businesses and entrepreneurs stand out in the digital world.",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDesc":
      "Make professional web development accessible to everyone. We believe every business deserves a quality web presence that reflects its value and helps achieve its goals.",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDesc":
      "Become the preferred web development studio, recognized for our creativity, technical quality and commitment to our clients' success.",
    "aboutPage.valuesTitle": "Our Core",
    "aboutPage.valuesHighlight": "Values",
    "aboutPage.innovationTitle": "Innovation",
    "aboutPage.innovationDesc":
      "We embrace the latest technologies and trends to create modern and functional websites.",
    "aboutPage.excellenceTitle": "Quality",
    "aboutPage.excellenceDesc":
      "Every line of code and every pixel matters. We focus on delivering exceptional work.",
    "aboutPage.collaborationTitle": "Collaboration",
    "aboutPage.collaborationDesc":
      "Your project is our project. We work side by side with you from concept to launch.",
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
    "faqs.q1": "What services does Artificial Webs offer?",
    "faqs.a1":
      "At Artificial Webs we specialize in corporate website development, online stores (e-commerce), custom web applications, landing pages, and web maintenance. We work primarily with modern technologies like React, Next.js, and Node.js.",
    "faqs.q2": "How long does it take to develop a website?",
    "faqs.a2":
      "It depends on the type of project. A landing page can be ready in 1-2 weeks, a complete corporate site takes 3-6 weeks, and a complete online store can take 6-12 weeks. We'll give you an accurate estimate after analyzing your requirements.",
    "faqs.q3": "What is your development process?",
    "faqs.a3":
      "We follow an agile development methodology with regular sprints and client feedback sessions. Our process includes discovery, design, development, testing, deployment, and ongoing support. You'll have full visibility throughout the entire project lifecycle.",
    "faqs.q4": "Do you provide ongoing support after launch?",
    "faqs.a4":
      "Yes! We offer various maintenance and support packages to ensure your project continues to run smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements based on your needs.",
    "faqs.q5": "What technologies does Artificial Webs use?",
    "faqs.a5":
      "We work with modern and proven technologies like React, Next.js, TypeScript, Tailwind CSS, Node.js, and databases like PostgreSQL and MongoDB. We choose the best tools for each project to ensure speed, security, and scalability.",
    "faqs.q6": "How much does a project cost?",
    "faqs.a6":
      "Project costs vary based on complexity, features, and timeline. We provide transparent pricing and detailed quotes after understanding your requirements. We offer flexible engagement models including fixed-price, time & materials, and dedicated team options.",
    "faqs.q7": "Can you help with an existing project?",
    "faqs.a7":
      "Absolutely! We can help improve, maintain, or scale your existing applications. Our team can conduct code reviews, implement new features, optimize performance, or completely refactor your codebase if needed.",
    "faqs.q8": "Do you work with startups and small businesses?",
    "faqs.a8":
      "Absolutely! Artificial Webs works with businesses of all sizes. Whether you're launching your first business or looking to renovate your existing digital presence, we have solutions tailored to different budgets and needs.",
    "faqs.ctaTitle": "Still have questions?",
    "faqs.ctaDesc": "Can't find the answer you're looking for? We'd love to hear from you.",
    "faqs.ctaButton": "Get In Touch",
  },
};
