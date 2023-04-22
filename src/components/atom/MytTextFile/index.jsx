import React, { useState } from "react";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";

import { red } from "@mui/material/colors";
MyTextFile.propTypes = {};

function MyTextFile(props) {
  const { placeholder, VisibilityIcon, typeInput } = props;
  const theme = useTheme();
  const [password, setPassword] = useState(true);
  const [value, setValue] = useState("");
  const handlePassword = () => {
    setPassword(!password);
    console.log(password);
  };
  const handleValude = (e) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={`${placeholder}`}
      value={value}
      onChange={(e) => handleValude(e)}
      type={`${password ? typeInput : "text"}`}
      InputProps={
        VisibilityIcon
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePassword}>
                    {password ? VisibilityIcon[1] : VisibilityIcon[0]}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: red[500],
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "&:hover fieldset": {
            borderColor: red[300],
          },
          "&.Mui-focused fieldset": {
            borderColor: red[500],
            height: "50px",
            padding: "0",
            margin: "0",
          },
          "& input": {
            color: theme.palette.my_white.main,
            height: "44px",
            padding: "0 10px",
            fontSize: "medium",
          },
        },
      }}
    ></TextField>
  );
}

export default MyTextFile;