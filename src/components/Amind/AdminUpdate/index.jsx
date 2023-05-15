import React from "react";
import PropTypes from "prop-types";
import AtomAdmin from "../atomAdmin";
import { Typography } from "@mui/material";

AdminUpdate.propTypes = {};
const itemForm = [
  {
    id: 1,
    name: "Name",
    placeholder: "Nhap ten phim",
    value: "Chien tranh giua cac vi sao",
  },
  {
    id: 2,
    name: "Price",
    placeholder: "Nhap gia phim",
    value: "2000000d",
  },
  {
    id: 3,
    name: "Release",
    placeholder: "Nhap ten Release",
    value: "2015",
  },
  {
    id: 4,
    name: "Description",
    placeholder: "Nhap Description",
    value: `Chiến tranh giữa các vì sao là loạt tác
            phẩm hư cấu sử thi không gian của Mỹ sáng
            tạo bởi George Lucas, tập trung chủ yếu vào một loạt
            các phim điện ảnh được công chiếu kể từ năm 1977.
            Loạt phim kể về những cuộc phiêu lưu của các nhân vật khác 
            nhau tại một thiên hà xa xôi. Wikipedia`,
  },
  {
    id: 5,
    name: "Time",
    placeholder: "Nhap ten Time",
    value: "2 tieng",
  },
  {
    id: 6,
    name: "Author",
    placeholder: "Nhap ten Author",
    value: "George Lucas",
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
function AdminUpdate(props) {
  {
    if (itemForm !== null) {
      return <AtomAdmin name={"Update Film"} itemForm={itemForm} />;
    } else {
      <Typography pt="70px">Hay tim kiem phim ma ban muon cap nhat</Typography>;
    }
  }
}

export default AdminUpdate;
