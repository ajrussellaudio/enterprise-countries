import { switchMap, map, catchError } from "rxjs/operators";
import { URL } from "../constants";
import { Epic } from "redux-observable";
import { from, of, pipe } from "rxjs";
import { fetchCountries, CountriesAction } from "./actions";
import { CountriesActionTypes } from "./types";

const fetchJSON = (url: string) => from(fetch(url).then(res => res.json()));

export const fetchCountriesEpic: Epic<
  CountriesAction,
  CountriesAction,
  any,
  any
> = (action$, state, { getJSON$ = fetchJSON }) =>
  action$.ofType(CountriesActionTypes.FETCH_REQUEST).pipe(
    switchMap(() =>
      getJSON$(URL).pipe(
        map(response => fetchCountries.success(response)),
        catchError(
          pipe(
            fetchCountries.failure,
            of
          )
        )
      )
    )
  );
