<script setup>
import { motion } from 'motion-v'
import SectionHeading from '../ui/SectionHeading.vue'
import { skills } from '../../data/portfolio'
</script>

<template>
  <section
    id="skills"
    class="bg-zinc-50 px-4 py-20 dark:bg-zinc-900/50 sm:px-6 lg:px-8"
    aria-labelledby="skills-heading"
  >
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with daily."
      />

      <h3 id="skills-heading" class="sr-only">Technical Skills</h3>

      <ul
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        role="list"
      >
        <motion.li
          v-for="(skill, index) in skills"
          :key="skill.name"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.4, delay: index * 0.05 }"
          class="group"
        >
          <div
            class="flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/30"
          >
            <component
              :is="skill.icon"
              class="mb-3 h-8 w-8 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400"
              aria-hidden="true"
            />
            <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {{ skill.name }}
            </span>
          </div>
        </motion.li>
      </ul>
    </div>
  </section>
</template>
