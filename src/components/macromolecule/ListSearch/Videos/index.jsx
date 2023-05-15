import { Box, Stack } from "@mui/material";
import React from "react";
import BoxSearch from "@/components/atom/BoxSearch";
import ListVideos from "../ListVideos";

Videos.propTypes = {};

function Videos({ params }) {
  console.log("params at videos", params);
  const searchData = [
    { id: 1, name: "Doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "Onpice" },
    { id: 6, name: "Dragon supper" },
  ];
  return (
    <Stack
      mt="30px"
      direction="row"
      width="100%"
      gap="30px"
      flexWrap={{ lg: "nowrap", xs: "wrap" }}
    >
      <Box width={{ lg: "80%", sm: "700px", xs: "100%" }}>
        <ListVideos params={params} />
      </Box>
      <Box>
        <BoxSearch searchData={searchData} />
      </Box>
    </Stack>
  );
}

export default Videos;
