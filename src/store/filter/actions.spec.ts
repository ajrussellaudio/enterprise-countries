import { FilterActionTypes } from "./types";
import { setLanguage } from "./actions";
import { dummyLanguage } from "./testHelpers";

describe("Filter actions", () => {
  describe("SET_LANGUAGE", () => {
    it("returns an action with language as payload", () => {
      expect(setLanguage(dummyLanguage.iso639_2)).toEqual({
        type: FilterActionTypes.SET_LANGUAGE,
        payload: dummyLanguage.iso639_2
      });
    });
  });
});
