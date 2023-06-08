import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Stack, Typography } from "@mui/material";
import them from "../../theme/them";
import { red, yellow } from "@mui/material/colors";
import banner from "@/assets/data/listBanner";
import Seri from "../BanerSlide/Seri";

BannerSlide2.propTypes = {};

function BannerSlide2(props) {
  const [visible, setVisible] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);
  const { handleTranslateRight, handleTranslateleft, translate } = props;
  const handleVisible = (id) => {
    clearTimeout(timeoutId);
    setVisible(id);
  };
  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      if (visible < banner.length) {
        setVisible(visible + 1);
      } else {
        clearTimeout(newTimeoutId);
        setVisible(1);
      }
    }, 3000);
    setTimeoutId(newTimeoutId);
    return () => clearTimeout(newTimeoutId);
  }, [visible]);

  return (
    <Box width="100%">
      <Stack width="100%">
        {banner.map(({ id, imageTablet, imageUrl, leased }) => (
          <Stack
            position="relative"
            width={{ sm: "100%", xs: "483px" }}
            height={{ sm: "700px", xs: "600px" }}
            key={id}
            sx={{
              display: id === visible ? "block" : "none",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              "&::after": {
                position: "absolute",
                zIndex: "0",
                content: `""`,
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                boxShadow: {
                  lg: "0px 0px 200px 200px #141414 inset",
                  xs: "0px 0px 200px 100px #141414 inset",
                },
              },
            }}
          >
            <Stack
              direction="row"
              position="absolute"
              zIndex="10"
              left="50px"
              top="80px"
            >
              <Stack gap="30px">
                <Box>
                  <Box>
                    <img src={imageTablet} alt="avatar" />
                  </Box>
                </Box>
                <Typography>Nam phat hanh:{leased}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: "100px",
                    backgroundImage: `linear-gradient(${red[500]},${yellow[500]})`,
                  }}
                >
                  Chi tiet
                </Button>
              </Stack>{" "}
            </Stack>
            <Seri
              handleTranslateRight={handleTranslateRight}
              handleTranslateleft={handleTranslateleft}
              translate={translate}
            />
          </Stack>
        ))}
      </Stack>
      <Stack
        position="absolute"
        top="60px"
        right="40px"
        gap="10px"
        zIndex="999"
      >
        {banner.map(({ id }, index) => (
          <Box
            key={id}
            onClick={() => handleVisible(id)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background:
                id === visible ? red[500] : them.palette.my_white.main,
            }}
          ></Box>
        ))}
      </Stack>
    </Box>
  );
}

export default BannerSlide2;
