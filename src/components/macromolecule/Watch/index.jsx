import listFilm from "@/api/listFilm";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
Watch.propTypes = {};

function Watch(props) {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState(null);
  useEffect(() => {
    const dataDetail = async () => {
      try {
        const { data } = await listFilm.getDetai(id);
        setDataDetail(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    dataDetail();
  }, []);
  return (
    <div>
      <Box width="100%">{dataDetail && <Banner data={dataDetail} />}</Box>
    </div>
  );
}

export default Watch;
