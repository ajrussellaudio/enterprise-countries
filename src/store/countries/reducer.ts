import { CountriesState, CountriesActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: CountriesState = {
  list: [],
  isLoading: false
};

const reducer: Reducer<CountriesState> = (state = initialState, action) => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case CountriesActionTypes.FETCH_SUCCESS: {
      return { ...state, isLoading: false, list: action.payload };
    }
    case CountriesActionTypes.FETCH_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as countriesReducer };
