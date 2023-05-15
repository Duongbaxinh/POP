import React from "react";
import dataNewPhim from "@/assets/data/dataNewPhim";
import { ShopIcon } from "@/assets/svg/ShopIcon";
import Slidecard from "@/components/atom/Slidecard";
import Card from "@/components/atom/Card";
import { SwiperSlide } from "swiper/react";
Top.propTypes = {};
function Top(props) {
  return (
    <Slidecard
      nameCard={"Top"}
      preView={5}
      width={"259px"}
      height={"146px"}
      title={"Phim Mới - Xem Ngay!"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {dataNewPhim.map(({ id, title, imageUrl, top }) => (
        <SwiperSlide key={id} style={{ flexShrink: 1 }}>
          <Card
            title={title}
            Urlimage={imageUrl}
            top={top}
            width={"203px"}
            height={"304px"}
          />
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default Top;
