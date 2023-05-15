import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import MyTextFile from "../../atom/MytTextFile";
import them from "../../theme/them";
AtomAdmin.propTypes = {};

function AtomAdmin({ name, itemForm }) {
  return (
    <Box pt="70px" minHeight="700px">
      <Stack component="form">
        <Typography
          variant="h2"
          textAlign="center"
          color={them.palette.my_white.main}
        >
          {name}
        </Typography>
        {itemForm.map(({ id, name, placeholder, value }) => (
          <Stack gap="10px" key={id} mt="5px">
            <Typography variant="body2" color={them.palette.my_white.main}>
              {name}*:
            </Typography>
            {name !== "Description" ? (
              name == "Image" || name == "video" ? (
                <input type="file" />
              ) : (
                <MyTextFile values={value} placeholder={placeholder} />
              )
            ) : (
              <TextareaAutosize
                minRows={4}
                placeholder={placeholder}
                value={value}
                style={{
                  background: "transparent",
                  color: them.palette.my_white.main,
                  borderColor: "red",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
          </Stack>
        ))}
        <Button
          type="submit"
          sx={{
            color: them.palette.my_white.main,
          }}
        >
          {name.split(" ")[0]}
        </Button>
      </Stack>
    </Box>
  );
}

export default AtomAdmin;
