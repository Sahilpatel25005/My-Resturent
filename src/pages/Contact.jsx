import React from "react";
import Layout from "../components/Layout/Layout";
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 7, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturent</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          quisquam voluptatibus? Sapiente omnis nostrum doloribus voluptate
          nemo. Beatae, at? Ipsam non maxime reiciendis quaerat, dolor corrupti
          libero numquam unde!
        </p>
      </Box>
      <Box
        sx={{
          m: 5,
          width: "600px",
          ml: 7,
          "@media (max-width : 600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1234567890(tallfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  +91 123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
