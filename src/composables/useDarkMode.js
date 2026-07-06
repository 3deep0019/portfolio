import { ref, watch, onMounted } from 'vue'

const isDark = ref(true)

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

export function useDarkMode() {
  onMounted(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      isDark.value = false
    } else if (stored === 'dark') {
      isDark.value = true
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  })

  watch(isDark, (value) => {
    applyTheme(value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
