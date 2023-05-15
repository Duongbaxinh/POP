import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import BoxSearch from "@/components/atom/BoxSearch";
import ListVideos from "../ListVideos";

All.propTypes = {};

function All({ params }) {
  const searchData = [
    { id: 1, name: "Doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "Onpice" },
    { id: 6, name: "Dragon supper" },
  ];
  return (
    <Stack mt="30px" direction="row" gap="30px">
      <Stack width={{ lg: "75%", sm: "700px", xs: "100%" }}>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Typography variant="h3">Video</Typography>
          <Typography variant="h3" color={red[500]}>
            Xem tất cả video
          </Typography>
        </Stack>
        <Box width="100%">
          <ListVideos params={params} />
        </Box>
      </Stack>
      <BoxSearch searchData={searchData} />
    </Stack>
  );
}

export default All;
