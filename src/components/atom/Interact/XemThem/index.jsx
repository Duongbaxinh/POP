import { Box, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Component, useEffect, useState } from "react";
import FormTap from "../../FromTap";
import listFilm from "../../../../api/listFilm";
import them from "../../../theme/them";

XemThem.propTypes = {};
const Data = {
  name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
  Bí Ẩn Màu Đen ~ Tập full`,
  time: "1 hour 23 minutes",
  avarta:
    "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/horizontal_poster-9fe8f0f24ace-1680747333183-4h5vYtqd.jpg?v=0&maxW=460&format=webp",
};
function XemThem(props) {
  const { queryName } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await listFilm.getQueryMove({
          name: queryName,
          limit: 5,
        });

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  console.log("data xem them", data);
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
      {data &&
        data.map((item, index) => (
          <Box
            key={item.id}
            color={them.palette.my_white.main}
            sx={{
              textDecorationLine: "none",
            }}
            component={Link}
            href={`/watch/${item.id}`}
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
                Thám Tử Lừng Danh Conan được mua bản quyền và được cập nhật phát
                sóng mới nhất trên ứng dụng giải trí POPS. Đây là bộ
              </Typography>
            </FormTap>
          </Box>
        ))}
    </Box>
  );
}

export default XemThem;
