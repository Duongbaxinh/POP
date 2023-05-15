import React, { useEffect, useState } from "react";
import banner from "@/assets/data/listBanner";
import Seri from "./Seri";
import "./styles.scss";
BanerSlide.propTypes = {};

function BanerSlide(props) {
  const [visible, setVisible] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleVisible = (id) => {
    clearTimeout(timeoutId);
    setVisible(id);
  };

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      if (visible < banner.length) {
        setVisible(visible + 1);
      } else {
        clearTimeout(newTimeoutId);
        setVisible(1);
      }
    }, 3000);
    setTimeoutId(newTimeoutId);
    return () => clearTimeout(newTimeoutId);
  }, [visible]);

  const { handleTranslateRight, handleTranslateleft, translate } = props;

  return (
    <div className="banner-slide">
      {banner.map(({ id, imageTablet, imageUrl, leased }) => (
        <div
          key={id}
          className={`banner-slide__item ${id != visible ? "visible" : ""}`}
        >
          <div className="banner-slide__tablet">
            <img
              src={imageTablet}
              alt=""
              className="banner-slide__imageTablet"
            />
            <p className="banner-slide__leased">
              Năm Phát Hành <span>{leased}</span>
            </p>
            <button className="banner-slide__btn">Chi Tiết</button>
          </div>
          <div className="banner-slide__imageUrl">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      ))}
      <ul className="banner-slide__list">
        {banner.map(({ id }) => (
          <li
            className={`${id === visible ? "outStanding" : ""}`}
            key={id}
            onClick={() => handleVisible(id)}
          ></li>
        ))}
      </ul>
      <Seri
        handleTranslateRight={handleTranslateRight}
        handleTranslateleft={handleTranslateleft}
        translate={translate}
      />
    </div>
  );
}

export default BanerSlide;
