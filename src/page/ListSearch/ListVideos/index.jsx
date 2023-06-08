
import { Box, Link, Typography } from "@mui/material";
import React from "react";

import Card from "@/components/atom/Card";

ListVideos.propTypes = {};

function ListVideos({ dataMovie, isLoading }) {
  if (isLoading) {
    return (
      <Typography variant="h1" pt="150px">
        {" "}
        Loadding......
      </Typography>
    );
  }
  return (
    <Box
      margin={{ lg: 0, sm: "0 auto" }}
      display="grid"
      gap="10px"
      width="100%"
      gridTemplateColumns={{
        lg: `calc(${100 / 3}%) calc(${100 / 3}%) calc(${100 / 3}%)`,
        sm: `calc(${100 / 2}%) calc(${100 / 2}%)`,
        xs: `calc(${100}%) `,
      }}
    >
      {dataMovie?.length > 0 ? (
        dataMovie?.map((item, index) => (
          <Link key={index} href={`/ watch / ${item.id}`}>
            {" "}
            <Card
              key={index}
              width={'auto'}
              height={'163px'}
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
