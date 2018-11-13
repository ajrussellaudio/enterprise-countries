import { createAsyncAction } from "typesafe-actions";
import { CountriesActionTypes, Country } from "./types";

export type CountriesAction = {
  type: string;
  payload?: Country[] | string;
};

export const fetchCountries = createAsyncAction(
  CountriesActionTypes.FETCH_REQUEST,
  CountriesActionTypes.FETCH_SUCCESS,
  CountriesActionTypes.FETCH_FAILURE
)<void, Country[], string>();
