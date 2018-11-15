import * as React from "react";
import { sortBy } from "lodash";
import Select from "../_generic/Select";
import { Language } from "../../store/filter/types";
import { OptionProps } from "../_generic";

export interface LanguageSelectProps {
  languages: Language[];
  setLanguage: (value: string) => void;
}

export const mapLanguageToOption = (language: Language): OptionProps => ({
  label: `${language.name} (${language.nativeName})`,
  value: language.iso639_2
});

export const mapLanguagesToOptions = (languages: Language[]): OptionProps[] =>
  sortBy(languages.map(mapLanguageToOption), "label");

const LanguageSelect = (props: LanguageSelectProps) => {
  return (
    <Select
      placeholder="Select a language..."
      options={mapLanguagesToOptions(props.languages)}
      onChange={props.setLanguage}
    />
  );
};

export default LanguageSelect;
