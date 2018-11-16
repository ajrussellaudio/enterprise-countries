import { ApplicationState } from "..";
import { Selector } from "reselect";
import { FilterState } from "./types";

export const getFilter: Selector<ApplicationState, FilterState> = (
  state: ApplicationState
) => state.filter;
