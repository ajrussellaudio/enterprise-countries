import React from "react";
import { shallow } from "enzyme";
import CountriesListItem from "./CountriesListItem";
import CountriesList, { CountriesListProps } from "./CountriesList";
import { dummyCountries } from "../../store/countries/testHelpers";

describe("CountriesList", () => {
  let props: CountriesListProps;

  beforeEach(() => {
    props = {
      countries: dummyCountries
    };
  });

  it("renders a CountriesListItem for every country passed in", () => {
    const wrapper = shallow(<CountriesList {...props} />);
    expect(wrapper.find(CountriesListItem)).toHaveLength(
      props.countries.length
    );
  });
});
