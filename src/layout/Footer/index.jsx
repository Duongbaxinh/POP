import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Stack,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import appstore from "../../assets/public/image/appstore.png";
import googleplay from "../../assets/public/image/googleplay.png";
import smartTV from "../../assets/public/image/smartTV.png";
import screanUrl from "../../constant/screenUrl";
import them from "../../components/theme/them";
import { grey, red } from "@mui/material/colors";
import MyList from "../../components/atom/MyList";
import BoxGrid from "../../components/atom/BoxGrid";
Footer.propTypes = {};
const app = [appstore, googleplay, smartTV];
const link = [
  [
    { title: "NỘI DUNG NGƯỜI LỚN" },
    { id: 1, url: screanUrl.HOME, name: "Trang Chủ" },
    { id: 2, url: screanUrl.COMIC, name: "Truyện Tranh" },
    { id: 3, url: screanUrl.ORIGINAL, name: "Original" },
    { id: 4, url: screanUrl.ANIME, name: "Anime" },
    { id: 5, url: screanUrl.SHOW, name: "Show" },
  ],
  [
    { title: "" },
    { id: 6, url: screanUrl.MUSIC, name: "Âm nhạc" },
    { id: 7, url: screanUrl.SERIES, name: "Series" },
    { id: 8, url: screanUrl.CHILDREN, name: "Thiếu Nhi" },
    { id: 9, url: screanUrl.BLOG, name: "Blog" },
    { id: 10, url: screanUrl.SHOP, name: "Shop" },
  ],
  [
    { title: "POPS KIDS" },
    { id: 11, url: screanUrl.HOMEPOPKID, name: "Trang Chủ" },
    { id: 12, url: screanUrl.POPKIDMUSIC, name: "Âm Nhạc" },
    { id: 13, url: screanUrl.ENTERTAINMENT, name: "Giải Trí" },
    { id: 14, url: screanUrl.EDUCATION, name: "Giáo Dục" },
    { id: 15, url: screanUrl.BLOGCHILDREN, name: "Blog Thiếu Nhi" },
  ],
  [
    { title: "HỖ TRỢ" },
    { id: 16, url: screanUrl.FAQS, name: "FAQs" },
    {
      id: 17,
      url: screanUrl.PRIVATEPPOLICY,
      name: "Chính Sách Về Quyền Riêng Tư",
    },
    {
      id: 18,
      url: screanUrl.CONDITIONUSE,
      name: "Điều Khoản Và Điều Kiện Sử Dụng",
    },
    { id: 19, url: screanUrl.PAYMENPOLICY, name: "Điều Khoản Thanh Toán" },
    {
      id: 20,
      url: screanUrl.COMPLAINT,
      name: "Chính Sách Và Quy Trình Xử Lý Khiếu Nại",
    },
  ],
];
const Address = {
  title: "CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT",
  address:
    "Tầng 4, Block A, Viettel Complex Tower, 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh",
  NumberPhone: "+84 (28) 62921652",
  Email: "popsapp-support@popsww.com",
};
function Footer(props) {
  return (
    <Box
      padding="56px 48px"
      display="grid"
      gridTemplateColumns="248px auto 270px"
      gridTemplateRows="  228px  228px"
      columnGap="61px"
      sx={{
        gridTemplateColumns: { xs: "200px auto ", md: "248px auto 270px" },
        rowGap: { xs: "40px" },
      }}
    >
      <Stack
        gap="28px"
        gridRow="1/span2"
        sx={{
          gridRow: { md: "1" },
        }}
      >
        <Box
          component={Link}
          href="/"
          sx={{
            width: "120px",
            cursor: " pointer",
            transition: "0.2s ease",
            "&:hover": {
              opacity: "0.8",
            },
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
          />
        </Box>
        <Typography variant="subtitle1">
          Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù
          hợp mọi độ tuổi và an toàn cho trẻ em.
        </Typography>
        <Stack direction="row" gap="10px">
          {app.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              style={{
                width: " 81px",
                height: " 27px",
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Box
        display="grid"
        gridTemplateRows="228px 228px"
        rowGap="20px"
        gridRow="1/span2"
        sx={{
          gridTemplateColumns: { xs: "128px 128px", md: "1fr 1fr" },
          gridColumn: { xs: "2/span4", md: "2" },
          marginTop: { xs: "20px" },
          columnGap: { xs: "0" },
        }}
      >
        <MyList Data={link[0]} />
        <MyList Data={link[1]} />
        <MyList Data={link[2]} />
        <MyList Data={link[3]} />
      </Box>
      <Box>
        {" "}
        <BoxGrid>
          <Typography variant="h3" gridColumn="1/span2">
            {Address.title}
          </Typography>
          <Box
            gridColumn="1/span2"
            sx={{
              marginTop: { xs: "40px", md: "14px" },
            }}
          >
            <Stack gap="10px">
              {Object.keys(Address).map((item, index) => {
                if (item !== "title") {
                  return (
                    <Typography key={index} fontSize="13px" fontWeight="700">
                      {item}:
                      <Typography
                        ml="5px"
                        fontSize="13px"
                        fontWeight="400"
                        component="span"
                        sx={{
                          color:
                            item == "Email"
                              ? red[900]
                              : them.palette.my_white.main,
                        }}
                      >
                        {Address[item]}
                      </Typography>
                    </Typography>
                  );
                }
              })}
            </Stack>
          </Box>
        </BoxGrid>
      </Box>
    </Box>
  );
}

export default Footer;
