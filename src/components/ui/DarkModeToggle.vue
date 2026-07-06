<script setup>
import { Moon, Sun } from 'lucide-vue-next'
import { useDarkMode } from '../../composables/useDarkMode'

const { isDark, toggle } = useDarkMode()
</script>

<template>
  <button
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
    @click="toggle"
  >
    <Sun v-if="isDark" class="h-5 w-5" aria-hidden="true" />
    <Moon v-else class="h-5 w-5" aria-hidden="true" />
  </button>
</template>
