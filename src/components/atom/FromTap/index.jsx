import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import { grey } from "@mui/material/colors";
import React from "react";
import them from "../../theme/them";

function FormTap(props) {
  const { Data } = props;
  return (
    <Stack direction="row" gap="16px" width="100%" mt="20px">
      <Box
        sx={{
          width: "272px",
          height: "153px",
          overflow: "hidden",
          borderRadius: "5px",
          "&:hover": {
            boxShadow: "0px 0px 18px red",
          },
          "&:hover  img": {
            cursor: "pointer",
            filter: "drop-shadow(8px 8px 10px red)",
            transform: "scale(1.1)",
          },
        }}
      >
        <img
          src={Data.avarta}
          alt={Data.avarta}
          style={{
            width: "100%",
            height: "100%",
            transition: "0.5s",
          }}
        />
      </Box>
      <Stack justifyContent="space-between" width="414px" gap="12px">
        <Typography variant="h3">{Data.name}</Typography>
        {props.children}
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" justifyContent="center">
            <RefreshIcon htmlColor={grey} />
            <Typography variant="body2" component="span">
              {Data.time}
            </Typography>
          </Stack>
          <IconButton>
            <AddCircleOutlineOutlinedIcon
              htmlColor={them.palette.my_white.main}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FormTap;
