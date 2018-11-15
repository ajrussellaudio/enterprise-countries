import {
  getAllCountries,
  getLanguages,
  getCountriesByLanguage
} from "./selectors";
import { dummyCountries } from "./testHelpers";
import { ApplicationState } from "..";
import { Country } from "./types";

describe("getAllCountries", () => {
  it("gets all the countries in state", () => {
    const dummyState: ApplicationState = {
      countries: { list: dummyCountries, isLoading: false },
      filter: {}
    };
    expect(getAllCountries(dummyState)).toEqual(dummyCountries);
  });
});

describe("getAllLanguages", () => {
  it("gets all the languages, no duplicates", () => {
    const dummyState: ApplicationState = {
      countries: { list: dummyCountries, isLoading: false },
      filter: {}
    };
    const expectedLanguages = [
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
    ];
    expect(getLanguages(dummyState)).toEqual(expectedLanguages);
  });
});

describe("getCountriesByLanguage", () => {
  it("gets all the countries who speak the language whose ISO code is in the filter", () => {
    const dummyState: ApplicationState = {
      countries: { list: dummyCountries, isLoading: false },
      filter: { language: "wkn" }
    };
    const expectedCountries: Country[] = [dummyCountries[1]];
    expect(getCountriesByLanguage(dummyState)).toEqual(expectedCountries);
  });

  it("returns all countries when filter is empty", () => {
    const dummyState: ApplicationState = {
      countries: { list: dummyCountries, isLoading: false },
      filter: {}
    };
    const expectedCountries: Country[] = dummyCountries;
    expect(getCountriesByLanguage(dummyState)).toEqual(expectedCountries);
  });
});
