import { countriesReducer } from "./reducer";
import { CountriesState, Country } from "./types";
import { fetchCountries } from "./actions";

describe("countriesReducer", () => {
  let state: CountriesState;

  beforeEach(() => {
    state = countriesReducer(undefined, { type: "" });
  });

  it("initial state is empty list and not loading", () => {
    const expectedState = {
      list: [],
      isLoading: false
    };
    expect(state).toEqual(expectedState);
  });

  it("on request, sets isLoading to true", () => {
    const expectedState = {
      list: [],
      isLoading: true
    };
    const action = fetchCountries.request();
    state = countriesReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("on success, sets list to action payload, sets isLoading to false", () => {
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
    const expectedState = {
      list: dummyCountries,
      isLoading: false
    };
    const action = fetchCountries.success(dummyCountries);
    state = countriesReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("on failure, sets error to message, sets isLoading to false", () => {
    const errorMessage = "Uh oh.";
    const expectedState = {
      list: [],
      isLoading: false,
      error: errorMessage
    };
    const action = fetchCountries.failure(errorMessage);
    state = countriesReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
