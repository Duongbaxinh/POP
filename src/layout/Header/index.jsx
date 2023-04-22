import PersonPinIcon from "@mui/icons-material/PersonPin";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SubjectIcon from "@mui/icons-material/Subject";
import { Link, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import data from "../../assets/data/datafile";
import "./styles.scss";

function Header(props) {
  const theme = useTheme();
  const [actionID, setAction] = useState(null);
  const [clickMenu, setClickMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
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
          {data.map(({ id, title }) => (
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
        <div className="header__input">
          <input type="text" placeholder="Tên phim, anime, comic" />
          <SearchSharpIcon
            htmlColor="white"
            fontSize="large"
            sx={{ cursor: "pointer", marginRight: "8px" }}
          />
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
    </div>
  );
}

export default Header;
