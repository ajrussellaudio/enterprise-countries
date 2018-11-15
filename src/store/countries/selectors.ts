import { ApplicationState } from "..";
import { createSelector } from "reselect";
import { uniqBy } from "lodash";
import { Country } from "./types";
import { Language } from "../filter/types";

export const getAllCountries = (state: ApplicationState) =>
  state.countries.list;

export const getLanguages = createSelector(
  getAllCountries,
  (countries: Country[]) =>
    uniqBy(
      countries.reduce(
        (languages: Language[], country: Country) => [
          ...languages,
          ...country.languages
        ],
        []
      ),
      "iso639_1"
    )
);
