import { ApplicationState } from "..";

export const getAllCountries = (state: ApplicationState) =>
  state.countries.list;
