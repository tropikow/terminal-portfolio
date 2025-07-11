<template>
  <div class="h-screen bg-gray-900 overflow-y-auto snap-y snap-mandatory scroll-smooth">
    <!-- Selector de idioma fijo en la esquina superior izquierda -->
    <div class="fixed top-4 left-4 z-50">
      <div class="flex space-x-2 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg p-2 border border-gray-700">
        <button 
          @click="changeLanguage('es')" 
          :class="[
            'px-3 py-1 rounded text-sm font-mono transition-colors',
            currentLanguage === 'es' 
              ? 'bg-green-500 text-gray-900' 
              : 'text-green-400 hover:text-green-300 hover:bg-gray-700'
          ]"
        >
          ES
        </button>
        <button 
          @click="changeLanguage('en')" 
          :class="[
            'px-3 py-1 rounded text-sm font-mono transition-colors',
            currentLanguage === 'en' 
              ? 'bg-green-500 text-gray-900' 
              : 'text-green-400 hover:text-green-300 hover:bg-gray-700'
          ]"
        >
          EN
        </button>
      </div>
    </div>

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
        <!-- Sección de header para todas las pantallas -->
        <div class="min-h-screen flex flex-col items-center justify-center snap-start">
          <div class="flex flex-col items-center space-y-4">
              <img 
                src="/public/avatar.png"
                alt="Avatar" 
                class="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-green-400 shadow-lg object-cover"
              />
            <h1 class="text-2xl lg:text-3xl font-mono text-green-400 tracking-wider retro-font">
              &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
            </h1>
            <div class="text-center max-w-sm lg:max-w-2xl px-4">
              <h2 class="text-lg lg:text-xl font-mono text-green-400 tracking-wide retro-font mb-2">
                {{ t.header.title }}
              </h2>
              <p class="text-sm lg:text-base font-mono text-green-300 tracking-wide retro-font">
                {{ t.header.subtitle }}<span class="cursor-blink">_</span>
              </p>
            </div>
          </div>
        </div>
        
        <!-- Terminales - 1 terminal por vista -->
        <div v-for="(page, pageIndex) in terminalPages" :key="pageIndex" 
             class="min-h-screen flex items-center justify-center snap-start"
             :ref="el => terminalRefs[pageIndex] = el as HTMLElement">
          <div class="w-full flex justify-center items-center px-4">
            <div v-for="(section, sectionIndex) in page" :key="sectionIndex" class="w-full max-w-4xl lg:max-w-5xl">
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
import { useI18n } from '~/composables/useI18n'

// Inicializar internacionalización
const { currentLanguage, t, initLanguage, changeLanguage, loadSavedLanguage } = useI18n()

const terminalRefs = ref<HTMLElement[]>([])

// Crear páginas de 1 terminal cada una usando el contenido traducido
const terminalPages = computed(() => {
  const pages = []
  for (let i = 0; i < t.value.sections.length; i++) {
    pages.push([t.value.sections[i]])
  }
  return pages
})

onMounted(() => {
  // Inicializar idioma
  loadSavedLanguage()
  initLanguage()
  
  useScrollAnimations(terminalRefs.value.filter((el): el is HTMLElement => el !== null))
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
