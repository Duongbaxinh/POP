import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import FormTap from "../../FromTap";
import them from "@/components/theme/them";
function Tap({ data }) {
  const Data = {
    name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
    Bí Ẩn Màu Đen ~ Tập full`,
    time: "1 hour 23 minutes",
    avarta:
      "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/horizontal_poster-9fe8f0f24ace-1680747333183-4h5vYtqd.jpg?v=0&maxW=460&format=webp",
  };
  const select = ["Tập", "Trailler"];
  const [appear, setAppear] = useState(false);
  const handleAppear = () => {
    setAppear(!appear);
  };
  const [tap, setTap] = useState(select[0]);
  const handleSelect = (index) => {
    setTap(select[index]);
    setAppear(!appear);
  };
  return (
    <Box
      width="770px"
      margin="0 auto"
      p="32px"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      <Box>
        <Stack
          position="relative"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="0 10px"
          borderRadius="5px"
          width="200px"
          height="50px"
          sx={{
            backgroundColor: grey[800],
          }}
        >
          <Link
            href={`${tap}`}
            style={{
              color: them.palette.my_white.main,
            }}
          >
            {tap}
          </Link>
          <IconButton onClick={handleAppear}>
            <ArrowDropDownIcon htmlColor={them.palette.my_white.main} />
          </IconButton>
          <Box
            position="absolute"
            top="50px"
            left="0"
            width="300px"
            pl="10px"
            sx={
              appear
                ? {
                    backgroundColor: grey[900],
                  }
                : { display: "none", backgroundColor: grey[900] }
            }
          >
            {select.map((item, index) => (
              <Typography
                key={index}
                onClick={() => handleSelect(index)}
                mr="10px"
                lineHeight="50px"
                variant="subtitle1"
                sx={{
                  borderBottom: "1px solid red",
                  color: `${them.palette.my_white.main} !important`,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
      <Box
        color={them.palette.my_white.main}
        sx={{
          textDecorationLine: "none",
        }}
        component={Link}
        href={`/watch/views/${data.id}`}
      >
        <FormTap data={data}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" justifyContent="center">
              <RefreshIcon htmlColor={grey} />
              <Typography variant="body2" component="span">
                {Data.time}
              </Typography>
            </Stack>
            <IconButton>
              <AddCircleOutlineIcon htmlColor={them.palette.my_white.main} />
            </IconButton>
          </Stack>
        </FormTap>
      </Box>
    </Box>
  );
}

export default Tap;
