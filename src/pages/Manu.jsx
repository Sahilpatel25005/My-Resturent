import React from "react";
import { MenuList } from "../Data";
import Layout from "../components/Layout/Layout";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function Manu() {
  return (
    <Layout>
      <Box sx={{display : "flex" , flexWrap : "wrap" , justifyContent : "center"}}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth : "390px" , display : "flex" , m : 2  }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
                <Typography variant="h4" sx={{mt : 1}}>

                  <CurrencyRupeeIcon sx={{mr : 1}} />{menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Manu;
