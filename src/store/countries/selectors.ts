import { ApplicationState } from "..";
import { createSelector, Selector } from "reselect";
import { uniqBy, isEmpty } from "lodash";
import { Country } from "./types";
import { Language } from "../filter/types";
import { getFilter } from "../filter/selectors";

export const getAllCountries: Selector<ApplicationState, Country[]> = state =>
  state.countries.list;

export const getLanguages: Selector<
  ApplicationState,
  Language[]
> = createSelector(
  getAllCountries,
  (countries: Country[]) =>
    uniqBy(
      countries.reduce(
        (allLanguages: Language[], { languages }: Country) => [
          ...allLanguages,
          ...languages
        ],
        []
      ),
      "iso639_1"
    )
);

export const getCountriesByLanguage: Selector<
  ApplicationState,
  Country[]
> = createSelector(
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
