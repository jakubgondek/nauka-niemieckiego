<script setup lang="ts">
import VocabularyCard from './components/VocabularyCard.vue';
import LearningExercise from './components/LearningExercise.vue';
import { useVocabularyStore } from './stores/vocabularyStore';
import { ref } from 'vue'

const store = useVocabularyStore();
const showWordList = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-8">Nauka Niemieckiego</h1>
      
      <div class="mb-8">
        <LearningExercise />
      </div>

      <div class="text-center mb-6">
        <button 
          @click="showWordList = !showWordList"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {{ showWordList ? 'Ukryj słówka' : 'Pokaż słówka' }}
        </button>
      </div>

      <div v-if="showWordList" class="word-list">
        <h2 class="text-2xl font-bold mb-4">Słówka do nauki</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <VocabularyCard
            v-for="word in store.words"
            :key="word.german"
            :word="word"
          />
        </div>
      </div>
    </div>
  </div>
</template>