import { getAllCountries } from "./selectors";
import { dummyCountries } from "./testHelpers";
import { ApplicationState } from "..";

describe("getAllCountries", () => {
  it("gets all the countries in state", () => {
    const dummyState: ApplicationState = {
      countries: { list: dummyCountries, isLoading: false }
    };
    expect(getAllCountries(dummyState)).toEqual(dummyCountries);
  });
});
