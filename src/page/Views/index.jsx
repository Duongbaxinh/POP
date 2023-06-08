import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { AddIcon } from "@/assets/svg/AddIcon";
import { AppIcon } from "@/assets/svg/AppIcon";
import { LikeIcon } from "@/assets/svg/LikeIcon";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import { TextIcon } from "@/assets/svg/TextIcon";
import Detail from "@/components/atom/Detail";
import Interact from "@/components/atom/Interact";
import them from "@/components/theme/them";
import listFilm from "@/api/listFilm";
import { useParams } from "react-router-dom";

Views.propTypes = {};

const link = ["author", "Country", "Category"];
const exeption = [
  "description",
  "updatedAt",
  "createdAt",
  "fileName",
  "video",
  "avatar",
  "image",
  "id",
  "time",
  "mainName",
];

function Views(props) {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState(null);
  useEffect(() => {
    const dataDetail = async () => {
      try {
        const { response } = await listFilm.getDetai(id);
        setDataDetail(response);
        return response;
      } catch (error) {
        return error;
      }
    };
    dataDetail();
  }, []);
  const Icon = [
    {
      id: 1,
      name: "Thích",
      icon: <LikeIcon htmlColor={them.palette.my_white.main} />,
    },
    {
      id: 2,
      name: "Báo Lỗi",
      icon: <TextIcon htmlColor={them.palette.my_white.main} />,
    },
    {
      id: 3,
      name: "Lưu Lại",
      icon: <AddIcon htmlColor={them.palette.my_white.main} />,
    },
    {
      id: 4,
      name: "Chia Sẻ",
      icon: <ShareIcon htmlColor={them.palette.my_white.main} />,
    },
    { id: 5, name: "Tải POP App", icon: <AppIcon /> },
  ];

  return (
    <Box pt="70px">
      {dataDetail && (
        <>
          {" "}
          <Stack padding=" 0 75px" width="100%">
            <Box>
              <video
                controls
                style={{
                  width: "100%",
                  height: "500px",
                  margin: "0 auto",
                }}
              >
                <source src={dataDetail.video.url} type="video/mp4" />
              </video>
            </Box>
          </Stack>
          <Box>
            <Stack
              direction="row"
              width="100%"
              padding="0 75px"
              justifyContent="space-between"
              sx={{
                flexWrap: { xs: "wrap" },
                gap: { xs: "20px" },
              }}
            >
              {" "}
              <Stack>
                {" "}
                <Stack direction="row" gap="10px" mb="22px">
                  <YouTubeIcon />
                  <Typography variant="h3" color={red[800]}>
                    {dataDetail.mainName}~{dataDetail.name}
                  </Typography>
                </Stack>
                <Typography variant="h1">{dataDetail.name}</Typography>
              </Stack>
              <Stack direction="row" gap="15px">
                {Icon.map((item) => (
                  <Box key={item.id} textAlign="center">
                    <IconButton>{item.icon}</IconButton>
                    <Typography
                      whiteSpace="nowrap"
                      variant="subtitle1"
                      mt="22px"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Box width="100%" p="0 75px">
              {" "}
              <Divider
                sx={{
                  borderColor: grey[200],
                  margin: "20px 0",
                  padding: "0 75px",
                }}
              />
              <Detail Data={dataDetail} exeption={exeption} link={link} />
            </Box>

            <Interact Data={dataDetail} />
          </Box>{" "}
        </>
      )}
    </Box>
  );
}

export default Views;
