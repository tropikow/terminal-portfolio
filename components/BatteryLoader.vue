<template>
  <div v-if="isLoading" class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div class="text-center">
      <!-- Título del loader -->
      <h1 class="text-2xl lg:text-3xl font-mono text-green-400 tracking-wider retro-font mb-8">
        &lt;&gt; Jovanny Rui<span class="cursor-blink">z</span> &lt;/&gt;
      </h1>
      
      <!-- Contenedor de la batería -->
      <div class="bg-gray-800 border-2 border-green-400 rounded-lg p-4 mb-6 w-64 lg:w-80">
        <!-- Encabezado de la batería -->
        <div class="flex justify-between items-center mb-3">
          <span class="text-green-400 text-sm font-mono">SYSTEM LOADING</span>
          <span class="text-green-400 text-sm font-mono">{{ progress }}%</span>
        </div>
        
        <!-- Barras de la batería -->
        <div class="flex space-x-1 mb-2">
          <div 
            v-for="(bar, index) in 20" 
            :key="index"
            class="flex-1 bg-gray-700 rounded-sm transition-all duration-300"
            :class="{
              'bg-green-400': index < activeBars,
              'bg-green-300': index === activeBars - 1 && isAnimating
            }"
            :style="{ 
              height: `${Math.random() * 8 + 12}px`,
              animationDelay: `${index * 50}ms`
            }"
          ></div>
        </div>
        
        <!-- Texto de estado -->
        <div class="text-green-400 text-xs font-mono text-center">
          {{ currentStatus }}
        </div>
      </div>
      
      <!-- Mensaje de carga -->
      <div class="text-green-300 text-sm font-mono">
        <span class="cursor-blink">_</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface Props {
  minLoadTime?: number // Tiempo mínimo de carga en ms
}

const props = withDefaults(defineProps<Props>(), {
  minLoadTime: 3000 // 3 segundos por defecto
})

const emit = defineEmits<{
  'loading-complete': []
}>()

// Estado del loader
const isLoading = ref(true)
const progress = ref(0)
const activeBars = ref(0)
const isAnimating = ref(false)
const currentStatus = ref('Initializing system...')

// Estados de carga
const loadingStates = [
  'Initializing system...',
  'Loading user preferences...',
  'Detecting language...',
  'Loading terminal components...',
  'Preparing interface...',
  'System ready!'
]

const currentStatusIndex = ref(0)

// Función para simular la carga
const simulateLoading = () => {
  const startTime = Date.now()
  const targetTime = props.minLoadTime
  
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    const newProgress = Math.min((elapsed / targetTime) * 100, 100)
    
    progress.value = Math.floor(newProgress)
    activeBars.value = Math.floor((newProgress / 100) * 20)
    
    // Actualizar estado de texto
    const statusIndex = Math.floor((newProgress / 100) * (loadingStates.length - 1))
    if (statusIndex !== currentStatusIndex.value) {
      currentStatusIndex.value = statusIndex
      currentStatus.value = loadingStates[statusIndex]
    }
    
    // Animación de las barras
    if (activeBars.value > 0) {
      isAnimating.value = true
      setTimeout(() => {
        isAnimating.value = false
      }, 200)
    }
    
    if (newProgress < 100) {
      requestAnimationFrame(updateProgress)
    } else {
      // Carga completada
      setTimeout(() => {
        isLoading.value = false
        emit('loading-complete')
      }, 500) // Pequeña pausa antes de ocultar
    }
  }
  
  requestAnimationFrame(updateProgress)
}

// Iniciar carga cuando el componente se monta
onMounted(() => {
  simulateLoading()
})
</script>

<style scoped>
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

/* Animación de las barras */
.bg-green-300 {
  animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.7;
    transform: scaleY(1.1);
  }
}
</style> 