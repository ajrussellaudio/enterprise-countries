import { TestScheduler } from "rxjs/testing";

import { fetchCountriesEpic } from "./epics";
import { CountriesActionTypes } from "./types";
import { ActionsObservable } from "redux-observable";

describe("fetchCountriesEpic", () => {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  it("fetches the countries", () => {
    scheduler.run(helpers => {
      const { hot, cold, expectObservable } = helpers;
      const action$ = ActionsObservable.from(
        hot("-a", {
          a: { type: CountriesActionTypes.FETCH_REQUEST }
        })
      );
      const state = null;
      const services = {
        getJSON$: () =>
          cold("---a", {
            a: []
          })
      };
      const output$ = fetchCountriesEpic(action$, state, services);
      expectObservable(output$).toBe("----a", {
        a: {
          type: CountriesActionTypes.FETCH_SUCCESS,
          payload: []
        }
      });
    });
  });
});
