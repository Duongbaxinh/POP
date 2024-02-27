import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { seriData } from "../../../../lib/data/seri.data";

function Seri(props) {
  const [click, setClick] = useState(0);
  const { dataSeri } = props;
  const numberClick = (dataSeri?.length * 187) / (5 * (187 + 41 * 2 - 41)); // số thẻ * với chiều rộng / cho (số thẻ * chiều rộng + gap - khoảng các đầu = số lần click)
  useEffect(() => {
    setClick(Math.round(+numberClick))
    console.log("numberClick", click)
  }, [numberClick])
  const [translate, setTranslate] = useState(0);
  const handleTranslateRight = () => {
    if (click - 1 > 0) {
      setTranslate(translate - 5 * (187 + 41 * 2 - 41));
      setClick(click - 1);
    }
  };
  const handleTranslateleft = () => {
    if (click < numberClick) {
      setTranslate(translate + 5 * (187 + 41 * 2 - 41));
      setClick(click + 1);
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
          {/* {seriData?.map(({ id, title, avatar3 }) => (
            <li key={id} className="seri__item"
            ><a href={`/search/${title}`}><img src={avatar3} alt="" /></a>
            </li>
          ))} */}
          {seriData?.map(({ id, avatar, avatar2 }) => (
            <li key={id} className="seri__item"
            ><a href={`/search/${id}`}><img src={avatar} alt="" /></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Seri;
