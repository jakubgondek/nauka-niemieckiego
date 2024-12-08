<script setup lang="ts">
import { ref } from 'vue';
import type { Word } from '../types/vocabulary';

defineProps<{
  word: Word;
}>();

const showTranslation = ref(false);

const toggleTranslation = () => {
  showTranslation.value = !showTranslation.value;
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 m-4 cursor-pointer" @click="toggleTranslation">
    <div class="text-2xl font-bold mb-2">
      <span v-if="word.article" class="text-blue-600 mr-2">{{ word.article }}</span>
      {{ word.german }}
    </div>
    <div v-if="showTranslation" class="mt-4">
      <p class="text-xl text-gray-700">{{ word.polish }}</p>
      <p v-if="word.example" class="text-sm text-gray-500 mt-2 italic">{{ word.example }}</p>
    </div>
    <div v-else class="mt-4 text-gray-400">
      (kliknij, aby zobaczyć tłumaczenie)
    </div>
  </div>
</template>