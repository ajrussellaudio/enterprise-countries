import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Select, { SelectProps } from "./Select";
import Option from "./Option";

describe("Select", () => {
  let props: SelectProps, placeholderText: string;

  beforeEach(() => {
    placeholderText = "PLACEHOLDER_TEXT";
    props = {
      placeholder: placeholderText,
      options: [
        {
          label: "LABEL_1",
          value: "VALUE_1"
        },
        {
          label: "LABEL_2",
          value: "VALUE_2"
        }
      ],
      onChange: jest.fn()
    };
  });

  it("renders a select", () => {
    const wrapper: ShallowWrapper = shallow(<Select {...props} />);
    expect(wrapper.find("select").length).toBe(1);
  });

  it("renders a select with placeholder text", () => {
    const wrapper: ShallowWrapper = shallow(<Select {...props} />);
    expect(wrapper.find("select").prop("placeholder")).toBe(placeholderText);
  });

  it("renders an Option component for every item in options props", () => {
    const wrapper: ShallowWrapper = shallow(<Select {...props} />);
    expect(wrapper.find(Option).length).toBe(props.options.length);
  });

  it("calls a props.onChange function when changed", () => {
    const VALUE_TEXT = "VALUE_TEXT";
    const wrapper: ShallowWrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: VALUE_TEXT } });
    expect(props.onChange).toHaveBeenCalledWith(VALUE_TEXT);
  });
});
