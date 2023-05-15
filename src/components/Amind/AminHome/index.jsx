import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import them from "../../theme/them";
import React from "react";

function AdminHome({ Category }) {
  return (
    <>
      {/*  */}
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{
          p: "70px 30px",
          gap: "30px",
          background: "#202c41",
        }}
      >
        {Category.map(({ id, name, number, detail, share }, index) => (
          <Card
            key={id}
            sx={{ width: 295, background: "#5a7dba", color: grey[500] }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {number}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{detail}</Button>
              <Button size="small">{share}</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default AdminHome;
