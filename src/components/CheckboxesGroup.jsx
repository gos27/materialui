import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    bolade: true,
    folashade: false,
    gos: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { bolade, folashade, gos } = state;
  const error = [bolade, folashade, gos].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bolade}
                onChange={handleChange}
                name="bolade"
              />
            }
            label="Bolade Ayodeji"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={folashade}
                onChange={handleChange}
                name="folashade"
              />
            }
            label="Sikirat Folashade"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gos} onChange={handleChange} name="gos" />
            }
            label="Abolade GOS"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bolade}
                onChange={handleChange}
                name="bolade"
              />
            }
            label="Bolade Ayodeji"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={folashade}
                onChange={handleChange}
                name="folashade"
              />
            }
            label="Sikirat Folashade"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gos} onChange={handleChange} name="gos" />
            }
            label="Abolade GOS"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}
