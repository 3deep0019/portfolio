<script setup>
import { motion } from 'motion-v'
import { education } from '../../data/portfolio'
</script>

<template>
  <section
    id="education"
    class="border-b border-[#222] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="education-heading"
  >
    <div class="mx-auto max-w-[1440px]">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
      >
        <p class="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
          ACADEMIC PROFILE
        </p>
        <h2
          id="education-heading"
          class="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Education.
        </h2>

        <article class="border border-[#222] bg-[#0f0f0f] p-6 sm:p-10">
          <h3 class="text-xl font-bold text-white sm:text-2xl">
            {{ education.institution }}
          </h3>
          <p class="mt-2 text-sm text-[#a3a3a3]">{{ education.degree }}</p>
          <p class="mt-1 font-mono text-[10px] text-[#888]">{{ education.details }}</p>

          <div class="mt-8 border-t border-[#222] pt-6">
            <p class="mb-4 font-mono text-[10px] tracking-widest text-[#666] uppercase">
              KEY COURSEWORK
            </p>
            <ul class="flex flex-wrap gap-4" role="list">
              <li
                v-for="course in education.coursework"
                :key="course"
                class="font-mono text-[10px] text-[#ccc]"
              >
                ■ {{ course }}
              </li>
            </ul>
          </div>
        </article>
      </motion.div>
    </div>
  </section>
</template>
