import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export const GoogleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width="32px" height="32px" viewBox="0 0 32 32">
      <path
        xmlns="http://www.w3.org/2000/svg"
        clip-path="url(#b)"
        fill="#FBBC05"
        d="M0 37V11l17 13z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        clip-path="url(#b)"
        fill="#EA4335"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        clip-path="url(#b)"
        fill="#34A853"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        clip-path="url(#b)"
        fill="#4285F4"
        d="M48 48L17 24l-4-3 35-10z"
      />
    </SvgIcon>
  );
};
