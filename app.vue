<template>
  <div class="h-screen bg-gray-900 overflow-y-auto snap-y snap-mandatory scroll-smooth">
    <!-- Iconos de redes sociales fijos en la esquina superior derecha -->
    <div class="fixed top-4 right-4 z-50 flex space-x-4">
      <a href="https://www.linkedin.com/in/jovannyruizlovera/" target="_blank" class="text-green-400 hover:text-green-300 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href="https://x.com/TropikoW" target="_blank" class="text-green-400 hover:text-green-300 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="mailto:jovannydevops@gmail.com" class="text-green-400 hover:text-green-300 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.27l10.346-8.449h.018c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      </a>
      <a href="https://github.com/tropikow" target="_blank" class="text-green-400 hover:text-green-300 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>

    <!-- Contenido principal -->
    <div class="lg:pt-40 pt-0 px-8">
      <div class="max-w-8xl mx-auto">
        <!-- Sección de header para mobile -->
        <div class="lg:hidden min-h-screen flex flex-col items-center justify-center snap-start">
          <div class="flex flex-col items-center space-y-4">
            <img 
              src="/avatar.png"
              alt="Avatar" 
              class="w-24 h-24 rounded-full border-4 border-green-400 shadow-lg object-cover"
            />
            <h1 class="text-2xl font-mono text-green-400 tracking-wider retro-font">
              &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
            </h1>
            <div class="text-center max-w-sm">
              <h2 class="text-lg font-mono text-green-400 tracking-wide retro-font mb-2">
                Lleva tu negocio al futuro
              </h2>
              <p class="text-sm font-mono text-green-300 tracking-wide retro-font">
                Experto en desarrollo frontend ultra moderno con expertise en backend. Transformo tus ideas en productos digitales listos para liderar el presente... y dominar el futuro.
              </p>
            </div>
            <div class="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/jovannyruizlovera/" target="_blank" class="text-green-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/TropikoW" target="_blank" class="text-green-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:jovannydevops@gmail.com" class="text-green-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.27l10.346-8.449h.018c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
              <a href="https://github.com/tropikow" target="_blank" class="text-green-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Terminales - 1 terminal por vista en desktop y mobile -->
        <div v-for="(page, pageIndex) in terminalPages" :key="pageIndex" 
             class="min-h-screen flex items-center justify-center snap-start"
             :ref="el => terminalRefs[pageIndex] = el as HTMLElement">
          <div class="w-full flex justify-center items-center px-4">
            <div v-for="(section, sectionIndex) in page" :key="sectionIndex" class="w-full max-w-4xl">
              <TerminalSection 
                :title="section.title"
                :filename="section.filename" 
                :content="section.content" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import useScrollAnimations from '~/composables/useScrollAnimations'

const sections = [
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

const terminalRefs = ref<HTMLElement[]>([])

// Efecto de escritura para el párrafo
const fullText = "Experto en desarrollo frontend ultra moderno con expertise en backend. Transformo tus ideas en productos digitales listos para liderar el presente... y dominar el futuro."
const typedText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const isVisible = ref(true)

// Crear páginas de 1 terminal cada una
const terminalPages = computed(() => {
  const pages = []
  for (let i = 0; i < sections.length; i++) {
    pages.push([sections[i]])
  }
  return pages
})

onMounted(() => {
  useScrollAnimations(terminalRefs.value.filter((el): el is HTMLElement => el !== null))
  
  // Efecto de escritura
  const typeText = () => {
    if (currentIndex.value < fullText.length && !isDeleting.value) {
      typedText.value += fullText[currentIndex.value]
      currentIndex.value++
      setTimeout(typeText, 20) // Velocidad de escritura más rápida
    }
  }

  // Efecto de borrado
  const deleteText = () => {
    if (typedText.value.length > 0 && isDeleting.value) {
      typedText.value = typedText.value.slice(0, -1)
      currentIndex.value--
      setTimeout(deleteText, 10) // Velocidad de borrado mucho más rápida
    } else if (typedText.value.length === 0 && isDeleting.value) {
      isDeleting.value = false
      isVisible.value = false
    }
  }
  
  // Iniciar efecto de escritura después de un pequeño delay
  setTimeout(typeText, 1000)
  
  // Efecto de blur en header al hacer scroll
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
    
    // Solo activar borrado en desktop (pantallas grandes)
    if (window.innerWidth > 768) {
      // Activar borrado cuando el scroll supera cierto punto
      if (window.scrollY > 80 && !isDeleting.value && isVisible.value) {
        isDeleting.value = true
        deleteText()
      }
      
      // Regenerar texto cuando el usuario vuelve arriba
      if (window.scrollY < 30 && !isVisible.value && !isDeleting.value) {
        isVisible.value = true
        typedText.value = ''
        currentIndex.value = 0
        setTimeout(typeText, 200) // Delay más corto antes de empezar a escribir
      }
    }
  })
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.retro-font {
  font-family: 'VT323', monospace;
  font-size: 1.75rem;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
}

.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Animaciones de entrada para las terminales */
.terminal-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.terminal-enter-active {
  opacity: 1;
  transform: translateY(0);
}

/* Estilos para el scroll suave */
html {
  scroll-behavior: smooth;
}

/* Efecto de blur en header al hacer scroll */
header {
  transition: backdrop-filter 0.3s ease;
}

header.scrolled {
  backdrop-filter: blur(10px);
  background: rgba(17, 24, 39, 0.8);
}

/* Mejoras para scroll snap */
.snap-y {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scroll-padding: 0;
  height: 100vh;
  overflow-y: auto;
}

.snap-start {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Scroll más suave y controlado */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 0; /* Sin compensación para mobile */
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a202c;
}

::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #718096;
}

/* Efecto de escritura */
.typing-text {
  min-height: 1.5rem;
  border-right: 2px solid #10b981;
  animation: blink-cursor 1s infinite;
}

@keyframes blink-cursor {
  0%, 50% {
    border-color: transparent;
  }
  51%, 100% {
    border-color: #10b981;
  }
}

/* Transición suave para el contenedor de texto */
.text-center {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.text-center.v-enter-active,
.text-center.v-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.text-center.v-enter-from,
.text-center.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Estilos para los iconos de redes sociales */
.social-icons {
  flex-shrink: 0;
}

/* Responsive para los iconos */
@media (max-width: 768px) {
  .social-icons {
    position: static;
    margin-top: 1rem;
  }
  
  .social-icons a {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  /* En mobile, el texto siempre visible */
  .typing-text {
    animation: none;
    border-right: none;
  }
  
  /* Header centrado en mobile */
  header {
    text-align: center;
  }
}

/* Scroll snap mejorado para todas las pantallas */
.snap-y {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: auto;
}

.snap-start {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Asegurar que el contenedor principal tenga altura completa */
.min-h-screen {
  height: 100vh;
  min-height: 100vh;
}

/* Desktop específico - asegurar que funcione en pantallas grandes */
@media (min-width: 1024px) {
  .snap-y {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
  
  .snap-start {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: 100vh;
    min-height: 100vh;
  }
  
  /* Forzar altura completa en desktop */
  .min-h-screen {
    height: 100vh;
    min-height: 100vh;
  }
}
</style>
