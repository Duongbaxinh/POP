import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import seri from "../../../../assets/data/imagelist";
import "./styles.scss";

function Seri(props) {
  const [translate, setTranslate] = useState(0);
  console.log(translate);
  const handleTranslateRight = () => {
    setTranslate(translate - 1183);
  };
  const handleTranslateleft = () => {
    if (translate < 0) {
      setTranslate(translate + 1183);
    }
  };
  return (
    <div className="seri">
      <div className="seri__title">
        <p className="seri__label">Hot Series</p>
        <div className="seri__btn">
          <span onClick={handleTranslateleft}>
            <ArrowBackIosIcon />
          </span>
          <span onClick={handleTranslateRight}>
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>

      <div className="seri__slide">
        <ul
          className="seri__list"
          style={{ transform: `translateX(${translate}px)`, listStyle: "none" }}
        >
          {seri.map(({ id, ImageUrl }) => (
            <li key={id} className="seri__item">
              <img src={ImageUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Seri;
