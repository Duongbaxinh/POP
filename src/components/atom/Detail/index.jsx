import { Box, Link, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useState } from "react";
import them from "@/components/theme/them";

Detail.propTypes = {};

function Detail(props) {
  const [full, setFull] = useState(true);
  const handleFull = () => {
    setFull(!full);
  };
  const { Data, exeption, link } = props;
  const lable = {
    link: (item) => (
      <Link
        href="trinhtham"
        sx={{
          textDecorationLine: "none",
          fontSize: "medium",
          fontWeight: "500",
          color: red[800],
        }}
      >
        {item}
      </Link>
    ),
    text: (item) => (
      <Typography
        component="span"
        style={{
          textDecorationLine: "none",
          fontSize: "medium",
          fontWeight: "500",
        }}
      >
        {item}
      </Typography>
    ),
  };
  return (
    <Stack
      direction="row"
      gap="20px"
      mb="73px"
      sx={{
        flexWrap: { xs: "wrap-reverse", md: "nowrap" },
      }}
    >
      {" "}
      <Box width="90%">
        <Typography
          variant="subtitle1"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
            height: `${!full ? "auto" : "144px"}`,
          }}
        >
          <Typography component="span" variant="subtitle1" color={grey[500]}>
            Mô Tả:
          </Typography>
          {Data.description}
        </Typography>

        <Typography
          variant="subtitle1"
          color={them.palette.my_white.main}
          onClick={handleFull}
          style={{
            cursor: "pointer",
            textDecorationLine: "underline",
          }}
        >
          {!full ? "Thu gọn" : "Xem Thêm"}
        </Typography>
      </Box>
      <Stack gap="10px">
        {Object.keys(Data).map((item, index) => {
          if (!exeption.includes(item)) {
            return (
              <Stack
                key={index}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="20px"
              >
                <Typography
                  component="span"
                  style={{
                    textTransform: "capitalize",
                    color: grey[500],
                    fontSize: "medium",
                    fontWeight: "500",
                  }}
                >
                  {item}:
                </Typography>
                {link.indexOf(item) !== -1
                  ? lable.link(Data[item])
                  : lable.text(Data[item])}
              </Stack>
            );
          }
        })}
      </Stack>
    </Stack>
  );
}

export default Detail;
