<script setup>
import { motion } from 'motion-v'
import { contact, profile } from '../../data/portfolio'

const mailtoLink = `mailto:${profile.email}`

const socialLinks = [
  { name: 'GitHub', url: profile.githubUrl },
  { name: 'LinkedIn', url: profile.linkedinUrl },
]
</script>

<template>
  <section
    id="contact"
    class="border-b border-[#222] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="contact-heading"
  >
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true }"
      class="mx-auto max-w-[1440px]"
    >
      <h2
        id="contact-heading"
        class="mb-4 text-2xl font-bold tracking-tight text-[#111] uppercase break-words sm:text-3xl"
      >
        {{ contact.headline }}
      </h2>
      <p class="mb-8 max-w-2xl text-xs font-medium text-[#111] opacity-80 sm:text-sm">
        {{ contact.description }}
      </p>
      <a
        :href="mailtoLink"
        class="inline-flex items-center gap-2 break-words rounded-[2px] border-2 border-[#111] px-6 py-3 font-mono text-[10px] tracking-[0.2em] text-[#111] uppercase transition-colors hover:bg-[#111] hover:text-white"
      >
        GET_IN_TOUCH →
      </a>
      <p class="mt-4 font-mono text-[10px] font-bold tracking-widest text-[#111] opacity-70">
        {{ profile.email }}
      </p>

      <nav class="mt-6 flex flex-wrap gap-3" aria-label="Social links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-[2px] border-2 border-[#111] px-5 py-2.5 font-mono text-[10px] tracking-[0.2em] text-[#111] uppercase transition-colors hover:bg-[#111] hover:text-white"
        >
          {{ link.name }} →
        </a>
      </nav>
    </motion.div>
  </section>
</template>
