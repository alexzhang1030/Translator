<script setup lang="ts">
useHead({
  title: 'Translator',
  link: [
    {
      rel: 'icon', type: 'image/svg', href: '/logo.svg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  background: #222;
  color: white;
}
</style>
