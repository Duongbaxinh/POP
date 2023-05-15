import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";
import them from "../theme/them";
import AdminAdd from "./AdminAdd";
import AdminHome from "./AminHome";
import AdminUpdate from "./AdminUpdate";

Admind.propTypes = {};

function Admind(props) {
  const arrayManage = [
    { id: 1, name: "Manage Film" },
    { id: 2, name: "Manage customer" },
    { id: 3, name: "Manager Page" },
  ];
  const functionOf = [
    { id: 1, name: "add Film", inof: "1", fc: "addFilm" },
    { id: 2, name: "update Film", inof: "1", fc: "updateFilm" },
    { id: 3, name: "Delete Film", inof: "1", fc: "deleteFilm" },
    { id: 4, name: "add Customer", inof: "2", fc: "addCustomer" },
    { id: 5, name: "Update Customer", inof: "2", fc: "updateCustomer" },
    { id: 5, name: "Delete Customer", inof: "2", fc: "deleteCustomer" },
  ];
  const selectFunction = (id) => {
    return functionOf.filter((item) => item.inof == id);
  };
  const Category = [
    {
      id: 1,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
    {
      id: 2,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
    {
      id: 3,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
    {
      id: 4,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
    {
      id: 5,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
    {
      id: 6,
      name: "TotalNumberOfFilm",
      detail: "Detail",
      number: "100",
      share: "Share",
    },
  ];
  const [open, setOpen] = React.useState(null);
  const handleOpen = (id) => {
    setOpen(id);
  };
  const arrayComponent = [
    {
      component: <AdminHome Category={Category} />,
      name: "home",
    },
    { component: <AdminAdd />, name: "addFilm" },
    { component: <AdminUpdate />, name: "updateFilm" },
  ];
  const [indexManage, setIndexManage] = useState(() => {
    const saveLocal = localStorage.getItem("name");
    if (saveLocal) {
      return JSON.parse(saveLocal);
    } else {
      return "home";
    }
  });
  useEffect(() => {
    indexManage !== null &&
      localStorage.setItem("name", JSON.stringify(indexManage));
  }, [indexManage]);
  const handleIndexManage = (id) => {
    setIndexManage(id);
  };

  const drawerWidth = 240;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "20% 80%",
        backgroundColor: "#202c41",
      }}
    >
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& > .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#202c41 !important",
            color: "white !important",
          },
        }}
      >
        <Box
          height="50px"
          fontSize="32px"
          fontWeight="700"
          textAlign="center"
          onClick={() => handleIndexManage("home")}
        >
          My Admin
        </Box>
        <Divider sx={{ borderColor: "white" }} />
        <List>
          {arrayManage.map((text, index) => (
            <>
              {" "}
              <ListItem key={text.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon
                      htmlColor="white"
                      onClick={() => handleOpen(text.id)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
              <Box
                sx={{
                  display: open !== text.id ? "none" : "block",
                }}
              >
                {selectFunction(text.id).map((item) => (
                  <ListItem onClick={() => handleIndexManage(item.fc)}>
                    <ListItemText key={item.name} primary={item.name} />
                  </ListItem>
                ))}
              </Box>
            </>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon htmlColor="white" />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText sx={{ whiteSpace: "nowrap" }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/*  */}
      <Box>
        <Stack
          position="fixed"
          zIndex="999"
          width="80%"
          direction="row"
          justifyContent="space-between"
          sx={{
            background: "#202c41 ",
            p: " 5px 30px",
            borderBottom: "0.5px solid white",
          }}
        >
          <Stack direction="row" alignItems="center">
            <TextField
              placeholder="Tìm kiếm theo tên hoặc Id"
              sx={{
                "& >.MuiInputBase-root": {
                  height: " 30px",
                  width: " 500px",
                  borderColor: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: red[500],
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  "&:hover fieldset": {
                    borderColor: red[300],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: red[500],
                    height: "40px",
                    padding: "0",
                    margin: "0",
                  },
                  "& input": {
                    color: them.palette.my_white.main,
                    height: "44px",
                    padding: "0 10px",
                    fontSize: "medium",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction="row">
            <Stack
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "red",
              }}
            />
            <Button>admin</Button>
          </Stack>{" "}
        </Stack>

        {arrayComponent !== null &&
          arrayComponent.map((item) => {
            if (item.name == indexManage) {
              return item.component;
            }
          })}
      </Box>
    </Box>
  );
}

export default Admind;
