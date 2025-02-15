import React from "react";
import BasicSelect from "./BasicSelect";
import FilledSelect from "./FilledSelect";
import SelectLabels from "./LabelHelper";
import SelectOtherProps from "./SelectOtherProps";

const Select = () => {
  return (
    <section>
      <h3>Select Options</h3>
      <BasicSelect />
      <FilledSelect />
      <SelectLabels />
      <SelectOtherProps />
    </section>
  );
};

export default Select;
