import { switchMap, map, catchError } from "rxjs/operators";
import { URL } from "../constants";
import { ActionsObservable, ofType } from "redux-observable";
import { from, of, pipe } from "rxjs";
import { fetchCountries, CountriesAction } from "./actions";
import { CountriesActionTypes, CountriesState } from "./types";

const fetchJSON = (url: string) => from(fetch(url).then(res => res.json()));

export const fetchCountriesEpic = (
  action$: ActionsObservable<CountriesAction>,
  state: CountriesState | null,
  { getJSON$ = fetchJSON }
) =>
  action$.pipe(
    ofType(CountriesActionTypes.FETCH_REQUEST),
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
