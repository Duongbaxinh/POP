import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import listFim from "@/api/listFilm";
import Card from "@/components/atom/Card";
ListVideos.propTypes = {};

function ListVideos({ params }) {
  console.log("param at listvieow", params);
  const [dataMovie, setDataMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await listFim.getQueryMove({ name: params, limit: 5 });
        setDataMovie(data);
      } catch (error) {
        console.log(error);
        if (error) throw error;
      }
    };
    getData();
  }, []);
  return (
    <Box
      margin={{ lg: 0, sm: "0 auto" }}
      display="grid"
      gap="10px"
      width="100%"
      gridTemplateColumns={{
        lg: `calc(${100 / 3}%) calc(${100 / 3}%) calc(${100 / 3}%)`,
        sm: `calc(${100 / 3}%) calc(${100 / 3}%) calc(${100 / 3}%)`,
        xs: `calc(${100 / 2}%) calc(${100 / 2}%)`,
      }}
    >
      {dataMovie && dataMovie.length > 0 ? (
        dataMovie.map((item, index) => (
          <Link href={`/watch/${item.id}`}>
            {" "}
            <Card
              width={100}
              height={"141px"}
              key={index}
              title={item.name}
              Urlimage={item.avatar}
            />
          </Link>
        ))
      ) : (
        <Typography variant="h1">Khong tim thay phim cua ban </Typography>
      )}
    </Box>
  );
}

export default ListVideos;
