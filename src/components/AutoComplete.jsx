import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const top100Films = [
  { label: "The Lords of the Rings", year: 2003 },
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Dark Knight", year: 2008 },
  { label: "Pulp Fiction", year: 1994 },
];

const AutoComplete = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={top100Films} // Added options
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default AutoComplete;
