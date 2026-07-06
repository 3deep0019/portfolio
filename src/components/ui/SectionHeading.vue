<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <header class="mb-12 text-center md:mb-16">
    <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mx-auto mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 md:text-lg"
    >
      {{ subtitle }}
    </p>
    <div
      class="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500"
      aria-hidden="true"
    />
  </header>
</template>
