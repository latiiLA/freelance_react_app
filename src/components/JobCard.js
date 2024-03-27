import { Box, Card, Typography } from "@mui/material";
import React from "react";

const JobCard = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingX: "2rem",
              paddingY: "2.5rem",
              border: "0.2rem solid #333333",
              // boxShadow: "0.2rem 0.2rem #333333",
              borderRadius: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <Typography>Posted 2 weaks ago</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Web Developer Needed for Creating an Engaging Responsive App
                landing Page for our website
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                }}
              >
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Payment Verified
                </Typography>
                <Typography>Rating</Typography>
                <Typography>$8K+ spent</Typography>
                <Typography>Location</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "1.5rem",
                  gap: 2,
                }}
              >
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Fixed Price
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Intermediate
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Estimated Budged
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: "italic" }}>
                  We are looking for a experienced web designer/developer to
                  create an engaging and visually stunning app landing page for
                  our travel app website, TripWyz is not just another travel
                  app; it's a portal to social discovery and travel planning,
                  designed to connect users with their next adventure
                  effortlessly. Our goal is to reflect the app's innovative
                  spirit and functionality through its landing page, providing a
                  memorable first impression to our visitors.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Typography>Categories</Typography>
                <Typography>Categories</Typography>
                <Typography>Categories</Typography>
                <Typography>Categories</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Typography>Number of Applications:</Typography>
                <Typography>Less than 5</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;
