import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import FormTap from "../../FromTap";
function Tap({ data }) {
  const colors = useTheme()
  return (
    <Box
      width={{ xs: "100%", lg: "770px" }}
      margin="0 auto"
      p="32px"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >

      <Box
        color={colors.palette.my_white.main}
        sx={{
          textDecorationLine: "none",
        }}
        component={Link}
        href={`/watch/views/${data._id}`}
      >
        <FormTap data={data}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" justifyContent="center">
              <RefreshIcon htmlColor={grey[500]} />
              <Typography variant="body2" component="span">
                {'1 hour 23 minutes'}
              </Typography>
            </Stack>
            <IconButton>
              <AddCircleOutlineIcon htmlColor={colors.palette.my_white.main} />
            </IconButton>
          </Stack>
        </FormTap>
      </Box>
    </Box>
  );
}

export default Tap;
