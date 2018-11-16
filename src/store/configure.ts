import { ApplicationState, rootReducer, rootEpic } from "./";
import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { from } from "rxjs";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON$: (url: string) => from(fetch(url).then(res => res.json()))
    }
  });
  const store = createStore(
    rootReducer,
    initialState as any,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic as any);
  return store;
}
