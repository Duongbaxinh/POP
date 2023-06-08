import listFilm from "@/api/listFilm";
import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import useFetch from "../../../hooks/useFetch";
Watch.propTypes = {};

function Watch(props) {
  const { id } = useParams();
  // const [dataDetail, setDataDetail] = useState(null);
  const handleApi = useMemo(() => listFilm.getDetai(id), [id])
  const { data: dataDetail, isLoading } = useFetch(handleApi)
  // useEffect(() => {
  //   const dataDetail = async () => {
  //     try {
  //       const { response } = await handleApi;
  //       console.log('detail film', response)
  //       setDataDetail(response);
  //       return response;
  //     } catch (error) {
  //       return error;
  //     }
  //   };
  //   dataDetail();
  // }, []);
  return (
    <div>
      <Box width="100%">{dataDetail && <Banner data={dataDetail} />}</Box>
    </div>
  );
}

export default Watch;
