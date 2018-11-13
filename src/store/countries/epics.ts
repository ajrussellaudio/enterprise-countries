import { switchMap, map, catchError } from "rxjs/operators";
import { URL } from "../constants";
import { ActionsObservable, ofType } from "redux-observable";
import { of, pipe } from "rxjs";
import { fetchCountries, CountriesAction } from "./actions";
import { Country, CountriesActionTypes, CountriesState } from "./types";

export const fetchCountriesEpic = (
  action$: ActionsObservable<CountriesAction>,
  state: CountriesState | null,
  { getJSON$ }: { getJSON$: (url: string) => any }
) =>
  action$.pipe(
    ofType(CountriesActionTypes.FETCH_REQUEST),
    switchMap(() =>
      getJSON$(URL).pipe(
        map((response: Country[]) => fetchCountries.success(response)),
        catchError(
          pipe(
            fetchCountries.failure,
            of
          )
        )
      )
    )
  );
