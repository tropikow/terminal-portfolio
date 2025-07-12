<template>
  <div class="terminal-mac p-0 rounded-lg shadow-lg w-full mx-4 relative h-[500px]">
    <!-- Barra superior estilo MacBook -->
    <div class="terminal-bar flex items-center px-4 py-2 rounded-t-lg">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="terminal-title ml-4 text-gray-400 text-sm">Terminal - Portfolio</span>
    </div>
    
    <div class="terminal-content px-6 py-4 overflow-y-auto h-full" ref="terminalContent">
      <div class="font-mono text-base text-green-300 leading-relaxed">
        <!-- Contenido inicial -->
        <div class="mb-4">
          <span class="text-blue-400">dev@portfolio</span>:<span class="text-purple-400">~</span>$ <span class="text-white">cat {{ props.filename }}</span>
        </div>

        <div class="mb-4">
          <span class="text-yellow-400">╔════════════════════════════════════════════════════════╗</span>
          <span class="text-yellow-400">║                        {{ props.title.toUpperCase() }}                        ║</span>
          <span class="text-yellow-400">╚════════════════════════════════════════════════════════╝</span>
        </div>

        <div class="mb-4" v-html="props.content"></div>

        <!-- Historial de comandos -->
        <div v-for="(entry, index) in commandHistory" :key="index" class="mb-2">
          <div class="flex items-start">
            <span class="text-blue-400">dev@portfolio</span>:<span class="text-purple-400">~</span>$ <span class="text-white">{{ entry.command }}</span>
          </div>
          <div v-if="entry.response" class="mt-1 ml-0 text-green-300 whitespace-pre-wrap">{{ entry.response }}</div>
        </div>

        <!-- Línea de comando actual -->
        <div class="command-line flex items-baseline" @click="focusInput">
          <span class="text-blue-400">dev@portfolio</span>:<span class="text-purple-400">~</span>$ 
          <span class="text-white command-input-wrapper">
            <div class="input-display">
              <span class="input-text">{{ currentCommand }}</span>
              <span v-if="isInputFocused" class="cursor-blink">_</span>
            </div>
            <input
              ref="commandInput"
              v-model="currentCommand"
              @keydown.enter="executeCommand"
              @keydown.tab.prevent="handleTabCompletion"
              @keydown.up.prevent="navigateHistory(-1)"
              @keydown.down.prevent="navigateHistory(1)"
              class="command-input bg-transparent outline-none border-none text-white font-mono text-base leading-none"
              :placeholder="isInputFocused ? '' : 'Click aquí para escribir comandos...'"
              :disabled="!isInputFocused"
              spellcheck="false"
              autocomplete="off"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from 'vue'

interface Props {
  title?: string
  filename?: string
  content?: string
}

