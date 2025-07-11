import { ref, computed } from 'vue'

// Tipos de idiomas soportados
export type Language = 'es' | 'en'

// Contenido en diferentes idiomas
const content = {
  es: {
    header: {
      title: "Lleva tu negocio al futuro",
      subtitle: "Experto en desarrollo frontend ultra moderno con expertise en backend. Transformo tus ideas en productos digitales listos para liderar el presente... y dominar el futuro"
    },
    sections: [
      {
        title: "SOBRE MÍ",
        content: "Soy un developer frontend apasionado con crear experiencias web futuristas, listas para escalar.Cuento con más de 2 años de experiencia diseñando interfaces, automatizando procesos y liderando despliegues en la nube para startups y equipos modernos en toda LATAM.Me especializo en simplificar lo complejo, llevar ideas a producción exprés y convertir productos en generadores de valor. ¿Tu próximo proyecto? ¡Vamos a revolucionarlo juntos!",
        filename: 'about-me.txt'
      },
      {
        title: "STACK 🚀",
        content: `Frameworks Modernos
Nuevas tendencias en web y mobile, performance y escalabilidad.

Next.js
Nuxt.js
Astro
React Native

Integraciones Inteligentes
APIs, backends, bots y conectores para soluciones 100% automatizadas.

REST
GraphQL
Firebase
n8n
Zapier

Infraestructura & Cloud
Montaje, optimización y despliegue en la nube.

Vercel
GCP
Github Actions

Bases de Datos Robustas
Modelado y gestión avanzada.

MySQL
PostgreSQL
Firestore

UI/UX & Automatización
Productos hermosos y funcionales, con branding y microinteracciones.

TailwindCSS
Figma
Google Apps Script`,
        filename: 'stack.txt'
      },
      {
        title: "Experiencia",
        content: `GetLavado / Laundryheap Perú
Desarrollador B2B Principal
2023 - Actualidad
Automatización y mantenimiento de operaciones para empresas aliadas. 
Integraciones con OCR, bots de WhatsApp, y manejo de servicios en tiempo real.

JAPI
Desarrollador Fullstack
2023
Desarrollo de soluciones logísticas B2B, integraciones con Slack, 
automatizaciones con Zapier, y analítica avanzada.

Proyectos varios
Freelancer
2022 - 2023
Portafolios, hackathons, SaaS, whasapp bots, refactorización de 
plataformas, dashboards, automatizaciones de backend.`,
        filename: 'experience.txt'
      },
      {
        title: "tropikode.com",
        content: `Todos los derechos reservados

Para contactos:

LinkedIn: <a href="https://www.linkedin.com/in/jovannyruizlovera/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://www.linkedin.com/in/jovannyruizlovera/</a>
X (Twitter): <a href="https://x.com/TropikoW" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://x.com/TropikoW</a>
Gmail: <a href="mailto:jovannydevops@gmail.com" class="text-blue-400 hover:text-blue-300 underline">jovannydevops@gmail.com</a>
Github: <a href="https://github.com/tropikow" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://github.com/tropikow</a>

¡Conectemos y llevemos tu proyecto al siguiente nivel!`,
        filename: 'tropikode.com.txt'
      }
    ]
  },
  en: {
    header: {
      title: "Take your business to the future",
      subtitle: "Expert in ultra-modern frontend development with backend expertise. I transform your ideas into digital products ready to lead the present... and dominate the future"
    },
    sections: [
      {
        title: "ABOUT ME",
        content: "I'm a passionate frontend developer focused on creating futuristic web experiences, ready to scale. I have over 2 years of experience designing interfaces, automating processes, and leading cloud deployments for startups and modern teams across LATAM. I specialize in simplifying the complex, taking ideas to production express, and converting products into value generators. Your next project? Let's revolutionize it together!",
        filename: 'about-me.txt'
      },
      {
        title: "STACK 🚀",
        content: `Modern Frameworks
New trends in web and mobile, performance and scalability.

Next.js
Nuxt.js
Astro
React Native

Smart Integrations
APIs, backends, bots and connectors for 100% automated solutions.

REST
GraphQL
Firebase
n8n
Zapier

Infrastructure & Cloud
Setup, optimization and cloud deployment.

Vercel
GCP
Github Actions

Robust Databases
Advanced modeling and management.

MySQL
PostgreSQL
Firestore

UI/UX & Automation
Beautiful and functional products, with branding and micro-interactions.

TailwindCSS
Figma
Google Apps Script`,
        filename: 'stack.txt'
      },
      {
        title: "Experience",
        content: `GetLavado / Laundryheap Perú
Principal B2B Developer
2023 - Present
Automation and maintenance of operations for partner companies. 
OCR integrations, WhatsApp bots, and real-time service management.

JAPI
Fullstack Developer
2023
Development of B2B logistics solutions, Slack integrations, 
Zapier automations, and advanced analytics.

Various Projects
Freelancer
2022 - 2023
Portfolios, hackathons, SaaS, WhatsApp bots, platform refactoring, 
dashboards, backend automations.`,
        filename: 'experience.txt'
      },
      {
        title: "tropikode.com",
        content: `All rights reserved

For contact:

LinkedIn: <a href="https://www.linkedin.com/in/jovannyruizlovera/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://www.linkedin.com/in/jovannyruizlovera/</a>
X (Twitter): <a href="https://x.com/TropikoW" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://x.com/TropikoW</a>
Gmail: <a href="mailto:jovannydevops@gmail.com" class="text-blue-400 hover:text-blue-300 underline">jovannydevops@gmail.com</a>
Github: <a href="https://github.com/tropikow" target="_blank" class="text-blue-400 hover:text-blue-300 underline">https://github.com/tropikow</a>

Let's connect and take your project to the next level!`,
        filename: 'tropikode.com.txt'
      }
    ]
  }
}

export function useI18n() {
  // Estado del idioma actual
  const currentLanguage = ref<Language>('es')

  // Detectar idioma del navegador al inicializar
  const detectLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('en')) {
        return 'en'
      }
    }
    return 'es' // Por defecto español
  }

  // Inicializar con el idioma detectado
  const initLanguage = () => {
    currentLanguage.value = detectLanguage()
  }

  // Cambiar idioma
  const changeLanguage = (lang: Language) => {
    currentLanguage.value = lang
    // Guardar preferencia en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
  }

  // Cargar idioma guardado
  const loadSavedLanguage = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferred-language') as Language
      if (saved && (saved === 'es' || saved === 'en')) {
        currentLanguage.value = saved
      }
    }
  }

  // Contenido computado basado en el idioma actual
  const t = computed(() => content[currentLanguage.value])

  return {
    currentLanguage,
    t,
    initLanguage,
    changeLanguage,
    loadSavedLanguage
  }
} 