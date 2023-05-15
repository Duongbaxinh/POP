import PersonPinIcon from "@mui/icons-material/PersonPin";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SubjectIcon from "@mui/icons-material/Subject";
import {
  Link,
  Drawer,
  useTheme,
  List,
  ListItem,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import BoxSearch from "../../components/atom/BoxSearch";
import them from "../../components/theme/them";
import listFilm from "../../api/listFilm";
function Header(props) {
  const menu = [
    {
      id: 1,
      title: "Thiếu Nhi",
    },
    {
      id: 2,
      title: "Comics",
    },
    {
      id: 3,
      title: "Anime",
    },
    {
      id: 4,
      title: "Phim",
    },
    {
      id: 5,
      title: "Âm Nhạc",
    },
    {
      id: 6,
      title: "Shop",
    },
    {
      id: 7,
      title: "Thêm",
    },
  ];
  // const [state, setState] = useState({ right: true });
  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };
  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {menu.map((text, index) => (
  //         <ListItem key={text.id} disablePadding>
  //           <ListItemButton>
  //             <ListItemText primary={text.title} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //   </Box>
  // );

  const theme = useTheme();
  const [actionID, setAction] = useState(null);
  const [clickSearch, setClickSearch] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [value, setValue] = useState("");
  const [sugesstion, setSugession] = useState(null);
  const [timeOut, setTimeouts] = useState(null);
  const handleValueSearch = (e) => {
    setValue(e.target.value);
    console.log(timeOut);
    clearTimeout(timeOut);
  };
  useEffect(() => {
    function upwith() {
      setWidth(window.innerWidth);
    }
    function upHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", upwith);
    window.addEventListener("resize", upHeight);
    return () => window.removeEventListener("resize", upwith);
  }, [width]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await listFilm.getQueryMove({ name: value });
      setSugession(data);
    };
    const idSettimeout = setTimeout(() => {
      localStorage.setItem("search", JSON.stringify(value));
      getData();
    }, 500);
    setTimeouts(idSettimeout);
  }, [value]);
  const handleMenu = () => {
    if (window.innerWidth <= 1200) {
      setClickMenu(!clickMenu);
    } else {
      setClickMenu(true);
    }
    console.log("click", window.innerWidth);
  };
  const handleAction = (id) => {
    setAction(id);
  };
  const searchData = [
    { id: 1, name: "Doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "Onpice" },
    { id: 6, name: "Dragon supper" },
  ];
  const listSearch = (data) => {
    return (
      <Stack
        minHeight="200px"
        width="100%"
        sx={{
          color: them.palette.my_white.main,
          backgroundColor: grey[900],
        }}
      >
        {data.map(({ id, name }) => (
          <Stack
            key={id}
            sx={{
              p: "5px",
              alignItems: "flex-start",
              justifyContent: "center",
              borderBottom: `1px solid ${them.palette.my_white.main} `,
            }}
          >
            <Typography
              component={Link}
              href={`/watch/${id}`}
              sx={{
                color: them.palette.my_white.main,
                textDecorationLine: "none",
              }}
            >
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    );
  };

  return (
    <div
      className="header"
      style={{ backgroundColor: `${height === 0 ? "transparent" : ""}` }}
    >
      <div className="header__left">
        <Link href="/">
          {" "}
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
            alt=""
            className="header__logo"
          />
        </Link>

        <ul
          className="header__menu"
          style={{
            visibility: `${
              window.innerWidth > 1200
                ? "visible"
                : !clickMenu && window.innerWidth <= 1200
                ? "hidden"
                : "visible"
            }`,
          }}
        >
          {menu.map(({ id, title }) => (
            <li
              key={id}
              className={`header__menu-item ${id === actionID ? "action" : ""}`}
              onClick={() => handleAction(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className="header__right">
        <div className="header__input" style={{ position: "relative" }}>
          {clickSearch && sugesstion.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                right: "0",
                width: { lg: "400px", xs: "200px" },
                minHeight: "400px",
                padding: "20px",
                borderRadius: "10px",
                background: grey[900],
                "&::after": {
                  content: `" "`,
                  position: "absolute",
                  top: "-7px",
                  right: "10px",
                  width: "20px",
                  height: "20px",
                  transform: "rotate(45deg)",
                  background: grey[900],
                },
              }}
            >
              {" "}
              {value.length <= 0 ? (
                <BoxSearch searchData={searchData} />
              ) : sugesstion.length > 0 ? (
                listSearch(sugesstion)
              ) : (
                ""
              )}
            </Box>
          )}
          <input
            type="text"
            placeholder="Tên phim, anime, comic"
            onChange={handleValueSearch}
            onClick={() => setClickSearch(!clickSearch)}
          />
          <Link href={value.length > 0 && `/search/${value}`}>
            <SearchSharpIcon
              htmlColor="white"
              fontSize="large"
              sx={{ cursor: "pointer", marginRight: "8px" }}
            />
          </Link>
        </div>
        <div className="header__btn">
          <Link
            href="login"
            sx={{
              textDecorationLine: "none",
              color: theme.palette.my_white.main,
            }}
            className="header__btn-left"
          >
            Đăng Nhập
          </Link>
          <Link
            href="register"
            className="header__btn-right"
            sx={{
              textDecorationLine: "none",
              color: theme.palette.my_white.main,
            }}
          >
            Đăng Ký
          </Link>
        </div>
        <div className="header__user">
          <PersonPinIcon fontSize="large" />
        </div>
        <div className="header__menu-icon">
          <SubjectIcon fontSize="large" onClick={handleMenu} />
        </div>
      </div>
      {/* <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer> */}
    </div>
  );
}

export default Header;
