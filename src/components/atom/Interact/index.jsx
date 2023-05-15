import React, { useState } from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";
import XemThem from "./XemThem";
import Comment from "./Comment";
import { Box, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import them from "../../theme/them";

Interact.propTypes = {};

function Interact({ Data }) {
  const Select = ["Tập", "Xem thêm", "Bình luận"];
  const Component = [
    <Tap data={Data} />,
    <XemThem queryName={Data.mainName} />,
    <Comment />,
  ];
  const [isActive, setIsActive] = useState(1);
  const handleFull = () => {
    setFull(!full);
  };
  return (
    <Box>
      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="50px"
        mb="23px"
        gap="15px"
        sx={{
          backgroundColor: grey[900],
        }}
      >
        {Select.map((item, index) => (
          <Typography
            variant="h3"
            onClick={() => setIsActive(index)}
            key={index}
            sx={{
              cursor: "pointer",
              color: isActive === index ? red[200] : them.palette.my_white.main,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      {Component.map((item, index) => (isActive === index ? item : ""))}
    </Box>
  );
}

export default Interact;
