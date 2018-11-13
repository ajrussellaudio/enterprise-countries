import { fetchCountries } from "./actions";
import { CountriesActionTypes } from "./types";
import { dummyCountries } from "./testHelpers";

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
