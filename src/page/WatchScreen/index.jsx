import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import movie from "../../api/movieApi";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import Detail from "@/components/atom/Detail";
import { AppIcon } from "@/assets/svg/AppIcon";
import Interact from "@/components/atom/Interact";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function WatchScreen() {
  const colors = useTheme()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const id = useParams()
  const link = ["genre", "country"];
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
    "trailler",
    "seriData"
  ];
  const datam = useSelector((state) => state)
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const { response } = await movie.getDetai(id)
      console.log('response ::::', response)
      setData(response)
      setIsLoading(false)
    }
    fetchData()
  }, [id])
  if (isLoading) return <h1>Loading...</h1>
  console.log('check data use selector', datam)
  return (

    <Box>
      <Stack width="100%" position="relative">
        <Stack
          zIndex="0"
          height="600px"
          top="0"
          left="0"
          sx={{
            backgroundImage: `url(${data?.avatar})`,
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
              <Typography variant="h1" >
                {data.seriData.title}~{data?.name}{" "}
                <AppIcon htmlColor={colors.palette.my_white.main} />
              </Typography>{" "}
              <Stack direction="row" gap="5px">
                <Typography variant="subtitle1">Tập mới nhất</Typography>
                <Link
                  href={`/views/${data?.id}`}
                  variant="subtitle1"
                  color={colors.palette.blue.main}
                >
                  Tập full
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

export default WatchScreen;
