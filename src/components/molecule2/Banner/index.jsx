import { Box, Link, Stack, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { grey, red } from "@mui/material/colors";
import React, { useState } from "react";
import { ShareIcon } from "../../../assets/svg/ShareIcon";
import them from "../../theme/them";
import FormTap from "../../atom/fromTap";
import Tap from "../Tap";
import Comment from "../Comment";
import XemThem from "../XemThem";

function Banner(props) {
  const Data = {
    name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
    Bí Ẩn Màu Đen ~`,
    urlImage:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/slider_banner_smart_tv___desktop-8560fdaad8f2-1680581679972-OvPlWiDe.png?v=0&maxW=1200&format=webp",
    Description: ` Tập phim Detective Conan: The Story Of Ai Haibara dịch ra tiếng Việt có tên là 
    Câu chuyện về Haibara Ai: Chuyến tàu sắt bí ẩn màu đen. 
    Như chúng ta đã biết, Ai Haibara là một cựu thành viên 
    của tổ chức Áo Đen và đã tìm cách thoát khỏi tổ chức bằng
     cách sử dụng viên thuốc thu nhỏ, đây cũng chính là loại 
     thuốc mà tổ chức này đã sử dụng để ám hại Kudo Shinichi.
    Theo chia sẻ từ các nhà làm phim thì Detective Conan: The 
    Story Of Ai Haibara là một sự tổng hợp của các tập phim từ 
    701 đến 704 về con tàu sắt màu đen kết hợp cùng các cảnh quan
     trọng xoay quanh nhân vật Ai Haibara. Có thể xem Detective Conan:
      The Story Of Ai Haibara là một tập phim đặc biệt dành riêng cho
       khán giả hiểu thêm về nhân vật Ai Haibara.
    Bộ phim Detective Conan: The Story Of Ai Haibara được khởi chiếu 
    vào ngày 06 tháng 01 năm 2023 tại Nhật Bản và đã được khán giả đón
     nhận rất nhiệt tình. Nếu bạn là một fan của Conan và Ai Haibara thì
      đừng quên theo dõi POPS để theo dõi Detective Conan: The Story Of Ai 
      Haibara được Việt hóa và trình chiếu vào một ngày không xa nhé.`,
    Genre: "Trinh Thám",
    Country: "Japan",
    Leased: "2023",
    Rating: "13+",
    Live: "Đón xem full movie vào ngày 07/04/2023",
    Category: "Anime",
    ContenBy: "TAGGER",
  };
  const Component = [<Tap />, <XemThem />, <Comment />];
  const link = ["Genre", "Country", "Category"];
  const exeption = ["Description", "urlImage", "name"];
  const Select = ["Tập", "Xem thêm", "Bình luận"];
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
  const [full, setFull] = useState(true);
  const [isActive, setIsActive] = useState(1);
  const handleFull = () => {
    setFull(!full);
  };

  return (
    <Box>
      <Stack width="100%" position="relative">
        <Stack
          zIndex="0"
          height="600px"
          top="0"
          left="0"
          sx={{
            backgroundImage: `url(${Data.urlImage})`,
            objectFit: "contain",
            backgroundPosition: "center",
            "&::before": {
              content: "' '",
              width: "100%",
              height: "100%",
              top: "-100px",
              lef: "0",
              zIndex: "1",
              boxShadow: `300px -100px 200px 84px black inset`,
            },
          }}
        ></Stack>
        <Box
          width="100%"
          height="100%"
          padding=" 0 70px"
          columnGap="80px"
          display="grid"
          gridTemplateRows="144px auto"
          gridTemplateColumns="746px 322px"
        >
          <Stack gridColumn=" 1 / span 2" gap="20px">
            <Typography variant="h1"> {Data.name}</Typography>{" "}
            <Stack direction="row" gap="5px">
              <Typography variant="subtitle1">Tập mới nhất</Typography>
              <Link
                href="full"
                variant="subtitle1"
                color={them.palette.blue.main}
              >
                Tập full
              </Link>
              <Link
                href="login"
                variant="subtitle1"
                color={them.palette.blue.main}
              >
                {" "}
                Trallers
              </Link>
            </Stack>
          </Stack>
          <Stack gap="20px">
            <Stack direction="row" height="40px">
              <Stack
                justifyContent="center"
                alignItems="center"
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{ border: "1px solid white" }}
              >
                <ShareIcon />
              </Stack>
            </Stack>
            <Box>
              <Typography
                variant="subtitle1"
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{
                  width: "100%",
                  height: `${!full ? "auto" : "144px"}`,
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  color={grey[500]}
                >
                  Mô Tả:
                </Typography>
                {Data.Description}
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
          </Stack>
          <Stack p="50px 0" gap="10px">
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
        </Box>
      </Stack>
      <Stack
        direction="row"
        height="60px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        mb="24px"
        sx={{
          background: grey[900],
        }}
      >
        {Select.map((item, index) => (
          <Typography
            key={index}
            onClick={() => setIsActive(index)}
            sx={() => {
              console.log(isActive, index);
              return {
                fontWeight: "bold",
                color: isActive === index ? red[200] : "yellow",
                cursor: "pointer",
              };
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      {Component.map((item, index) => (isActive === index ? item : ""))}
    </Box>
  );
}

export default Banner;
