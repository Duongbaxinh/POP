import { Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

Myform.propTypes = {};

function Myform(props) {
  const { TitleButton, handleSumited } = props;
  return (
    <Stack width="100%" gap="16px" component="form" onSubmit={handleSumited}>
      {props.children}
      <Button
        type="submit"
        variant="contained"
        sx={{
          height: "44px",
          backgroundColor: grey[500],
          "&:hover": {
            backgroundColor: grey[700],
          },
        }}
      >
        {TitleButton}
      </Button>
    </Stack>
  );
}

export default Myform;
