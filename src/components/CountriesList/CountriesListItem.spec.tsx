import React from "react";
import { shallow } from "enzyme";
import CountriesListItem from "./CountriesListItem";
import { dummyCountries } from "../../store/countries/testHelpers";
import { Country } from "../../store/countries/types";

describe("CountriesListItem", () => {
  const testCountry = dummyCountries[0];
  let props: Country;

  beforeEach(() => {
    props = { ...testCountry };
  });

  it("renders an article with class media", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("article.media")).toHaveLength(1);
  });

  it("renders an image whose src is the country flag", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    const image = wrapper.find("img");
    expect(image.prop("src")).toBe(testCountry.flag);
  });

  it("renders an image whose alt contains the country name", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    const image = wrapper.find("img");
    expect(image.prop("alt")).toContain(testCountry.name);
  });

  it("renders a strong country name", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("strong.name")).toHaveLength(1);
    expect(wrapper.find("strong.name").text()).toContain(testCountry.name);
  });

  it("renders a small region", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("small.region")).toHaveLength(1);
    expect(wrapper.find("small.region").text()).toContain(testCountry.region);
  });

  it("renders a small subregion", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("small.subregion")).toHaveLength(1);
    expect(wrapper.find("small.subregion").text()).toContain(
      testCountry.subregion
    );
  });

  it("renders a p tag with population as readable number", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("p.population")).toHaveLength(1);
    expect(wrapper.find("p.population").text()).toContain(
      testCountry.population.toLocaleString()
    );
  });

  it("renders a p tag with the capital city", () => {
    const wrapper = shallow(<CountriesListItem {...props} />);
    expect(wrapper.find("p.capital")).toHaveLength(1);
    expect(wrapper.find("p.capital").text()).toContain(testCountry.capital);
  });
});
