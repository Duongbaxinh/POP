import AddIcon from "@mui/icons-material/Add";
import React from "react";
import POP from "../../../assets/public/image/POP.webp";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import "./styles.scss";

Pop.propTypes = {};

function Pop(props) {
  const { title, imageURL, name, release_year, time } = props;
  return (
    <div className="pop">
      <div className="pop__title">
        <span></span> <p>{title}</p>
      </div>
      <div className="pop__main">
        <img src={`${imageURL}`} alt="" className="pop__main-img" />
        <div className="pop__right">
          <p className="pop__right-title">{name}</p>
          <div className="pop__right-des">
            <span>Năm phát hành : {release_year}</span>
            <span>Thời lượng : {time} phút</span>
          </div>
          <div className="pop__btn">
            <button className="pop__btn-watch">
              {" "}
              <PlayCircleOutlineOutlinedIcon />
              Xem Ngay
            </button>
            <button className="pop__btn-love">
              <AddIcon />
              Yêu Thích
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pop;
