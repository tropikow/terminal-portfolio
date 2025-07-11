<template>
  <div class="min-h-screen bg-gray-900 overflow-y-auto snap-y snap-mandatory scroll-smooth">
    <!-- Header fijo con avatar -->
    <header class="fixed top-0 left-0 right-0 py-4 z-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-col items-center space-y-2 min-h-[120px]">
          <img 
            src="/public/avatar.png"
            alt="Avatar" 
            class="w-20 h-20 rounded-full border-4 border-green-400 shadow-lg object-cover"
          />
          <h1 class="text-xl font-mono text-green-400 tracking-wider retro-font">
            &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
          </h1>
          <div v-if="isVisible" class="text-center max-w-2xl" :style="{ paddingBottom: `${Math.max(1, (typedText.length / 15))}rem` }">
            <h2 class="text-lg font-mono text-green-400 tracking-wide retro-font mb-2">
              Lleva tu negocio al futuro
            </h2>
            <p class="text-sm font-mono text-green-300 tracking-wide retro-font typing-text">
              {{ typedText }}
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <div class="pt-40 pb-8 px-8">
      <div class="max-w-8xl mx-auto">
        <div v-for="(page, pageIndex) in terminalPages" :key="pageIndex" 
             class="min-h-screen flex items-center justify-center snap-center"
             :ref="el => terminalRefs[pageIndex] = el as HTMLElement">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
            <div v-for="(section, sectionIndex) in page" :key="sectionIndex">
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

// Crear páginas de 2 terminales cada una
const terminalPages = computed(() => {
  const pages = []
  for (let i = 0; i < sections.length; i += 2) {
    pages.push(sections.slice(i, i + 2))
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
}

.snap-center {
  scroll-snap-align: center;
}

/* Scroll más suave y controlado */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px; /* Compensa el header fijo */
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
</style>
