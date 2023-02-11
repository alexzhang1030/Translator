<script setup lang="ts">
const translated = useTranslated()
const targetLang = useTargetLang()

useLocalStorage('targetLang', targetLang)
</script>

<template>
  <div w="48%">
    <SelectLanguage v-model="targetLang" mb-3 show-label :data="languagesNameList" />
    <div w-full h-200px bg="dark-800" shadow-md rounded-md p-2>
      <svg v-if="translated.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      {{ translated.message ?? 'Translated' }}
    </div>
  </div>
</template>
