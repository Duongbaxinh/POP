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

function Register() {
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
            Đăng Ký
          </Typography>
          <Typography variant="subtitle1">
            Tạo tài khoản mới hoặc bạn có thể đăng nhập bằng tài khoản POPS
            Kids.
          </Typography>
        </Stack>
        <Myform TitleButton={"Đăng Ký"}>
          <MyTextFile placeholder={"Nhập username hoặc số điện thoại"} />
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
          <MyTextFile
            placeholder={"Nhập lại mật khẩu"}
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
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="6px"
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="600">
                Bằng cách chọn "Đăng ký tài khoản",
              </Typography>
              <Typography variant="subtitle1" fontWeight="600">
                bạn đồng ý với cácĐiều khoản sử dụng
              </Typography>
            </Box>
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
            {Sociaty.map((icon) => (
              <IconButton
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
            Đã có tài khoản?Đăng nhập
          </Typography>
        </Stack>
      </Stack>
    </TemplatForm>
  );
}

export default Register;
