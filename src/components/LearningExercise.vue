<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVocabularyStore } from '../stores/vocabularyStore';

const store = useVocabularyStore();
const sessionSize = ref(10);
const currentIndex = ref(0);
const showDirectionSetup = ref(true);
const showSetup = ref(false);
const showSummary = ref(false);
const userAnswer = ref('');
const sessionWords = ref<Array<any>>([]);
const results = ref<Array<{ word: any, correct: boolean }>>([]);
const isPolishToGerman = ref(true);

const selectDirection = (direction: 'toGerman' | 'toPolish') => {
  isPolishToGerman.value = direction === 'toGerman';
  showDirectionSetup.value = false;
  showSetup.value = true;
};

const startSession = () => {
  const shuffled = [...store.words].sort(() => 0.5 - Math.random());
  sessionWords.value = shuffled.slice(0, sessionSize.value);
  showSetup.value = false;
  currentIndex.value = 0;
  results.value = [];
};

const currentWord = computed(() => sessionWords.value[currentIndex.value]);

const displayWord = computed(() => {
  if (!currentWord.value) return '';
  
  if (isPolishToGerman.value) {
    return currentWord.value.polish;
  } else {
    // Add article for German words
    return `${currentWord.value.article} ${currentWord.value.german}`;
  }
});

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    // German characters
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss')
    // Polish characters
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z');
};

const checkAnswer = () => {
  if (!currentWord.value) return;
  
  const correctAnswer = isPolishToGerman.value 
    ? `${currentWord.value.article} ${currentWord.value.german}`
    : currentWord.value.polish;
  
  const normalizedCorrect = normalizeText(correctAnswer);
  const normalizedUserAnswer = normalizeText(userAnswer.value);
  
  const isCorrect = normalizedUserAnswer === normalizedCorrect;

  results.value[currentIndex.value] = {
    word: currentWord.value,
    correct: isCorrect
  };
  
  userAnswer.value = '';
  
  if (currentIndex.value === sessionWords.value.length - 1) {
    showSummary.value = true;
  }

  goToNext();
};

const goToNext = () => {
  if (currentIndex.value < sessionWords.value.length - 1) {
    currentIndex.value++;
  }
};

const goToPrevious = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const stats = computed(() => {
  const completed = results.value.filter(r => r !== null).length;
  const correct = results.value.filter(r => r?.correct).length;
  return {
    completed,
    correct,
    total: sessionWords.value.length
  };
});

const startNewSession = () => {
  showDirectionSetup.value = true;
  showSetup.value = false;
  showSummary.value = false;
  sessionWords.value = [];
  results.value = [];
};

const setSessionSize = (size: number | 'all') => {
  sessionSize.value = size === 'all' ? store.words.length : size;
  startSession();
};
</script>

<template>
  <!-- Direction Selection Screen -->
  <div v-if="showDirectionSetup" class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
    <h2 class="text-xl font-bold mb-4">Wybierz kierunek tłumaczenia</h2>
    <div class="flex flex-col space-y-3">
      <button 
        @click="selectDirection('toGerman')"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        Polski → Niemiecki
      </button>
      <button 
        @click="selectDirection('toPolish')"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        Niemiecki → Polski
      </button>
    </div>
  </div>

  <!-- Setup Screen -->
  <div v-else-if="showSetup" class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
    <h2 class="text-xl font-bold mb-4">Wybierz ilość słówek w sesji</h2>
    <div class="flex flex-col space-y-3">
      <button 
        @click="setSessionSize(10)"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        10 słówek
      </button>
      <button 
        @click="setSessionSize(20)"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        20 słówek
      </button>
      <button 
        @click="setSessionSize('all')"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        Wszystkie słówka ({{ store.words.length }})
      </button>
    </div>
  </div>

  <!-- Learning Screen -->
  <div v-else-if="!showSummary" class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
    <div class="flex justify-between mb-4">
      <button 
        @click="goToPrevious"
        class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        :disabled="currentIndex === 0"
      >
        ←
      </button>
      <span class="text-gray-600">{{ currentIndex + 1 }} / {{ sessionWords.length }}</span>
      <button 
        @click="goToNext"
        class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        :disabled="currentIndex === sessionWords.length - 1"
      >
        →
      </button>
    </div>

    <div class="mb-4">
      <h3 class="text-xl font-bold mb-2">
        {{ displayWord }}
      </h3>
      <input 
        v-model="userAnswer"
        type="text"
        class="w-full p-2 border rounded"
        :placeholder="isPolishToGerman ? 'Wpisz po niemiecku (z rodzajnikiem)...' : 'Wpisz po polsku...'"
        @keyup.enter="checkAnswer"
      >
    </div>

    <div class="flex space-x-2">
      <button 
        @click="checkAnswer"
        class="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Zapisz odpowiedź
      </button>
    </div>
  </div>

  <!-- Summary Screen -->
  <div v-else class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
    <h2 class="text-xl font-bold mb-4">Podsumowanie</h2>
    <div class="mb-4">
      <p>Poprawne odpowiedzi: {{ stats.correct }} / {{ stats.total }}</p>
      <p>Procent poprawnych: {{ Math.round((stats.correct / stats.total) * 100) }}%</p>
    </div>

    <div class="mb-4">
      <h3 class="font-bold mb-2">Szczegóły:</h3>
      <div v-for="(result, index) in results" :key="index" class="mb-2">
        <div :class="{'text-green-500': result.correct, 'text-red-500': !result.correct}">
          {{ isPolishToGerman 
              ? result.word.polish + ' → ' + result.word.article + ' ' + result.word.german 
              : result.word.article + ' ' + result.word.german + ' → ' + result.word.polish }}
          {{ result.correct ? '✓' : '✗' }}
        </div>
      </div>
    </div>

    <button 
      @click="startNewSession"
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Rozpocznij nową sesję
    </button>
  </div>
</template>