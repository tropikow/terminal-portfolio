<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Header fijo con avatar -->
    <header class="fixed top-0 left-0 right-0 py-4 z-50">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-col items-center space-y-2">
          <img 
            src="/public/avatar.png"
            alt="Avatar" 
            class="w-20 h-20 rounded-full border-4 border-green-400 shadow-lg object-cover"
          />
          <h1 class="text-xl font-mono text-green-400 tracking-wider retro-font">
            &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
          </h1>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <div class="pt-24 pb-8 px-8">
      <div class="max-w-7xl mx-auto">
        <div v-for="(page, pageIndex) in terminalPages" :key="pageIndex" 
             class="min-h-screen flex items-center justify-center"
             :ref="el => terminalRefs[pageIndex] = el as HTMLElement">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
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
    content: "No solo desarrollo, diseño ventajas competitivas. Mi stack mezcla las tecnologías más potentes para que tu proyecto sobresalga, automatice y llegue más lejos.",
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
  }
]

const terminalRefs = ref<HTMLElement[]>([])

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
  
  // Efecto de blur en header al hacer scroll
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
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
</style>
