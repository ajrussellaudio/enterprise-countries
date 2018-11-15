import React, { Component } from "react";
import { Country } from "../store/countries/types";
import LanguageSelect from "./LanguageSelect";

export interface AppProps {
  readonly countries: Country[];
  fetchCountries: Function;
}

export class App extends Component<AppProps> {
  static defaultProps = {
    countries: [],
    fetchCountries: () => {}
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const { countries } = this.props;
    return (
      <div className="App">
        <LanguageSelect />
        {countries.map(country => (
          <p key={country.alpha2Code}>{country.name}</p>
        ))}
      </div>
    );
  }
}
