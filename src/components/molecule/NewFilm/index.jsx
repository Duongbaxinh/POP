import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";

NewPhim.propTypes = {};

function NewPhim({ data }) {
  console.log("data new phim ", data);
  return (
    <Slidecard
      nameCard={"NewPhim"}
      preView={6}
      width={"166px"}
      height={"249px"}
      title={"Phim Mới - Xem Ngay!"}
    >
      {data &&
        data.map(({ id, name, avatar, dubbing, chapter }) => (
          <SwiperSlide key={id} style={{ flexShrink: 1 }}>
            <Link href={`/watch/${id}`}>
              {" "}
              <Card
                title={name}
                Urlimage={avatar}
                form={dubbing}
                chapter={chapter}
                width={"166px"}
                height={"249px"}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Slidecard>
  );
}

export default NewPhim;
