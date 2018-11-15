import * as React from "react";
import Option, { OptionProps } from "./Option";

export interface SelectProps {
  placeholder: string;
  options: Array<OptionProps>;
  onChange: (value: any) => void;
}

export default (props: SelectProps) => {
  const { options, onChange, ...rest } = props;
  const optionNodes = options.map(option => (
    <Option key={option.label} {...option} />
  ));

  const handleChange: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => onChange(event.target.value);

  return (
    <select {...rest} onChange={handleChange}>
      {optionNodes}
    </select>
  );
};
