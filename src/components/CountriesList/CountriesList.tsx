import React from "react";
import { Country } from "../../store/countries/types";
import CountriesListItem from "./CountriesListItem";

export interface CountriesListProps {
  countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => (
  <React.Fragment>
    {countries.map(country => (
      <CountriesListItem key={country.alpha2Code} {...country} />
    ))}
  </React.Fragment>
);

export default CountriesList;
