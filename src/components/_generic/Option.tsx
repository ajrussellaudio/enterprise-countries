import * as React from "react";

export interface OptionProps {
  label: string;
  value?: any;
}

const Option: React.SFC<OptionProps> = ({ label, value }) => (
  <option value={value || label}>{label}</option>
);

export default Option;
