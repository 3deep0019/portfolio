<script setup>
import { ref } from 'vue'
import { profile } from '../../data/portfolio'

const links = [
  { href: '#home', label: 'HOME' },
  { href: '#tech-stack', label: 'TECH_STACK' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#leetcode', label: 'LEETCODE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#education', label: 'EDUCATION' },
]

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-[#222] bg-[#111111]/80 backdrop-blur-md transition-all"
    aria-label="Main navigation"
  >
    <div class="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a
        href="#home"
        class="font-mono text-[10px] font-bold tracking-[0.2em] text-white uppercase"
      >
        TG<span class="text-[#4285f4]">.</span>DEV
      </a>

      <ul class="hidden items-center gap-6 lg:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="font-mono text-[10px] tracking-[0.15em] text-[#888] uppercase transition-colors hover:text-white"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            :href="`mailto:${profile.email}`"
            class="inline-block rounded-[2px] bg-[#4285f4] px-6 py-2.5 font-mono text-[10px] font-bold tracking-[0.2em] text-[#111] uppercase transition-colors hover:bg-[#3b77db]"
          >
            GET_IN_TOUCH
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="z-50 p-2 text-white focus:outline-none lg:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span v-if="menuOpen" class="text-xl">✕</span>
        <span v-else class="text-xl">☰</span>
      </button>
    </div>

    <div
      v-if="menuOpen"
      class="flex flex-col gap-4 border-t border-[#222] bg-[#111] px-4 py-6 lg:hidden"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="font-mono text-[10px] tracking-[0.15em] text-[#888] uppercase hover:text-white"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        :href="`mailto:${profile.email}`"
        class="mt-2 rounded-[2px] bg-[#4285f4] py-4 text-center font-mono text-[10px] font-bold tracking-[0.2em] text-[#111] uppercase"
        @click="closeMenu"
      >
        GET_IN_TOUCH
      </a>
    </div>
  </nav>
</template>
