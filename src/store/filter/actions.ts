import { FilterActionTypes } from "./types";

export const setLanguage = (languageISOCode: string) => ({
  type: FilterActionTypes.SET_LANGUAGE,
  payload: languageISOCode
});
