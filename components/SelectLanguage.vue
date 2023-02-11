<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import type { LanguageNameItem } from '~~/composables/language'

withDefaults(defineProps<{
  data: LanguageNameItem[]
  showLabel?: boolean
}>(), {
  showLabel: false,
})

const { modelValue } = defineModel<{
  modelValue: LanguageNameItem
}>()
</script>

<template>
  <div w-72 h-36px>
    <Listbox v-model="modelValue">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-black py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm"
          cursor-pointer
        >
          <span class="block truncate">
            {{ modelValue.name }} {{ showLabel ? `(${modelValue.nativeName})` : '' }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="languageName in data"
              v-slot="{ active, selected }"
              :key="languageName.code"
              :value="languageName"
              as="template"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4" :class="[
                  active ? 'text-orange-700' : 'text-gray-300',
                ]"
                cursor-pointer
              >
                <span
                  class="block truncate" :class="[
                    selected ? 'font-medium' : 'font-normal',
                  ]"
                >
                  {{ languageName.name }} {{ showLabel ? `(${languageName.nativeName})` : '' }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style scoped></style>
