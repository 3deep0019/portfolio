<script setup>
import { motion } from 'motion-v'
import { techStack } from '../../data/portfolio'
</script>

<template>
  <section
    id="tech-stack"
    class="border-b border-[#222] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="tech-stack-heading"
  >
    <div class="mx-auto max-w-[1440px]">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.5 }"
        class="mb-12"
      >
        <p class="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#888] uppercase">
          SYSTEM.CAPABILITY_INDEX
        </p>
        <h2
          id="tech-stack-heading"
          class="mb-6 text-3xl font-bold tracking-tight text-white uppercase break-words sm:text-4xl md:text-5xl"
        >
          TECHNICAL_STACK
        </h2>
        <p class="max-w-2xl text-sm leading-relaxed text-[#888]">
          Tools I use in production and active projects. Vue.js and Node.js for full-stack
          microservices. Okta and Passport.js for enterprise identity. MongoDB, MySQL, and
          GCP for everything that needs to stay reliable.
        </p>
      </motion.div>

      <div class="mb-12 grid gap-6 lg:grid-cols-3">
        <motion.article
          v-for="(cat, index) in techStack.categories"
          :key="cat.title"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
          class="border border-[#222] bg-[#0f0f0f] p-6 sm:p-8"
        >
          <div class="mb-6 flex items-start justify-between">
            <div>
              <p class="mb-2 text-2xl" aria-hidden="true">{{ cat.icon }}</p>
              <h3 class="text-sm font-bold tracking-wider text-white uppercase">
                {{ cat.title }}
              </h3>
              <p class="mt-1 font-mono text-[9px] tracking-widest text-[#666] uppercase">
                {{ cat.subtitle }}
              </p>
            </div>
            <span
              v-if="cat.badge"
              class="border border-[#4285f4] px-2 py-1 font-mono text-[8px] tracking-wider text-[#4285f4]"
            >
              {{ cat.badge }}
            </span>
          </div>

          <ul v-if="cat.items[0]?.name" class="space-y-4" role="list">
            <li
              v-for="(item, i) in cat.items"
              :key="item.name"
              class="flex items-start gap-3 border-t border-[#222] pt-4"
            >
              <span class="font-mono text-[10px] text-[#4285f4]">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div>
                <p class="text-sm font-bold text-white">{{ item.name }}</p>
                <p class="text-[10px] text-[#888]">{{ item.context }}</p>
              </div>
            </li>
          </ul>

          <div v-else>
            <div v-if="cat.status" class="mb-4 flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-[#4285f4]" aria-hidden="true" />
              <span class="font-mono text-[9px] tracking-widest text-[#888] uppercase">
                STATUS UPTIME
              </span>
              <span class="font-mono text-[9px] text-[#4285f4]">{{ cat.status }}</span>
            </div>
            <ul class="flex flex-wrap gap-2" role="list">
              <li
                v-for="item in cat.items"
                :key="item"
                class="flex items-center gap-1.5 font-mono text-[10px] text-[#ccc]"
              >
                <span class="text-[#4285f4]">●</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div v-if="cat.integrations" class="mt-6 border-t border-[#222] pt-4">
            <p class="mb-2 font-mono text-[8px] tracking-widest text-[#666] uppercase">
              INTEGRATIONS:
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in cat.integrations"
                :key="tag"
                class="font-mono text-[9px] text-[#888]"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </motion.article>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <motion.article
          v-for="(item, index) in techStack.philosophy"
          :key="item.title"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
          class="border border-[#222] p-6"
        >
          <h4 class="mb-3 font-mono text-[10px] font-bold tracking-widest text-[#4285f4] uppercase">
            {{ item.title }}
          </h4>
          <p class="text-sm leading-relaxed text-[#a3a3a3]">{{ item.text }}</p>
        </motion.article>
      </div>
    </div>
  </section>
</template>
