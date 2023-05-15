import { Box, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import Detail from "@/components/atom/Detail";
import them from "@/components/theme/them";

import { AppIcon } from "@/assets/svg/AppIcon";
import Interact from "@/components/atom/Interact";

function Banner({ data }) {
  const link = ["Genre", "Country", "Category"];
  const exeption = [
    "description",
    "updatedAt",
    "createdAt",
    "fileName",
    "video",
    "avatar",
    "id",
    "time",
    "mainName",
  ];

  return (
    <Box>
      <Stack width="100%" position="relative">
        <Stack
          zIndex="0"
          height="600px"
          top="0"
          left="0"
          sx={{
            backgroundImage: `url(${data.avatar})`,
            objectFit: "contain",
            backgroundPositionY: "-200px",
            backgroundSize: "100%",
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
        <Box position="relative" top="-150px">
          <Stack width="100%" height="100%" padding=" 0 70px" gap="20px">
            <Stack gap="20px">
              <Typography variant="h1">
                {" "}
                {data.mainName}~{data.name}{" "}
                <AppIcon htmlColor={them.palette.my_white.main} />
              </Typography>{" "}
              <Stack direction="row" gap="5px">
                <Typography variant="subtitle1">Tập mới nhất</Typography>
                <Link
                  href={`/watch/views/${data.id}`}
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
              <Stack
                direction="row"
                height="40px"
                justifyContent="flex-start"
                alignItems="center"
                gap="20px"
              >
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
                <AppIcon />
              </Stack>
            </Stack>
            <Detail Data={data} exeption={exeption} link={link} />{" "}
          </Stack>{" "}
          <Interact Data={data} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Banner;
