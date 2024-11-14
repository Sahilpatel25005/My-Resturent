import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            padding: "6rem 2rem ",
            textAlign: "center",
            "& h4": { fontWeight: "bold", fontSize: "4rem", my: 2 },
            "& p": { textAlign: "justify", paddingBottom: "1rem" },
            "@media (max-width : 600px)": {
              paddingTop: "0",
              "& h4": { fontSize: "1.5rem" },
              marginTop: "1.5rem",
              px: "1.5rem",
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: "1rem" }}>
            Welcome to my Resturent
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            amet perferendis, praesentium nobis officia tempora quo saepe alias,
            ab iusto numquam, voluptas molestias soluta sunt ipsum aliquam neque
            dolor dicta? Nulla enim libero voluptatum vero beatae minus odio quo
            amet inventore soluta! Recusandae expedita dignissimos dolorem
            quidem perferendis ullam, consectetur natus saepe? Sed voluptatem,
            officia quo ut blanditiis eius quae, quos voluptates ab impedit
            iusto quidem nisi molestiae explicabo odit commodi eveniet, porro
            libero magnam dignissimos earum! In corrupti earum sequi odio ullam
            saepe repellendus voluptate suscipit, rerum vel est eligendi ad
            omnis temporibus, quibusdam placeat quae. Qui, cumque consequatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            culpa recusandae veritatis fugiat dolorem voluptatibus voluptatum
            molestiae commodi non adipisci delectus. Provident enim in eligendi
            id velit natus placeat, quibusdam cumque accusantium numquam, iste
            veniam et. Itaque, consectetur neque? Cupiditate consectetur
            perferendis temporibus tenetur, dolorem commodi odit laboriosam
            harum aut officia, in earum quo provident deleniti reiciendis
            facilis iste. Hic quasi nulla repellendus maiores totam labore ipsam
            itaque, voluptatum, blanditiis praesentium cum, delectus doloribus
            nihil molestias. Magnam ipsa totam accusamus quod necessitatibus
            cupiditate inventore deleniti, voluptas natus, fugit minima atque
            voluptate cumque animi laboriosam. Molestias voluptas suscipit
            corporis distinctio tenetur!
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
