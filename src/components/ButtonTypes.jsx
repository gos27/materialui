import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const ButtonTypes = () => {
  return (
    <>
      <div>
        <h3>Buttons</h3>
        <Button variant="outlined">Hello</Button>
        <Button variant="text">Hello</Button>
        <Button variant="contained" size="small">
          Hello
        </Button>
        <Button variant="contained" size="large">
          Hello
        </Button>
      </div>

      <div>
        <h3>Group Buttons</h3>
        <ButtonGroup>
          <Button variant="outlined" color="secondary">
            ONE
          </Button>
          <Button variant="contained" color="error">
            TWO
          </Button>
          <Button variant="contained" color="primary">
            THREE
          </Button>
          <Button variant="contained" color="success">
            Four
          </Button>
          <Button variant="text" color="success">
            five
          </Button>
          <Button color="success">SIX</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ButtonTypes;
