import React from "react";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Checkboxes = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <h3>Check Boxes</h3>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        color="success"
        size="large"
        inputProps={{
          "aria-label": "Checkbox A",
        }}
      />
      <Checkbox size="small" color="primary" />
      <Checkbox disabled />
      <Checkbox disabled checked color="default" />
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </div>
      <Box sx={{ display: "flex" }}></Box>
    </div>
  );
};

export default Checkboxes;
