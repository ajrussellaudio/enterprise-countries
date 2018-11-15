import { ApplicationState } from "..";
import { dummyCountries } from "../countries/testHelpers";
import { dummyLanguage } from "./testHelpers";
import { getFilter } from "./selectors";

describe("Filter selectors", () => {
  let state: ApplicationState;

  beforeEach(() => {
    state = {
      countries: {
        list: dummyCountries,
        isLoading: false
      },
      filter: { language: dummyLanguage }
    };
  });

  it("gets the whole filter from state", () => {
    expect(getFilter(state)).toEqual({ language: dummyLanguage });
  });
});