interface Emits {
  (e: 'theme-change', theme: 'default' | 'light'): void
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

const emit = defineEmits<Emits>()

// Referencias
const commandInput = ref<HTMLInputElement>()
const terminalContent = ref<HTMLElement>()

// Estado
const currentCommand = ref('')
const commandHistory = ref<Array<{command: string, response?: string}>>([])
const historyIndex = ref(-1)
const isInputFocused = ref(false)
const commandHistoryArray = ref<string[]>([])

// Comandos disponibles
const availableCommands = {
  help: {
    description: 'Muestra comandos disponibles',
    response: `Comandos disponibles:
• help - Muestra esta ayuda
• clear - Limpia la terminal
• about - Información sobre mí
• skills - Mis habilidades técnicas
• contact - Información de contacto
• projects - Proyectos destacados
• experience - Experiencia laboral
• education - Formación académica
• ls - Lista archivos del portfolio
• cat [archivo] - Muestra contenido de archivo
• whoami - Información del usuario actual
• date - Fecha y hora actual
• pwd - Directorio actual
• theme_light - Cambiar a tema claro
• theme_default - Cambiar a tema oscuro`
  },
  clear: {
    description: 'Limpia la terminal',
    response: null
  },
  about: {
    description: 'Información sobre mí',
    response: `Soy Jovanny Ruiz, un desarrollador frontend apasionado por crear 
experiencias web futuristas y escalables. Con más de 2 años de 
experiencia en el desarrollo web moderno, me especializo en 
simplificar lo complejo y llevar ideas a producción rápidamente.

Mi enfoque se centra en crear soluciones que no solo funcionen 
perfectamente, sino que también proporcionen una experiencia de 
usuario excepcional.`
  },
  skills: {
    description: 'Mis habilidades técnicas',
    response: `🛠️ HABILIDADES TÉCNICAS:

Frontend:
• Vue.js 3 / Nuxt 3
• React / Next.js
• TypeScript
• Tailwind CSS
• GSAP Animations
• PWA Development

Backend & DevOps:
• Node.js / Express
• Python / FastAPI
• Docker / Kubernetes
• AWS / Google Cloud
• CI/CD Pipelines
• Database Design

Herramientas:
• Git / GitHub
• VS Code / WebStorm
• Figma / Adobe XD
• Postman / Insomnia
• Jira / Notion`
  },
  contact: {
    description: 'Información de contacto',
    response: `📧 CONTACTO:

Email: jovannydevops@gmail.com
LinkedIn: linkedin.com/in/jovannyruizlovera/
Twitter: @TropikoW
GitHub: github.com/tropikow

¡Estoy siempre abierto a nuevas oportunidades 
y colaboraciones interesantes!`
  },
  projects: {
    description: 'Proyectos destacados',
    response: `🚀 PROYECTOS DESTACADOS:

1. E-commerce Platform (Vue.js + Node.js)
   - Plataforma completa con carrito, pagos y admin
   - 10k+ usuarios activos

2. Real-time Dashboard (React + WebSocket)
   - Dashboard en tiempo real para monitoreo
   - Integración con múltiples APIs

3. Mobile PWA (Vue.js + PWA)
   - Aplicación móvil progresiva
   - Offline-first con cache inteligente

4. Portfolio Terminal (Vue.js + GSAP)
   - Portfolio interactivo estilo terminal
   - Animaciones fluidas y UX moderna`
  },
  experience: {
    description: 'Experiencia laboral',
    response: `💼 EXPERIENCIA LABORAL:

2023 - Presente | Senior Frontend Developer
• Desarrollo de aplicaciones web complejas
• Liderazgo técnico en proyectos críticos
• Mentoring de desarrolladores junior

2022 - 2023 | Frontend Developer
• Desarrollo de interfaces de usuario
• Optimización de rendimiento
• Integración con APIs REST/GraphQL

2021 - 2022 | Junior Developer
• Desarrollo de componentes reutilizables
• Testing y debugging
• Soporte técnico a usuarios`
  },
  education: {
    description: 'Formación académica',
    response: `🎓 FORMACIÓN ACADÉMICA:

Ingeniería en Sistemas Computacionales
Universidad Tecnológica de México
2020 - 2024

Certificaciones:
• AWS Certified Developer
• Google Cloud Professional
• Vue.js Developer Certification
• React Developer Certification`
  },
  ls: {
    description: 'Lista archivos del portfolio',
    response: `📁 CONTENIDO DEL PORTFOLIO:

about-me.txt          - Información personal
skills.md             - Habilidades técnicas
projects/             - Directorio de proyectos
  ├── ecommerce/      - Plataforma e-commerce
  ├── dashboard/      - Dashboard en tiempo real
  ├── pwa/           - Aplicación móvil
  └── portfolio/     - Este portfolio
contact.txt           - Información de contacto
experience.md         - Experiencia laboral
education.txt         - Formación académica`
  },
  whoami: {
    description: 'Información del usuario actual',
    response: `👤 USUARIO ACTUAL:

Nombre: Jovanny Ruiz Lovera
Rol: Senior Frontend Developer
Ubicación: México
Intereses: Desarrollo Web, UX/UI, Cloud Computing
Estado: Disponible para proyectos`
  },
  date: {
    description: 'Fecha y hora actual',
    response: () => new Date().toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  },
  pwd: {
    description: 'Directorio actual',
    response: '/home/dev/portfolio'
  },
  theme_light: {
    description: 'Cambiar a tema claro',
    response: () => {
      emit('theme-change', 'light')
      return '🎨 Tema cambiado a modo claro. ¡Disfruta de la nueva experiencia!'
    }
  },
  theme_default: {
    description: 'Cambiar a tema oscuro',
    response: () => {
      emit('theme-change', 'default')
      return '🌙 Tema cambiado a modo oscuro. ¡Volviste al estilo original!'
    }
  }
}

// Función para enfocar el input
const focusInput = () => {
  isInputFocused.value = true
  nextTick(() => {
    commandInput.value?.focus()
  })
}

// Función para ejecutar comandos
const executeCommand = () => {
  const command = currentCommand.value.trim()
  if (!command) return

  // Agregar comando al historial
  commandHistoryArray.value.push(command)
  historyIndex.value = commandHistoryArray.value.length

  let response: string | null = null

  // Buscar comando
  const cmd = availableCommands[command.toLowerCase() as keyof typeof availableCommands]
  
  if (cmd) {
    response = typeof cmd.response === 'function' ? cmd.response() : cmd.response
  } else if (command.startsWith('cat ')) {
    const filename = command.substring(4).trim()
    response = handleCatCommand(filename)
  } else {
    response = `Comando no encontrado: ${command}
Escribe 'help' para ver comandos disponibles.`
  }

  // Agregar entrada al historial
  commandHistory.value.push({
    command,
    response: response || undefined
  })

  // Limpiar comando actual
  currentCommand.value = ''
  
  // Scroll al final
  nextTick(() => {
    if (terminalContent.value) {
      terminalContent.value.scrollTop = terminalContent.value.scrollHeight
    }
  })
}

// Función para manejar comando cat
const handleCatCommand = (filename: string) => {
  const files: Record<string, string> = {
    'about-me.txt': props.content,
    'skills.md': availableCommands.skills.response || '',
    'contact.txt': availableCommands.contact.response || '',
    'experience.md': availableCommands.experience.response || '',
    'education.txt': availableCommands.education.response || '',
    'projects/portfolio/README.md': `# Portfolio Terminal

Este es mi portfolio personal desarrollado con Vue.js 3 y Nuxt 3.
Características:
• Interfaz estilo terminal interactiva
• Animaciones con GSAP
• Diseño responsive
• Soporte multiidioma
• Carga progresiva

¡Bienvenido a mi mundo de desarrollo!`
  }

  return files[filename] || `cat: ${filename}: No existe el archivo o directorio`
}

// Navegación del historial
const navigateHistory = (direction: number) => {
  const newIndex = historyIndex.value + direction
  if (newIndex >= -1 && newIndex <= commandHistoryArray.value.length) {
    historyIndex.value = newIndex
    if (newIndex === -1) {
      currentCommand.value = ''
    } else {
      currentCommand.value = commandHistoryArray.value[newIndex]
    }
  }
}

// Autocompletado con Tab
const handleTabCompletion = () => {
  const partial = currentCommand.value.toLowerCase()
  const matches = Object.keys(availableCommands).filter(cmd => 
    cmd.startsWith(partial) && cmd !== partial
  )
  
  if (matches.length === 1) {
    currentCommand.value = matches[0]
  } else if (matches.length > 1) {
    const response = `Comandos que coinciden con '${partial}':\n${matches.join(' ')}`
    commandHistory.value.push({
      command: currentCommand.value,
      response
    })
    currentCommand.value = ''
  }
}

// Manejar clic fuera del input para desenfocar
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.terminal-content')) {
    isInputFocused.value = false
  }
}

