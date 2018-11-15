import { ApplicationState } from "..";
import { createSelector } from "reselect";
import { uniqBy, isEmpty } from "lodash";
import { Country } from "./types";
import { Language } from "../filter/types";
import { getFilter } from "../filter/selectors";

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

export const getCountriesByLanguage = createSelector(
  [getAllCountries, getFilter],
  (countries: Country[], filter) =>
    isEmpty(filter)
      ? countries
      : countries.filter(country =>
          country.languages.some(
            language => language.iso639_2 === filter.language
          )
        )
);
