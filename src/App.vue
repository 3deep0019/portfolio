<script setup>
import NavBar from './components/layout/NavBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import TechStackSection from './components/sections/TechStackSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import LeetCodeSection from './components/sections/LeetCodeSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { profile } from './data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <div class="grid-bg relative min-h-screen w-full">
    <div class="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
      <NavBar />
      <main class="w-full flex-grow overflow-x-hidden">
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <LeetCodeSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer
        class="border-t border-[#222] px-4 py-6 text-center font-mono text-[9px] tracking-widest text-[#666] uppercase sm:px-6"
        role="contentinfo"
      >
        &copy; {{ year }} {{ profile.name }} · SYSTEM_ONLINE
      </footer>
    </div>
  </div>
</template>
