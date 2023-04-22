import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

BoxCard.propTypes = {};

function BoxCard(props) {
  return (
    <Box
      {...props}
      mt="20px"
      sx={{
        overflow: "hidden",
        borderRadius: "5px",
        "&:hover": {
          boxShadow: "0 0 20px red",
        },
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      {props.children}
    </Box>
  );
}

export default BoxCard;
