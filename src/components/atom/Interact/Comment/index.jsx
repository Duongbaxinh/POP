import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import { Box, Stack, TextField, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";


function Comment(props) {
  const colors = useTheme()
  const info = {
    avatar:
      "https://products.popsww.com/api/v2/containers/file2/profiles/Trex_12.jpg",
    userName: "donghanghieu",
    content: `Địa chỉ: Tầng 4, Block A, Viettel Complex Tower, 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
    Điện thoại: +84 (28) 62921652
    Email: popsapp-support@popsww.com`,
  };
  return (
    <Box
      width="770px"
      m="0 auto"
      p="32px"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      <Stack direction="row" gap="10px" alignItems="center">
        <SpeakerNotesOutlinedIcon />
        <TextField
          fullWidth
          placeholder="Nhập bình luận"
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              backgroundColor: grey[800],
              borderColor: colors.palette.my_white.main,
              "& input": {
                color: colors.palette.my_white.main,
                fontSize: "medium",
              },
            },
          }}
        ></TextField>
        <SendOutlinedIcon />
      </Stack>
      <Stack
        maxHeight="700px"
        sx={{
          overflowX: "hidden",
        }}
      >
        {/* comment */}
        <Stack direction="row" mt="50px" gap="20px">
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            sx={{
              backgroundColor: grey[300],
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
              src={info.avatar}
              alt={info.avatar}
            />
          </Box>
          <Box
            position="relative"
            zIndex="0"
            p=" 10px 32px"
            borderRadius="10px"
            width="100%"
            maxHeight="150px"
            sx={{
              backgroundColor: grey[400],
              "&:after": {
                position: "absolute",
                content: `" "`,
                width: "30px",
                height: "30px",
                left: "-10px",
                top: "7px",
                backgroundColor: grey[400],
                zIndex: "1",
                transform: " rotate(45deg)",
              },
            }}
          >
            <Typography variant="subtitle1" fontWeight="800">
              {info.userName}
            </Typography>
            <Typography variant="subtitle2">{info.content}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Comment;
