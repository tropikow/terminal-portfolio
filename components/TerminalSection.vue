<template>
  <div class="terminal-mac p-0 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative h-96">
    <!-- Barra superior estilo MacBook -->
    <div class="terminal-bar flex items-center px-4 py-2 rounded-t-lg">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="terminal-title ml-4 text-gray-400 text-sm">Terminal - Portfolio</span>
    </div>
    
    <div class="terminal-content px-6 py-4 overflow-y-auto h-full">
      <pre class="font-mono text-sm text-green-300 leading-relaxed">
<span class="text-blue-400">dev@portfolio</span>:<span class="text-purple-400">~</span>$ <span class="text-white">cat {{ props.filename }}</span>

<span class="text-yellow-400">╔══════════════════════════════════════════════════════════════╗</span>
<span class="text-yellow-400">║                        {{ props.title.toUpperCase() }}                              ║</span>
<span class="text-yellow-400">╚══════════════════════════════════════════════════════════════╝</span>

{{ props.content }}

<span class="text-blue-400">dev@portfolio</span>:<span class="text-purple-400">~</span>$ <span class="text-white"><span class="cursor-blink">_</span></span>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  filename?: string
  content?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'SOBRE MÍ',
  filename: 'about-me.txt',
  content: `Soy un developer frontend apasionado con crear experiencias web 
futuristas, listas para escalar.

Cuento con más de 2 años de experiencia diseñando interfaces, 
automatizando procesos y liderando despliegues en la nube para 
startups y equipos modernos en toda LATAM.

Me especializo en simplificar lo complejo, llevar ideas a 
producción exprés y convertir productos en generadores de valor. 
¿Tu próximo proyecto? ¡Vamos a revolucionarlo juntos!`
})
</script>

<style scoped>
.terminal-mac {
  background: #0d1117;
  border: 1px solid #30363d;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

.terminal-bar {
  background: #21262d;
  height: 38px;
  border-bottom: 1px solid #30363d;
  user-select: none;
}

.terminal-title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.dot-red {
  background: #ff5f56;
  border: 1px solid #e0443e;
}

.dot-yellow {
  background: #ffbd2e;
  border: 1px solid #dea123;
}

.dot-green {
  background: #27c93f;
  border: 1px solid #13a10e;
}

.terminal-content {
  background: transparent;
  height: calc(100% - 38px); /* Resta la altura de la barra superior */
  scrollbar-width: thin;
  scrollbar-color: #4a5568 #1a202c;
}

.terminal-content::-webkit-scrollbar {
  width: 8px;
}

.terminal-content::-webkit-scrollbar-track {
  background: #1a202c;
  border-radius: 4px;
}

.terminal-content::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 4px;
}

.terminal-content::-webkit-scrollbar-thumb:hover {
  background: #718096;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
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
