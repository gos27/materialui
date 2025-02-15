import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const StarRating = () => {
  const [value, setValue] = React.useState(2);

  return (
    <section>
      <h3>Star Rating</h3>
      <div>
        <h4>Basic Rating</h4>
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography component="legend">Uncontrolled</Typography>
          <Rating
            name="simple-uncontrolled"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
            defaultValue={2}
          />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={value} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={null} />
        </Box>
      </div>
      <div>
        <h4>Precision Rating</h4>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Stack>
      </div>
    </section>
  );
};

export default StarRating;
