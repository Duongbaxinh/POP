import { Box, Typography } from "@mui/material";
import React from "react";
import FormTap from "../../atom/fromTap";
import { grey } from "@mui/material/colors";

XemThem.propTypes = {};
const Data = {
  name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
  Bí Ẩn Màu Đen ~ Tập full`,
  time: "1 hour 23 minutes",
  avarta:
    "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/horizontal_poster-9fe8f0f24ace-1680747333183-4h5vYtqd.jpg?v=0&maxW=460&format=webp",
};
function XemThem(props) {
  return (
    <Box
      p="32px"
      width="770px"
      m="0 auto"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      <FormTap Data={Data}>
        <Typography variant="subtitle2">Năm phát hành: 1990</Typography>
        <Typography variant="subtitle2">Xep hang: 13+</Typography>
        <Typography variant="subtitle2">
          Nội Dung Bởi: TMS Entertainment
        </Typography>
        <Typography variant="subtitle2">
          Thám Tử Lừng Danh Conan được mua bản quyền và được cập nhật phát sóng
          mới nhất trên ứng dụng giải trí POPS. Đây là bộ
        </Typography>
      </FormTap>
    </Box>
  );
}

export default XemThem;
