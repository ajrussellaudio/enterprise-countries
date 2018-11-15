import { FilterActionTypes, Language } from "./types";
import { setLanguage } from "./actions";
import { dummyLanguage } from "./testHelpers";

describe("Filter actions", () => {
  describe("SET_LANGUAGE", () => {
    it("returns an action with language as payload", () => {
      expect(setLanguage(dummyLanguage)).toEqual({
        type: FilterActionTypes.SET_LANGUAGE,
        payload: dummyLanguage
      });
    });
  });
});
