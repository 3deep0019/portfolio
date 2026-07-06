<script setup>
import { motion } from 'motion-v'
import { experience, profile } from '../../data/portfolio'
</script>

<template>
  <section
    id="experience"
    class="border-b border-[#222] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="experience-heading"
  >
    <div class="mx-auto max-w-[1440px]">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        class="mb-12"
      >
        <p class="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
          // CAREER_LOG.EXE
        </p>
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            id="experience-heading"
            class="text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
          >
            PROFESSIONAL<br />TRAJECTORY
          </h2>
          <p class="font-mono text-[10px] tracking-widest text-[#666] uppercase">
            SYSTEM_STATUS: ACTIVE · LOC: {{ profile.location.toUpperCase() }} ·
            FOC: FULLSTACK // ENTERPRISE // SYSTEMS
          </p>
        </div>
      </motion.div>

      <div class="space-y-16">
        <motion.article
          v-for="(job, index) in experience"
          :key="job.period"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
          class="border border-[#222] bg-[#0f0f0f]"
        >
          <header class="border-b border-[#222] p-6 sm:p-8">
            <time class="font-mono text-[10px] tracking-widest text-[#4285f4] uppercase">
              {{ job.period }}
            </time>
            <h3 class="mt-2 text-xl font-bold text-white uppercase sm:text-2xl">
              {{ job.role }}
            </h3>
            <p class="mt-1 font-mono text-[10px] tracking-widest text-[#888] uppercase">
              {{ job.company }} · {{ job.focus }}
            </p>
          </header>

          <div class="p-6 sm:p-8">
            <!-- Senior role: project cards -->
            <template v-if="job.projects">
              <p class="mb-6 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                // ACTIVE_PROJECTS
              </p>
              <div class="mb-8 grid gap-6 md:grid-cols-2">
                <div
                  v-for="proj in job.projects"
                  :key="proj.title"
                  class="border border-[#222] p-5"
                >
                  <h4 class="mb-2 text-sm font-bold tracking-wider text-white uppercase">
                    {{ proj.title }}
                  </h4>
                  <p class="mb-4 text-sm leading-relaxed text-[#a3a3a3]">{{ proj.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in proj.tags"
                      :key="tag"
                      class="border border-[#333] px-2 py-1 font-mono text-[8px] text-[#888]"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <div v-if="job.impact" class="border border-[#222] p-5">
                <p class="mb-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                  {{ job.impact.label }}
                </p>
                <div class="mb-6 grid gap-4 sm:grid-cols-2">
                  <div
                    v-for="metric in job.impact.metrics"
                    :key="metric.label"
                    class="flex items-center justify-between bg-[#0a0a0a] border border-[#222] p-4"
                  >
                    <div>
                      <p class="font-mono text-[8px] text-[#666] uppercase">{{ metric.label }} (PRE)</p>
                      <p class="text-lg font-bold text-[#888]">{{ metric.before }}</p>
                    </div>
                    <span class="text-[#4285f4]">»</span>
                    <div class="text-right">
                      <p class="font-mono text-[8px] text-[#666] uppercase">{{ metric.label }} (POST)</p>
                      <p class="text-lg font-bold text-white">{{ metric.after }}</p>
                    </div>
                  </div>
                </div>
                <p class="mb-4 text-sm text-[#a3a3a3]">{{ job.impact.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in job.impact.tags"
                    :key="tag"
                    class="font-mono text-[9px] text-[#4285f4]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </template>

            <!-- Junior role: metrics + deliverables -->
            <template v-else>
              <p class="mb-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                PERFORMANCE_METRICS
              </p>
              <div class="mb-6 grid gap-4 sm:grid-cols-2">
                <div
                  v-for="metric in job.metrics"
                  :key="metric.label"
                  class="flex items-center justify-between border border-[#222] bg-[#0a0a0a] p-4"
                >
                  <div>
                    <p class="font-mono text-[8px] text-[#666] uppercase">{{ metric.label }} (PRE)</p>
                    <p class="text-lg font-bold text-[#888]">{{ metric.before }}</p>
                  </div>
                  <span class="text-[#4285f4]">»</span>
                  <div class="text-right">
                    <p class="font-mono text-[8px] text-[#666] uppercase">{{ metric.label }} (POST)</p>
                    <p class="text-lg font-bold text-white">{{ metric.after }}</p>
                  </div>
                </div>
              </div>
              <p class="mb-6 text-sm leading-relaxed text-[#a3a3a3]">{{ job.metricsDescription }}</p>
              <div class="mb-8 flex flex-wrap gap-2">
                <span
                  v-for="tag in job.metricsTags"
                  :key="tag"
                  class="font-mono text-[9px] text-[#4285f4]"
                >
                  {{ tag }}
                </span>
              </div>

              <div v-if="job.deliverables" class="border-t border-[#222] pt-6">
                <p class="mb-3 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                  {{ job.deliverables.label }}
                </p>
                <p class="mb-4 text-sm leading-relaxed text-[#a3a3a3]">{{ job.deliverables.text }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in job.deliverables.tags"
                    :key="tag"
                    class="border border-[#333] px-2 py-1 font-mono text-[8px] text-[#888]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
</template>
