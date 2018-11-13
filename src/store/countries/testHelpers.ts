import { Country } from "./types";

export const dummyCountries: Country[] = [
  {
    name: "Latveria",
    alpha2Code: "LV",
    population: 500000,
    capital: "Doomstadt",
    flag: "http://flags.com/latveria.png",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English"
      }
    ]
  },
  {
    name: "Wakanda",
    alpha2Code: "WK",
    population: 1000000,
    capital: "Birnin Zana",
    flag: "http://flags.com/wakanda.png",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English"
      },
      {
        iso639_1: "wk",
        iso639_2: "wkn",
        name: "Wakandan",
        nativeName: "Wakando"
      }
    ]
  }
];
