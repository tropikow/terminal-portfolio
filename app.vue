<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Header con avatar -->
    <header class="py-8">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-col items-center space-y-4">
          <img 
            src="/public/avatar.png"
            alt="Avatar" 
            class="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg object-cover"
          />
          <h1 class="text-2xl font-mono text-green-400 tracking-wider retro-font">
            &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
          </h1>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(section, index) in sections" :key="index" 
               :class="index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'">
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
</template>

<script setup lang="ts">
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
</style>
