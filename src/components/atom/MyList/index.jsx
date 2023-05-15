import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import them from "../../theme/them";

MyList.propTypes = {};

function MyList(props) {
  const { Data } = props;

  return (
    <Box>
      <Typography whiteSpace="nowrap" variant="h3" height="24px">
        {Data[0].title}
      </Typography>
      <List
        disablePadding
        sx={{
          color: Data[0].title != "undefined" ? "red" : "yellow",
        }}
      >
        {Data.map((item, index) => (
          <ListItem
            key={item.id}
            sx={{
              padding: "0",
            }}
          >
            <ListItemText key={item.id}>
              <Typography
                variant="subtitle1"
                component={Link}
                href={item.url}
                sx={{
                  color: them.palette.my_white.main,
                  textDecorationLine: "none",
                  "&:hover": {
                    color: grey[500],
                  },
                }}
              >
                {item.name}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MyList;
