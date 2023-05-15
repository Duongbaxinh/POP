import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import them from "../../theme/them";
import { red } from "@mui/material/colors";
import Videos from "./Videos";
import All from "./All";
function ListSearch(props) {
  const { id } = useParams();
  console.log("param", id);
  const [active, setActive] = useState(1);
  const Component = [<All params={id} />, <Videos params={id} />];
  const Select = ["Tất Cả", "Videos", "Truyện Tranh"];
  return (
    <Stack p="0 45px">
      <Stack
        pt="80px"
        height="80px"
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap="30px"
        sx={{
          color: them.palette.my_white.main,
        }}
      >
        {Select.map((item, index) => (
          <Typography
            component={Box}
            key={index}
            variant="subtitle1"
            onClick={() => setActive(index)}
            sx={{
              cursor: "pointer",
              borderBottom: active === index ? `1px solid ${red[500]}` : "",
              color: active === index ? red[500] : them.palette.my_white.main,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      {Component.map((item, index) => (active === index ? item : ""))}
    </Stack>
  );
}

export default ListSearch;
