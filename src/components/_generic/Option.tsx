import * as React from "react";

export interface OptionProps {
  label: string;
  value?: any;
}

export default (props: OptionProps) => {
  const { label, value } = props;
  return <option value={value || label}>{label}</option>;
};
