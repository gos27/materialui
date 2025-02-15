import React from "react";
import BasicTextFields from "./BasicText";
import FormPropsTextFields from "./FormPropsTextFields";
import ValidationTextFields from "./ValidationTextFields";
import MultilineTextFields from "./MultilineTextFields";
import SelectTextFields from "./SelectTextFields";

const TextField = () => {
  return (
    <section>
      <h3>Text Field</h3>
      <BasicTextFields />
      <FormPropsTextFields />
      <ValidationTextFields />
      <MultilineTextFields />
      <SelectTextFields />
    </section>
  );
};

export default TextField;
