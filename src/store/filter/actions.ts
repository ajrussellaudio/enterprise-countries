import { FilterActionTypes, Language } from "./types";

export const setLanguage = (language: Language) => ({
  type: FilterActionTypes.SET_LANGUAGE,
  payload: language
});
