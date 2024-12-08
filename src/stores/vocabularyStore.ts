import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Word } from '../types/vocabulary';

export const useVocabularyStore = defineStore('vocabulary', () => {
  const words = ref<Word[]>([
  {
    "german": "Arbeitsgemeinschaft",
    "polish": "koło zainteresowań",
    "article": "die",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Lieblingsfach",
    "polish": "ulubiony przedmiot",
    "article": "das",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Lieblingsfächer",
    "polish": "ulubione przedmioty",
    "article": "die",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Lipgloss",
    "polish": "błyszczyk",
    "article": "der/das",
    "category": "rzeczy osobiste",
    "example": null
  },
  {
    "german": "Pausenbrot",
    "polish": "śniadanie do szkoły",
    "article": "das",
    "category": "jedzenie",
    "example": null
  },
  {
    "german": "Schulband-AG",
    "polish": "szkolny zespół muzyczny",
    "article": "die",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Schule",
    "polish": "szkoła",
    "article": "die",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Schulfach",
    "polish": "przedmiot szkolny",
    "article": "das",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Stundenplan",
    "polish": "plan lekcji",
    "article": "der",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Handy",
    "polish": "telefon komórkowy",
    "article": "das",
    "category": "technologia",
    "example": null
  },
  {
    "german": "Grundschule",
    "polish": "szkoła podstawowa",
    "article": "die",
    "category": "szkoła",
    "example": null
  },
  {
    "german": "Gymnasium",
    "polish": "gimnazjum",
    "article": "das",
    "category": "szkoła",
    "example": null
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