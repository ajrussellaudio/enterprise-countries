import * as React from "react";
import { shallow } from "enzyme";

import LanguageSelect, {
  LanguageSelectProps,
  mapLanguagesToOptions,
  mapLanguageToOption
} from "./LanguageSelect";
import Select from "../_generic/Select";
import { OptionProps } from "../_generic";
import { dummyLanguage } from "../../store/filter/testHelpers";
import { Language } from "../../store/filter/types";

const dummyLanguages: Language[] = [
  {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  },
  {
    iso639_1: "wk",
    iso639_2: "wkn",
    name: "Wakandan",
    nativeName: "Wakando"
  }
];

describe("LanguageSelect", () => {
  let props: LanguageSelectProps;

  beforeEach(() => {
    props = {
      languages: dummyLanguages,
      setLanguage: jest.fn()
    };
  });

  it("renders a Select", () => {
    const wrapper = shallow(<LanguageSelect {...props} />);
    expect(wrapper.find(Select)).toHaveLength(1);
  });
});

describe("mapLanguagesToOptions", () => {
  it("maps Languages to OptionProps", () => {
    const input = dummyLanguages;
    const actual: OptionProps[] = mapLanguagesToOptions(dummyLanguages);
    expect(actual.length).toBe(input.length);
  });
});

describe("mapLanguageToOption", () => {
  it("maps `name (native name)` to OptionProp.label", () => {
    const input = dummyLanguage;
    const actual = mapLanguageToOption(dummyLanguage);
    expect(actual.label).toBe(`${input.name} (${input.nativeName})`);
  });

  it("maps Language.iso639_2 to OptionProp.value", () => {
    const input = dummyLanguage;
    const optionProp = mapLanguageToOption(dummyLanguage);
    expect(optionProp.value).toBe(input.iso639_2);
  });
});
