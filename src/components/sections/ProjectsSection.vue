<script setup>
import { motion } from 'motion-v'
import { projects } from '../../data/portfolio'
</script>

<template>
  <section
    id="projects"
    class="border-b border-[#222] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="projects-heading"
  >
    <div class="mx-auto max-w-[1440px]">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        class="mb-12"
      >
        <p class="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
          CODE
        </p>
        <h2
          id="projects-heading"
          class="mb-4 text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
        >
          PROJECTS <span class="text-[#888]">[SYSTEM_STABLE]</span>
        </h2>
        <p class="max-w-3xl text-sm leading-relaxed text-[#888]">
          Curated selection of production-grade architectural implementations focusing on
          enterprise identity, workflow automation, and scalable full-stack infrastructure.
        </p>
      </motion.div>

      <div class="space-y-8">
        <motion.article
          v-for="(project, index) in projects"
          :key="project.number"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
          class="border border-[#222] bg-[#0f0f0f]"
        >
          <header class="flex flex-col gap-4 border-b border-[#222] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div class="flex items-center gap-4 min-w-0">
              <span class="font-mono text-4xl font-bold text-[#222] sm:text-5xl">{{ project.number }}</span>
              <div class="min-w-0">
                <span class="mb-1 inline-block font-mono text-[8px] tracking-widest text-[#4285f4] uppercase">
                  {{ project.badge }}
                </span>
                <h3 class="truncate text-xl font-bold text-white sm:text-2xl">
                  {{ project.title }}
                </h3>
              </div>
            </div>
          </header>

          <div class="grid gap-0 lg:grid-cols-2">
            <div class="border-b border-[#222] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p class="mb-8 text-sm leading-relaxed text-[#a3a3a3]">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="border border-[#333] px-3 py-1 font-mono text-[9px] tracking-wider text-[#888]"
                >
                  {{ tag }}
                </span>
              </div>
              <p v-if="project.note" class="mt-6 font-mono text-[9px] text-[#666]">
                {{ project.note }}
              </p>
            </div>

            <div class="p-6 sm:p-8">
              <template v-if="project.features">
                <p class="mb-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                  SECURITY_ARCHITECTURE
                </p>
                <div class="space-y-4">
                  <div
                    v-for="feat in project.features"
                    :key="feat.label"
                    class="border border-[#222] p-4"
                  >
                    <p class="font-mono text-[8px] tracking-widest text-[#666] uppercase">{{ feat.label }}</p>
                    <p class="text-xl font-bold text-white">{{ feat.value }}</p>
                    <p class="mt-1 text-[10px] text-[#888]">{{ feat.detail }}</p>
                  </div>
                </div>
              </template>

              <template v-else-if="project.metrics">
                <div class="grid grid-cols-3 gap-4">
                  <div
                    v-for="metric in project.metrics"
                    :key="metric.label"
                    class="border border-[#222] p-4 text-center"
                  >
                    <p class="font-mono text-[8px] text-[#666] uppercase">{{ metric.label }}</p>
                    <p class="mt-2 text-lg font-bold text-[#4285f4]">{{ metric.value }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
</template>
