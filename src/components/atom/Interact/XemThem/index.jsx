import { Box, Typography, Link, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Component, useEffect, useState } from "react";
import FormTap from "../../FromTap";
import movie from "@/api/movieApi";
import { seriData } from "../../../../lib/data/seri.data";



const Data = {
  name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
  Bí Ẩn Màu Đen ~ Tập full`,
  time: "1 hour 23 minutes",
  avarta:
    "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/horizontal_poster-9fe8f0f24ace-1680747333183-4h5vYtqd.jpg?v=0&maxW=460&format=webp",
};
function XemThem(props) {
  const colors = useTheme()
  const { queryName } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { response } = await movie.getList();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  return (
    <Box
      p="32px"
      width={{ xs: "100%", lg: "770px" }}
      m="0 auto"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      {/* ---------------- */}
      {seriData &&
        seriData.map((item, index) => (
          <Box
            key={item._id}
            color={colors.palette.my_white.main}
            sx={{
              textDecorationLine: "none",
            }}
            component={Link}
            href={`/watch/${item._id}`}
          >
            <FormTap data={item}>
              <Typography variant="subtitle2">
                Năm phát hành: {item.release}
              </Typography>
              <Typography variant="subtitle2">
                Xep hang: {item.rating}+
              </Typography>
              <Typography variant="subtitle2">
                Nội Dung Bởi: TMS Entertainment
              </Typography>
              <Typography variant="subtitle2">
                {`${item.name} được mua bản quyền và được cập nhật phát
                sóng mới nhất trên ứng dụng giải trí POPS.`}
              </Typography>
            </FormTap>
          </Box>
        ))}
    </Box>
  );
}

export default XemThem;
