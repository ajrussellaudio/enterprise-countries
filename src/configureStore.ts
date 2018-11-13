import { ApplicationState, rootReducer } from "./store";
import { Store, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(rootReducer, initialState);
}
