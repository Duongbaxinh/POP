import React, { useState } from "react";
import BanerSlide from "../molecule/BanerSlide";
import LiveStream from "../molecule/LiveStream";
import NewPhim from "../molecule/NewFilm";
import Pop from "../molecule/Pop";
import Shop from "../molecule/Shop";
import ShopItem from "../molecule/ShopItem";
import Top from "../molecule/Top";
function Hompage(props) {
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
    <div>
      <BanerSlide
        handleTranslateRight={handleTranslateRight}
        handleTranslateleft={handleTranslateleft}
        translate={translate}
      />
      <Shop />
      <LiveStream />
      <ShopItem />
      {/* New phim */}
      <NewPhim />
      <Pop
        title={"Pop Đề Cử"}
        imageURL={
          "https://res.cloudinary.com/dwu92ycra/image/upload/v1680582045/POP/POP_mrpdxg.webp"
        }
        name={"Thám Tử Lừng Danh Conan: Nàng Dâu Halloween - Tập full"}
        release_year={2020}
        time={12}
      />
      <Top />
    </div>
  );
}

export default Hompage;
