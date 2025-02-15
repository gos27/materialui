import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const RadioGroupOption = () => {
  const [selectedValue, setSelectedValue] = useState("b");
  const [gender, setGender] = useState("female"); // Control gender radio group

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <div>
        <h3>Radio Button</h3>
        <FormControl>
          <FormLabel>Choose an Option</FormLabel>
          <RadioGroup value={selectedValue} onChange={handleChange}>
            <FormControlLabel
              value="a"
              control={<Radio color="secondary" />}
              label="Option A"
            />
            <FormControlLabel
              value="b"
              control={<Radio color="success" />}
              label="Option B"
            />
            <FormControlLabel
              value="c"
              control={<Radio color="error" />}
              label="Option C"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <hr />
      <h3>Size</h3>
      <Radio {...controlProps("a")} size="small" />
      <Radio {...controlProps("b")} />
      <Radio
        {...controlProps("c")}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 28,
          },
        }}
      />

      <hr />

      <div>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            name="gender-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>

      <hr />

      <div>
        <FormControl>
          <FormLabel>Gender (Row Layout)</FormLabel>
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            name="gender-row-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="Disabled"
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </div>
    </>
  );
};

export default RadioGroupOption;
