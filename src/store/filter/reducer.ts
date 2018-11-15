import { FilterState, FilterActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: FilterState = {};

export const filterReducer: Reducer<FilterState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FilterActionTypes.SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
