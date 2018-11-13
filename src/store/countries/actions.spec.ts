import { fetchCountries } from "./actions";
import { CountriesActionTypes, Country } from "./types";

describe("Countries actions", () => {
  describe("FETCH_REQUEST", () => {
    it("creates an action to fetch the countries", () => {
      expect(fetchCountries.request()).toEqual({
        type: CountriesActionTypes.FETCH_REQUEST
      });
    });
  });

  describe("FETCH_SUCCESS", () => {
    it("creates an action with countries as payload", () => {
      const dummyCountries: Country[] = [
        {
          name: "Latveria",
          population: 500000,
          capital: "Doomstadt",
          flag: "http://flags.com/latveria",
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
          population: 1000000,
          capital: "Birnin Zana",
          flag: "http://flags.com/wakanda",
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
      expect(fetchCountries.success(dummyCountries)).toEqual({
        type: CountriesActionTypes.FETCH_SUCCESS,
        payload: dummyCountries
      });
    });
  });

  describe("FETCH_FAILURE", () => {
    it("creates an action with error message as payload", () => {
      const errorMessage = "You died.";
      expect(fetchCountries.failure(errorMessage)).toEqual({
        type: CountriesActionTypes.FETCH_FAILURE,
        payload: errorMessage
      });
    });
  });
});
