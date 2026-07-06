<script setup>
import { motion } from 'motion-v'
import { Loader2, ExternalLink } from 'lucide-vue-next'
import LeetCodeIcon from '../ui/LeetCodeIcon.vue'
import { useLeetCodeCalendar } from '../../composables/useLeetCodeCalendar'
import { profile } from '../../data/portfolio'

const { loading, error, stats, solved, difficultyStats } = useLeetCodeCalendar()
</script>

<template>
  <section
    id="leetcode"
    class="border-b border-[#222] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="leetcode-heading"
  >
    <div class="mx-auto max-w-[1440px]">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        class="mb-12"
      >
        <p class="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
          // CODE_ACTIVITY.LOG
        </p>
        <h2
          id="leetcode-heading"
          class="text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
        >
          LEETCODE<br />
        </h2>
      </motion.div>

      <div v-if="loading" class="flex justify-center py-20">
        <Loader2 class="h-8 w-8 animate-spin text-[#4285f4]" aria-label="Loading LeetCode data" />
      </div>

      <div
        v-else-if="error"
        class="border border-[#222] bg-[#0f0f0f] p-8 text-center"
      >
        <p class="text-[#888]">Unable to load LeetCode data.</p>
        <a
          :href="profile.leetcodeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2 font-mono text-[10px] text-[#4285f4] uppercase"
        >
          View profile <ExternalLink class="h-3 w-3" />
        </a>
      </div>

      <div v-else-if="solved" class="grid gap-6 lg:grid-cols-3">
        <!-- Total solved -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          class="flex flex-col items-center justify-center border border-[#222] bg-[#0f0f0f] p-8"
        >
          <LeetCodeIcon class="mb-4 h-10 w-10 text-[#ffa116]" />
          <p class="text-5xl font-bold text-white">{{ solved.total }}</p>
          <p class="mt-1 font-mono text-[10px] tracking-widest text-[#666] uppercase">
            Problems Solved
          </p>

          <div
            v-if="stats?.totalActiveDays != null"
            class="mt-6 flex flex-wrap justify-center gap-4 font-mono text-[10px] text-[#888]"
          >
            <span>Active days: <strong class="text-white">{{ stats.totalActiveDays }}</strong></span>
            <span>Max streak: <strong class="text-white">{{ stats.streak }}</strong></span>
          </div>

          <a
            :href="profile.leetcodeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 rounded border border-[#333] bg-[#1a1a1a] px-4 py-2 font-mono text-[10px] text-[#ccc] transition-colors hover:border-[#4285f4] hover:text-[#4285f4]"
          >
            @{{ profile.leetcodeUsername }}
            <ExternalLink class="h-3 w-3" aria-hidden="true" />
          </a>
        </motion.div>

        <!-- Difficulty progress bars -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ delay: 0.1 }"
          class="border border-[#222] bg-[#0f0f0f] p-8 lg:col-span-2"
        >
          <p class="mb-6 font-mono text-[10px] tracking-widest text-[#666] uppercase">
            Difficulty Breakdown
          </p>

          <ul class="space-y-6" role="list">
            <li v-for="item in difficultyStats" :key="item.label">
              <div class="mb-2 flex items-center justify-between">
                <span :class="['font-mono text-[10px] tracking-widest uppercase', item.text]">
                  {{ item.label }}
                </span>
                <span class="font-mono text-[10px] text-[#888]">
                  {{ item.count }} solved
                </span>
              </div>
              <div class="h-2.5 overflow-hidden rounded-sm bg-[#1a1a1a]">
                <motion.div
                  :class="['h-full rounded-sm', item.color]"
                  :initial="{ width: 0 }"
                  :while-in-view="{ width: `${Math.min((item.count / item.total) * 100, 100)}%` }"
                  :viewport="{ once: true }"
                  :transition="{ duration: 0.8, ease: 'easeOut' }"
                />
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
</template>
