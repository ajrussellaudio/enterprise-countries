import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../store";
import { fetchCountries } from "../store/countries/actions";
import { getAllCountries } from "../store/countries/selectors";
import { connect } from "react-redux";
import { App } from "./App";

const mapStateToProps = (state: ApplicationState) => ({
  countries: getAllCountries(state)
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { fetchCountries: () => fetchCountries.request() },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);