import { CountriesState } from "./countries/types";
import { combineReducers, Reducer } from "redux";
import { countriesReducer } from "./countries/reducer";

export interface ApplicationState {
  countries: CountriesState;
}

export const rootReducer: Reducer = combineReducers<ApplicationState>({
  countries: countriesReducer
});
