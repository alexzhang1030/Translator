<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import type { TranslateRequest } from '~~/composables/useTranslate'

const content = useContent()
const translated = useTranslated()
const target = useTargetLang()

debouncedWatch([() => content.value, () => target.value], async ([c, target]) => {
  if (c) {
    translated.value.message = ''
    translated.value.loading = true
    const { data } = await useFetch('/api/translate', {
      method: 'POST',
      body: {
        word: c.trim(),
        target: target.name,
      } satisfies TranslateRequest,
    })
    translated.value.loading = false
    translated.value.message = data.value?.text ?? ''
  }
}, {
  debounce: 500,
})

const lang = ref(inputLanguages[0])
</script>

<template>
  <div w="52%" flex justify-start>
    <div w="92%">
      <SelectLanguage v-model="lang" :data="inputLanguages" mb-3 />
      <textarea v-model="content" w-full h-200px bg="dark-800" shadow-md rounded-md outline-none p-2 box-border placeholder="Type something you want to translate." />
    </div>
    <div w="8%" flex items-end p-3 box-border>
      <div w-full h="200px" flex justify-center>
        <ChevronRightIcon w-5 h-5 />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
