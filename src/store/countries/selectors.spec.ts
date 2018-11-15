import { getAllCountries, getLanguages } from "./selectors";
import { dummyCountries } from "./testHelpers";
import { ApplicationState } from "..";

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