// Observar cambios en el historial para scroll automático
watch(commandHistory, () => {
  nextTick(() => {
    if (terminalContent.value) {
      terminalContent.value.scrollTop = terminalContent.value.scrollHeight
    }
  })
}, { deep: true })

onMounted(() => {
  // Agregar listener para clic fuera
  document.addEventListener('click', handleClickOutside)
  
  // Enfocar automáticamente después de un delay
  setTimeout(() => {
    focusInput()
  }, 1000)
})
</script>

<style scoped>
.terminal-mac {
  background: var(--terminal-bg, #0d1117);
  border: 1px solid var(--terminal-border, #30363d);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out, background-color 0.3s ease, border-color 0.3s ease;
}

.terminal-bar {
  background: var(--terminal-border, #21262d);
  height: 38px;
  border-bottom: 1px solid var(--terminal-border, #30363d);
  user-select: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;
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
  height: calc(100% - 38px);
  scrollbar-width: thin;
  scrollbar-color: #4a5568 #1a202c;
  cursor: text;
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

/* Estilos para la línea de comando */
.command-line {
  line-height: 1.5;
  font-size: 1rem;
}

.command-input-wrapper {
  display: inline-flex;
  align-items: baseline;
  margin-left: 0.25rem;
  position: relative;
}

.input-display {
  display: inline-flex;
  align-items: baseline;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.input-text {
  line-height: inherit;
  font-size: inherit;
  white-space: pre;
}

/* Estilos para el input */
.command-input {
  caret-color: transparent;
  line-height: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  min-width: 1rem;
  flex: 1;
  color: transparent;
  position: relative;
  z-index: 2;
}

.command-input:focus {
  outline: none;
}

/* Placeholder invisible cuando está enfocado */
.command-input:focus::placeholder {
  color: transparent;
}

/* Estilos para el cursor parpadeante */
.cursor-blink {
  color: #10b981;
  animation: blink 1s infinite;
  margin-left: 0;
  line-height: inherit;
  font-size: inherit;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .command-line {
    font-size: 0.875rem;
  }
  
  .command-input-wrapper {
    margin-left: 0.125rem;
  }
}
</style>
