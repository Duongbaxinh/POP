import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React from "react";
import { FacebookIcon } from "../../assets/svg/FacebookIcon";
import { GoogleIcon } from "../../assets/svg/GoogleIcon";
import { VisibilityIcon } from "../../assets/svg/VisibilityIcon";
import { VisibilityOffIcon } from "../../assets/svg/VisibilityOffIcon";
import Myform from "../../components/atom/Myform";
import TemplatForm from "../../components/atom/TemplatForm";
import them from "../../components/theme/them";
import MyTextFile from "../../components/atom/MytTextFile";

function Login() {
  const Sociaty = [
    <FacebookIcon fontSize="large" htmlColor={them.palette.blue.main} />,
    <GoogleIcon fontSize="large" htmlColor={them.palette.blue.main} />,
  ];
  return (
    <TemplatForm>
      <Stack
        position="absolute"
        top="38px"
        gap="28px"
        zIndex="3"
        alignItems="flex-start"
        sx={{
          width: "520px",
          backgroundColor: them.palette.bg_form.main,
          borderRadius: "10px",
          padding: "50px 70px",
          textAlign: "center",
        }}
      >
        <Stack gap="16px">
          <Typography variant="h2" lineHeight="36px">
            Đăng Nhập
          </Typography>
          <Typography variant="subtitle1">
            Bạn có thể đăng nhập với tài khoản POPS hoặc POPS Kids.
          </Typography>
        </Stack>
        <Myform TitleButton={"Đăng Nhập"}>
          <MyTextFile placeholder={"Nhập username"} />
          <MyTextFile
            placeholder={"Nhập mật khẩu"}
            typeInput={"password"}
            VisibilityIcon={[
              <VisibilityIcon htmlColor={useTheme().palette.my_white.main} />,
              <VisibilityOffIcon
                htmlColor={useTheme().palette.my_white.main}
              />,
            ]}
          />
        </Myform>
        <Stack width="100%" gap="28px">
          <Typography variant="h3" color={red[900]}>
            Quên mật khẩu
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="6px"
          >
            <Box
              width="50px"
              height="50px"
              padding="3px"
              borderRadius="5px"
              sx={{
                backgroundColor: grey[700],
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://cdn.popsww.com/popsapp/assets/images/account/qr-code.png"
                alt=""
              />
            </Box>

            <Typography variant="h3">Dang nhap bang ma QR</Typography>
          </Stack>
          <Divider
            textAlign="center"
            sx={{
              "&::before": {
                borderTop: "2px solid #ffffff",
                top: "0",
              },
              "&::after": {
                borderTop: "2px solid #ffffff",
                top: "0",
              },
            }}
          >
            <Typography variant="subtitle2"> hoặc Tiếp tục với</Typography>
          </Divider>
          <Stack
            width="100%"
            height="70px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="50px"
          >
            {Sociaty.map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  width: "64px",
                  height: "64px",
                  background: them.palette.my_white.main,
                  "&:hover": {
                    background: them.palette.my_white.main,
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
          <Typography variant="subtitle1" fontWeight="700" mt="12px">
            Chưa có tài khoản ? Đăng ký
          </Typography>
        </Stack>
      </Stack>
    </TemplatForm>
  );
}

export default Login;
