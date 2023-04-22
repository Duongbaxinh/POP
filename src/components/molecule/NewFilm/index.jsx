import React from "react";
import { SwiperSlide } from "swiper/react";
import dataNewPhim from "../../../assets/data/dataNewPhim";
import Card from "../../atom/Card";
import Slidecard from "../../atom/Slidecard";

NewPhim.propTypes = {};

function NewPhim(props) {
  return (
    <Slidecard
      nameCard={"NewPhim"}
      preView={6}
      width={"166px"}
      height={"249px"}
      title={"Phim Mới - Xem Ngay!"}
    >
      {dataNewPhim.map(({ id, title, imageUrl, form, chapter }) => (
        <SwiperSlide key={id} style={{ flexShrink: 1 }}>
          <Card
            title={title}
            Urlimage={imageUrl}
            form={form}
            chapter={chapter}
            width={"166px"}
            height={"249px"}
          />
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default NewPhim;
