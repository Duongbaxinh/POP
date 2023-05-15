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
import AtomAdmin from "../atomAdmin";
AdminAdd.propTypes = {};

function AdminAdd(props) {
  const itemForm = [
    {
      id: 1,
      name: "Name",
      placeholder: "Nhap ten phim",
    },
    {
      id: 2,
      name: "Price",
      placeholder: "Nhap gia phim",
    },
    {
      id: 3,
      name: "Release",
      placeholder: "Nhap ten Release",
    },
    {
      id: 4,
      name: "Description",
      placeholder: "Nhap ten Description",
    },
    {
      id: 5,
      name: "Time",
      placeholder: "Nhap ten Time",
    },
    {
      id: 6,
      name: "Author",
      placeholder: "Nhap ten Author",
    },
    {
      id: 7,
      name: "Image",
      placeholder: "",
    },
    {
      id: 8,
      name: "video",
      placeholder: "",
    },
  ];
  return <AtomAdmin name={"Add Film"} itemForm={itemForm} />;
}

export default AdminAdd;
