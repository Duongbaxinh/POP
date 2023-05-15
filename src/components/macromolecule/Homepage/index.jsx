import React, { useEffect, useState } from "react";
import BanerSlide from "@/components/molecule/BanerSlide";
import LiveStream from "@/components/molecule/LiveStream";
import NewPhim from "@/components/molecule/NewFilm";
import Pop from "@/components/molecule/Pop";
import Shop from "@/components/molecule/Shop";
import ShopItem from "@/components/molecule/ShopItem";
import Top from "@/components/molecule/Top";
import listFilm from "@/components/../api/listFilm";
function Hompage(props) {
  const [dataHomePage, setDataHomePage] = useState(null);
  useEffect(() => {
    const loadListFim = async () => {
      try {
        const { data } = await listFilm.getList();
        return setDataHomePage(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadListFim();
  }, []);
  const [translate, setTranslate] = useState(0);
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
      <LiveStream data={dataHomePage} />
      <ShopItem />
      {/* New phim */}
      <NewPhim data={dataHomePage} />
      {/* /* title : tiêu đề của component pop imageURL: background của component
      pop; name:tên phim; release_year: năm phát hàng; time : thời lượng */}
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
