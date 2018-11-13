import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "./store";
import { fetchCountries } from "./store/countries/actions";
import { connect } from "react-redux";

interface AppProps {
  fetchCountries: Function;
}

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return <div className="App">App. Yeah</div>;
  }
}

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
