import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../store";
import { fetchCountries } from "../store/countries/actions";
import { connect } from "react-redux";
import { App } from "./App";

const mapStateToProps = (state: ApplicationState) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { fetchCountries: () => fetchCountries.request() },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
