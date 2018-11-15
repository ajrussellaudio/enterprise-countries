import { combineReducers, Reducer } from "redux";
import { CountriesState } from "./countries/types";
import { countriesReducer } from "./countries/reducer";
import { fetchCountriesEpic } from "./countries/epics";
import { Epic, combineEpics } from "redux-observable";
import { FilterState } from "./filter/types";
import { filterReducer } from "./filter/reducer";

export interface ApplicationState {
  countries: CountriesState;
  filter: FilterState;
}

export const rootReducer: Reducer = combineReducers<ApplicationState>({
  countries: countriesReducer,
  filter: filterReducer
});

export const rootEpic = combineEpics(fetchCountriesEpic);
