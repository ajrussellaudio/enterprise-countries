import { combineReducers, Reducer } from "redux";
import { CountriesState } from "./countries/types";
import { countriesReducer } from "./countries/reducer";
import { fetchCountriesEpic } from "./countries/epics";
import { Epic, combineEpics } from "redux-observable";

export interface ApplicationState {
  countries: CountriesState;
}

export const rootReducer: Reducer = combineReducers<ApplicationState>({
  countries: countriesReducer
});

export const rootEpic = combineEpics(fetchCountriesEpic);
