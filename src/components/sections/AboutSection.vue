<script setup>
import { motion } from 'motion-v'
import { MapPin, GraduationCap } from 'lucide-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import { education } from '../../data/portfolio'
</script>

<template>
  <section
    id="about"
    class="px-4 py-20 sm:px-6 lg:px-8"
    aria-labelledby="about-heading"
  >
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        title="About Me"
        subtitle="Full-stack engineer passionate about building things that scale."
      />

      <div class="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          :initial="{ opacity: 0, x: -30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, margin: '-100px' }"
          :transition="{ duration: 0.6 }"
          class="relative"
        >
          <div
            class="aspect-square max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-zinc-200 dark:from-emerald-500/10 dark:to-zinc-800"
          >
            <div class="flex h-full items-center justify-center">
              <span
                class="text-8xl font-bold text-emerald-600/30 dark:text-emerald-400/20"
                aria-hidden="true"
              >
                TG
              </span>
            </div>
          </div>
          <div
            class="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-emerald-500/30"
            aria-hidden="true"
          />
        </motion.div>

        <motion.article
          :initial="{ opacity: 0, x: 30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, margin: '-100px' }"
          :transition="{ duration: 0.6 }"
        >
          <h3 id="about-heading" class="sr-only">About Trideep Ghosh</h3>
          <p class="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I'm a Full-Stack Engineering Professional with 5+ years of experience
            building scalable SaaS platforms, enterprise applications, workflow
            automation, and real-time communication systems. Based in Bengaluru,
            I specialize in system design, distributed systems, and event-driven
            architectures.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            My expertise spans Node.js, Vue.js, JavaScript, TypeScript, and
            cloud-native technologies — with deep experience in Identity &amp;
            Security (SSO, Okta, OAuth 2.0), CI/CD enablement, and API
            integrations that drive digital transformation.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span class="inline-flex items-center gap-1.5">
              <MapPin class="h-4 w-4 text-emerald-500" aria-hidden="true" />
              Bengaluru, India
            </span>
          </div>

          <div
            class="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div class="flex items-start gap-3">
              <GraduationCap class="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
              <div>
                <p class="font-medium text-zinc-900 dark:text-zinc-100">
                  {{ education.degree }}
                </p>
                <p class="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {{ education.institution }}
                </p>
                <p class="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                  {{ education.period }} · {{ education.score }}
                </p>
              </div>
            </div>
          </div>

          <blockquote
            class="mt-8 border-l-4 border-emerald-500 pl-4 italic text-zinc-600 dark:text-zinc-400"
          >
            "I focus on enhancing operational efficiency, user experience, and
            digital transformation through automation and reusable engineering
            frameworks."
          </blockquote>
        </motion.article>
      </div>
    </div>
  </section>
</template>
