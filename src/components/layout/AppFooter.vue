<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import LeetCodeIcon from '../ui/LeetCodeIcon.vue'
import { socialLinks } from '../../data/portfolio'

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: LeetCodeIcon,
  Email: Mail,
}

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
    role="contentinfo"
  >
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {{ year }} Trideep Ghosh. All rights reserved.
        </p>

        <nav aria-label="Social media links">
          <ul class="flex items-center gap-4">
            <li v-for="link in socialLinks" :key="link.name">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.label"
                class="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
              >
                <component :is="iconMap[link.name]" class="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
