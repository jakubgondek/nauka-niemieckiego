import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Word } from '../types/vocabulary';

export const useVocabularyStore = defineStore('vocabulary', () => {
  const words = ref<Word[]>([
  {
    "german": "Arbeitsgemeinschaft",
    "polish": "koło zainteresowań",
    "article": "die",
    "category": "szkoła"
  },
  {
    "german": "Lieblingsfach",
    "polish": "ulubiony przedmiot",
    "article": "das",
    "category": "szkoła"
  },
  {
    "german": "Lieblingsfächer",
    "polish": "ulubione przedmioty",
    "article": "die",
    "category": "szkoła"
  },
  {
    "german": "Lipgloss",
    "polish": "błyszczyk",
    "article": "das",
    "category": "rzeczy osobiste"
  },
  {
    "german": "Pausenbrot",
    "polish": "śniadanie do szkoły",
    "article": "das",
    "category": "jedzenie"
  },
  {
    "german": "Schulband-AG",
    "polish": "szkolny zespół muzyczny",
    "article": "die",
    "category": "szkoła"
  },
  {
    "german": "Schule",
    "polish": "szkoła",
    "article": "die",
    "category": "szkoła"
  },
  {
    "german": "Schulfach",
    "polish": "przedmiot szkolny",
    "article": "das",
    "category": "szkoła"
  },
  {
    "german": "Stundenplan",
    "polish": "plan lekcji",
    "article": "der",
    "category": "szkoła"
  },
  {
    "german": "Handy",
    "polish": "telefon komórkowy",
    "article": "das",
    "category": "technologia"
  },
  {
    "german": "Grundschule",
    "polish": "szkoła podstawowa",
    "article": "die",
    "category": "szkoła"
  },
  {
    "german": "Gymnasium",
    "polish": "gimnazjum",
    "article": "das",
    "category": "szkoła"
  }
]);

  const getRandomWord = (): Word => {
    const randomIndex = Math.floor(Math.random() * words.value.length);
    return words.value[randomIndex];
  };

  const getWordsByCategory = (category: string): Word[] => {
    return words.value.filter(word => word.category === category);
  };

  return {
    words,
    getRandomWord,
    getWordsByCategory
  };
});