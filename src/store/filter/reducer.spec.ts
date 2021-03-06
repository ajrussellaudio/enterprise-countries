import { FilterState } from "./types";
import { filterReducer } from "./reducer";
import { dummyLanguage } from "./testHelpers";
import { setLanguage } from "./actions";

describe("filterReducer", () => {
  let state: FilterState;

  beforeEach(() => {
    state = filterReducer(undefined, { type: "" });
  });

  it("state is empty object by default", () => {
    const expectedState: FilterState = {};
    expect(state).toEqual(expectedState);
  });

  it("sets language in state", () => {
    const expectedState = { language: dummyLanguage.iso639_2 };
    const action = setLanguage(dummyLanguage.iso639_2);
    state = filterReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
