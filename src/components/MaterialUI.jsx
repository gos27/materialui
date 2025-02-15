import React from "react";
import Checkboxes from "./Checkbox";
import ButtonTypes from "./ButtonTypes";
import AutoComplete from "./AutoComplete";
import CheckboxesGroup from "./CheckboxesGroup";
import RadioGroupOption from "./RadioGroup";
import ErrorRadios from "./ErrorRadios";
import BpIcon from "./BpIcon";
import StarRating from "./StarRating";
import Select from "./Select/Select";
import Switch from "./Switch/Switch";
import TextField from "./TextField/TextField";
import Transfer from "./Transfer/Transfer";
import Avatar from "./ImageAvatar/Avatar";
// import Badge from "./Badge/Badge";

const MaterialUI = () => {
  return (
    <>
      <h1 sx={{ display: "flex" }}>Material UI Components</h1>
      <ButtonTypes />
      <AutoComplete />
      <Checkboxes />
      <CheckboxesGroup />
      <RadioGroupOption />
      <ErrorRadios />
      <BpIcon />
      <StarRating />
      <Select />
      <Switch />
      <TextField />
      <Transfer />
      <Avatar />
      {/* <Badge /> */}
    </>
  );
};

export default MaterialUI;
