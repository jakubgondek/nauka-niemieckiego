import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Word } from '../types/vocabulary';

export const useVocabularyStore = defineStore('vocabulary', () => {
  const words = ref<Word[]>([
    {
       "german": "Arbeitsgemeinschaft",
       "polish": "koło zainteresowań",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Arbeitsgemeinschaften",
       "polish": "koła zainteresowań",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Bio-AG",
       "polish": "koło biologiczne",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Computer-AG",
       "polish": "koło informatyczne",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Gitarre",
       "polish": "gitara",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Grundschule",
       "polish": "szkoła podstawowa",
       "article": "die",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Gymnasium",
       "polish": "gimnazjum",
       "article": "das",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Handy",
       "polish": "telefon komórkowy",
       "article": "das",
       "category": "technologia",
       "example": ""
    },
    {
       "german": "Lieblingsfach",
       "polish": "ulubiony przedmiot",
       "article": "das",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Lieblingsfächer",
       "polish": "ulubione przedmioty",
       "article": "die",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Lipgloss",
       "polish": "błyszczyk",
       "article": "das",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Pausenbrot",
       "polish": "śniadanie do szkoły",
       "article": "das",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Schulband-AG",
       "polish": "szkolny zespół muzyczny",
       "article": "die",
       "category": "inne",
       "example": ""
    },
    {
       "german": "Schule",
       "polish": "szkoła",
       "article": "die",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Schulfach",
       "polish": "przedmiot szkolny",
       "article": "das",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Schulfächer",
       "polish": "przedmioty szkolne",
       "article": "die",
       "category": "edukacja",
       "example": ""
    },
    {
       "german": "Stundenplan",
       "polish": "plan lekcji",
       "article": "der",
       "category": "edukacja",
       "example": ""
    },

    {
      "german": "Bio-AG besuchen",
      "polish": "uczęszczać na zajęcia koła biologicznego",
      "article": "die",
      "category": "edukacja",
      "example": ""
   },
   {
      "german": "Bücher lesen",
      "polish": "czytać książki",
      "category": "edukacja",
      "example": ""
   },
   {
      "german": "Gymnastik machen",
      "polish": "uprawiac gimnastykę",
      "category": "inne",
      "example": ""
   },
   {
      "german": "im Internet surfen",
      "polish": "serfować po Internecie",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Mathe lernen",
      "polish": "uczyć sie matematyki",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Rätsel lösen",
      "polish": "rozwiazywać zagadki",
      "category": "inne",
      "example": ""
   },
   {
      "german": "die Schule besuchen",
      "polish": "uczęszczać do szkoły",
      "category": "inne",
      "example": ""
   },
   {
      "german": "singen",
      "polish": "spiewać",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Lieder singen",
      "polish": "spiewać piosenki",
      "category": "inne",
      "example": ""
   },
   {
      "german": "sprechen",
      "polish": "rozmawiać",
      "category": "inne",
      "example": ""
   },
   {
      "german": "auf Deutsch sprechen",
      "polish": "rozmawiać po niemiecku",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Texte hören",
      "polish": "słuchać tekstów",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Was ist dein Lieblingsfach?",
      "polish": "Jaki jest two ulubiony przedmiot?",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Mein Lieblingsfach ist...",
      "polish": "Moim ulubionym przedmiotem jest...",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Was magst du?",
      "polish": "Co lubisz?",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Was magst du nicht?",
      "polish": "Czego nie lubisz?",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Wie findest du Biologie?",
      "polish": "Co sądzisz o biologii?",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich mag ... am liebsten.",
      "polish": "Najbardziej lubię...",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich liebe...",
      "polish": "Uwielbiam/Kocham...",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich mag Musik nicht.",
      "polish": "Nie lubie muzyki.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich hasse...",
      "polish": "Nienawidze...",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich finde ... cool.",
      "polish": "Sądze, że ... jest fajny.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Geografie ist interessant.",
      "polish": "Geografia jest interesujaca.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Mathematik ist langweilig.",
      "polish": "Matematyka jest nudna.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Note",
      "polish": "ocena",
      "article": "die",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Noten",
      "polish": "oceny",
      "article": "die",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich bin gut in der Schule.",
      "polish": "Ucze sie dobrze.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich bin nicht gut in der Schule.",
      "polish": "Ucze sie niedobrze.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Ich bin gut in Englisch.",
      "polish": "Jestem dobry z jezyka angielskiego.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "In Deutsch habe ich eine Eins.",
      "polish": "Zjezyka niemieckiego mam 1.",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Englischtag",
      "polish": "dzień angielski",
      "article": "der",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Karaoke-Show",
      "polish": "konkurs śpiewania karaoke",
      "article": "die",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Olympiade",
      "polish": "olimpiada",
      "article": "die",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Schulfest",
      "polish": "święto szkolne",
      "article": "das",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Sportfest",
      "polish": "świeto sportu",
      "article": "das",
      "category": "inne",
      "example": ""
   },
   {
      "german": "Tanzturnier",
      "polish": "turniej tańca",
      "article": "das",
      "category": "inne",
      "example": ""
   },
   {
      "german": "cool",
      "polish": "fajny",
      "category": "inne",
      "example": ""
   },
   {
      "german": "freundlich",
      "polish": "miły",
      "category": "inne",
      "example": ""
   },
   {
      "german": "humorlos",
      "polish": "bez poczucia humoru",
      "category": "inne",
      "example": ""
   },
   {
      "german": "humorvoll",
      "polish": "z poczuciem humor",
      "category": "inne",
      "example": ""
   },
   {
      "german": "intelligent",
      "polish": "inteligentny",
      "category": "inne",
      "example": ""
   },
   {
      "german": "nervös",
      "polish": "nerwowy",
      "category": "inne",
      "example": ""
   },
   {
      "german": "sympathisch",
      "polish": "sympatyczny",
      "category": "inne",
      "example": ""
   }
 ]
);

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