<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import DarkModeToggle from '../ui/DarkModeToggle.vue'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#leetcode', label: 'LeetCode' },
  { href: '#contact', label: 'Contact' },
]

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <a
        href="#hero"
        class="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        TG<span class="text-emerald-500">.</span>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>

      <div class="flex items-center gap-2 md:hidden">
        <DarkModeToggle />
        <button
          type="button"
          class="rounded-lg p-2 text-zinc-600 dark:text-zinc-400"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="h-6 w-6" aria-hidden="true" />
          <Menu v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="border-t border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block text-base font-medium text-zinc-700 dark:text-zinc-300"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
