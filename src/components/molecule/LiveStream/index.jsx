import React from "react";
import { SwiperSlide } from "swiper/react";
import { ShopIcon } from "../../../assets/svg/ShopIcon";
import dataLive from "../../../assets/data/dataLive";
import Card from "../../atom/Card";
import Slidecard from "../../atom/Slidecard";

function LiveStream(props) {
  return (
    <Slidecard
      nameCard={"LiveStream"}
      preView={5}
      width={"203px"}
      height={"114px"}
      title={"Livestream Anime Tập Mới Mỗi Ngày ✨"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {dataLive.map(({ id, title, imageUrl }) => (
        <SwiperSlide key={id}>
          <Card
            title={title}
            Urlimage={imageUrl}
            anouncement={"sẽ diễn ra"}
            width={"203px"}
            height={"114px"}
          />
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default LiveStream;
