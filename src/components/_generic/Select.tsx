import * as React from "react";
import Option, { OptionProps } from "./Option";

export interface SelectProps {
  placeholder: string;
  options: Array<OptionProps>;
  onChange: (value: any) => void;
}

const Select: React.SFC<SelectProps> = ({ options, onChange, ...rest }) => {
  const optionNodes = options.map(option => (
    <Option key={option.label} {...option} />
  ));

  const handleChange: React.ChangeEventHandler = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => onChange(value);

  return (
    <select {...rest} onChange={handleChange}>
      {optionNodes}
    </select>
  );
};

export default Select;
