<script setup>
import { motion } from 'motion-v'
import { hero, profile } from '../../data/portfolio'
</script>

<template>
  <section
    id="home"
    class="flex min-h-[calc(100vh-88px)] w-full flex-col border-b border-[#222]"
    aria-labelledby="hero-heading"
  >
    <div class="flex flex-1 flex-col lg:flex-row">
      <!-- Side status bar -->
      <aside
        class="hidden w-16 shrink-0 flex-col items-center justify-between border-r border-[#222] py-8 font-mono text-[9px] tracking-widest text-[#888] lg:flex"
        aria-hidden="true"
      >
        <div class="-rotate-90 whitespace-nowrap">{{ profile.version }}</div>
        <div class="flex flex-col gap-8">
          <span>◳</span>
          <span>◒</span>
          <span>◰</span>
        </div>
        <div class="-rotate-90 whitespace-nowrap">2026_DEPLOY</div>
      </aside>

      <!-- Main hero content -->
      <div class="flex flex-1 flex-col justify-between p-6 sm:p-10 lg:p-16">
        <div>
          <p class="mb-6 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#888] uppercase">
            <span class="h-2 w-2 shrink-0 bg-[#4285f4]" aria-hidden="true" />
            STATUS: {{ profile.status }}
          </p>

          <motion.h1
            id="hero-heading"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6 }"
            class="mb-8 text-4xl font-bold tracking-tighter break-words text-white sm:text-6xl sm:leading-[0.95] lg:text-[5.5rem] lg:leading-[0.9]"
          >
            <template v-for="(word, i) in hero.headline" :key="word">
              <span :class="hero.accentWords.includes(i) ? 'text-[#4285f4]' : ''">{{ word }}</span>
              <br v-if="i < hero.headline.length - 1" />
            </template>
          </motion.h1>

          <motion.p
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
            class="mb-8 max-w-3xl text-sm leading-relaxed text-[#a3a3a3] sm:text-base"
          >
            {{ hero.description }}
          </motion.p>

          <motion.div
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            class="mb-8 font-mono text-xs"
          >
            <p class="mb-1 tracking-widest text-[#d97757] uppercase">{{ hero.currentBuild.label }}</p>
            <p class="text-[#666]">{{ hero.currentBuild.detail }}</p>
          </motion.div>

          <!-- Benchmarks -->
          <div class="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div
              v-for="bench in hero.benchmarks"
              :key="bench.label"
              class="border border-[#222] bg-[#0f0f0f] p-4 sm:p-5"
            >
              <p class="mb-2 truncate font-mono text-[8px] tracking-widest text-[#666] uppercase">
                {{ bench.label }}
              </p>
              <p class="text-2xl font-bold text-white sm:text-3xl">
                {{ bench.value }}
                <span class="text-sm font-normal text-[#4285f4]">{{ bench.suffix }}</span>
              </p>
            </div>
          </div>

          <!-- Capabilities + CTA -->
          <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="mb-3 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                // CORE_CAPABILITIES
              </p>
              <ul class="space-y-2" role="list">
                <li
                  v-for="cap in hero.capabilities"
                  :key="cap"
                  class="flex items-center gap-2 text-sm text-[#ccc]"
                >
                  <span class="text-[#4285f4]">●</span>
                  {{ cap }}
                </li>
              </ul>
              <p class="mt-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
                // EXPERIENCE_LOG
              </p>
              <p class="mt-1 text-2xl font-bold text-white sm:text-3xl">
                {{ profile.yearsExperience }}
                <span class="text-base font-normal text-[#888]">YEARS IN</span>
                PRODUCTION
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                class="rounded-[2px] border border-[#444] px-6 py-3 text-center font-mono text-[10px] tracking-[0.2em] text-white uppercase transition-colors hover:border-[#4285f4] hover:text-[#4285f4]"
              >
                VIEW_PROJECTS →
              </a>
              <a
                :href="profile.resumeUrl"
                :download="profile.resumeFileName"
                type="application/pdf"
                class="rounded-[2px] border border-[#444] px-6 py-3 text-center font-mono text-[10px] tracking-[0.2em] text-white uppercase transition-colors hover:border-[#4285f4] hover:text-[#4285f4]"
              >
                DOWNLOAD_CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured project card -->
      <aside class="border-t border-[#222] bg-[#0f0f0f] p-6 sm:p-8 lg:w-[280px] lg:border-t-0 lg:border-l">
        <p class="mb-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
          SYSTEM.CAPABILITY_INDEX
        </p>
        <div class="mb-2 text-2xl" aria-hidden="true">⚡</div>
        <h2 class="mb-1 truncate text-sm font-bold text-white sm:text-base">
          {{ hero.featured.title }}
        </h2>
        <p class="mb-4 truncate text-[10px] text-[#888] sm:text-xs">
          {{ hero.featured.subtitle }}
        </p>
        <div class="mb-4 flex flex-wrap gap-2">
          <span
            v-for="tag in hero.featured.tags"
            :key="tag"
            class="border border-[#333] px-2 py-1 font-mono text-[8px] tracking-wider text-[#888]"
          >
            {{ tag }}
          </span>
        </div>
        <dl class="space-y-3">
          <div
            v-for="metric in hero.featured.metrics"
            :key="metric.label"
            class="border-t border-[#222] pt-3"
          >
            <dt class="font-mono text-[8px] tracking-widest text-[#666] uppercase">{{ metric.label }}</dt>
            <dd class="text-lg font-bold text-[#4285f4]">{{ metric.value }}</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
