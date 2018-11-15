import * as React from "react";
import { shallow } from "enzyme";

import Option, { OptionProps } from "./Option";

describe("Option", () => {
  let props: OptionProps, labelText: string;

  beforeEach(() => {
    labelText = "OPTION_LABEL";
    props = { label: labelText };
  });

  it("renders an option", () => {
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.find("option").length).toEqual(1);
  });

  it("renders an option with label", () => {
    const wrapper = shallow(<Option {...props} />);
    expect(
      wrapper
        .find("option")
        .children()
        .text()
    ).toEqual(labelText);
  });

  it("renders an option with value", () => {
    const value = "TEST_VALUE";
    const propsWithValue: OptionProps = {
      ...props,
      value
    };
    const wrapper = shallow(<Option {...propsWithValue} />);
    expect(wrapper.find("option").prop("value")).toBe(value);
  });

  it("value defaults to label", () => {
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.find("option").prop("value")).toBe(labelText);
  });
});
