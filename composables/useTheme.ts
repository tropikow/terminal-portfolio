import { ref, watch } from 'vue'

export const useTheme = () => {
  // Tipos de tema disponibles
  type Theme = 'default' | 'light'
  
  // Estado del tema actual
  const currentTheme = ref<Theme>('default')
  
  // Definición de temas
  const themes = {
    default: {
      name: 'Tema Oscuro',
      description: 'Tema oscuro por defecto',
      background: 'bg-gray-900',
      text: 'text-green-400',
      terminalBg: '#0d1117',
      terminalBorder: '#30363d',
      inputText: '#ffffff',
      terminalText: '#10b981'
    },
    light: {
      name: 'Tema Claro',
      description: 'Tema claro para mejor legibilidad',
      background: 'bg-gray-100',
      text: 'text-gray-800',
      terminalBg: '#ffffff',
      terminalBorder: '#e5e7eb',
      inputText: '#1f2937',
      terminalText: '#059669'
    }
  }
  
  // Función para cambiar tema
  const changeTheme = (theme: Theme) => {
    currentTheme.value = theme
    localStorage.setItem('portfolio-theme', theme)
    applyTheme(theme)
  }
  
  // Función para aplicar el tema al DOM
  const applyTheme = (theme: Theme) => {
    const themeConfig = themes[theme]
    
    // Aplicar clases al body o elemento raíz
    const rootElement = document.documentElement
    
    // Remover clases de tema anteriores
    rootElement.classList.remove('theme-default', 'theme-light')
    
    // Agregar clase del tema actual
    rootElement.classList.add(`theme-${theme}`)
    
    // Aplicar variables CSS personalizadas
    rootElement.style.setProperty('--terminal-bg', themeConfig.terminalBg)
    rootElement.style.setProperty('--terminal-border', themeConfig.terminalBorder)
    rootElement.style.setProperty('--main-bg', themeConfig.background)
    rootElement.style.setProperty('--main-text', themeConfig.text)
    rootElement.style.setProperty('--input-text', themeConfig.inputText)
    rootElement.style.setProperty('--terminal-text', themeConfig.terminalText)
  }
  
  // Función para obtener el tema guardado
  const loadSavedTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    if (savedTheme && themes[savedTheme]) {
      currentTheme.value = savedTheme
      applyTheme(savedTheme)
    }
  }
  
  // Función para obtener información del tema actual
  const getCurrentThemeInfo = () => {
    return themes[currentTheme.value]
  }
  
  // Función para obtener lista de temas disponibles
  const getAvailableThemes = () => {
    return Object.entries(themes).map(([key, theme]) => ({
      key,
      ...theme
    }))
  }
  
  // Observar cambios en el tema para aplicar automáticamente
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })
  
  return {
    currentTheme,
    themes,
    changeTheme,
    loadSavedTheme,
    getCurrentThemeInfo,
    getAvailableThemes,
    applyTheme
  }
} 