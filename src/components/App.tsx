import React, { Component } from "react";
import LanguageSelect from "./LanguageSelect";
import CountriesList from "./CountriesList";

export interface AppProps {
  fetchCountries: Function;
}

export class App extends Component<AppProps> {
  static defaultProps = {
    fetchCountries: () => {}
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    return (
      <div className="App">
        <LanguageSelect />
        <CountriesList />
      </div>
    );
  }
}
