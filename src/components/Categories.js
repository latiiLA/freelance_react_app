import React from "react";

import { Box, Typography, Button, Divider } from "@mui/material";

// Material UI icons
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WebIcon from "@mui/icons-material/Web";
import AdbIcon from "@mui/icons-material/Adb";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ComputerIcon from "@mui/icons-material/Computer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import BusinessIcon from "@mui/icons-material/Business";
import TranslateIcon from "@mui/icons-material/Translate";
import GavelIcon from "@mui/icons-material/Gavel";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";

import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SellIcon from "@mui/icons-material/Sell";
import BookIcon from "@mui/icons-material/Book";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CodeIcon from "@mui/icons-material/Code";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DiamondIcon from "@mui/icons-material/Diamond";
import Code from "@mui/icons-material/Code";

const Categories = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Browse through different job categories and sub categories
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginX: "15rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <DesignServicesIcon />
              <WebIcon />
              <AdbIcon />
              <ComputerIcon />
              <SportsEsportsIcon />
              <AccountBalanceIcon />
              <ManageAccountsIcon />
              <VideoSettingsIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <Typography sx={{ alignContent: "left" }}>
                Graphic design
              </Typography>
              <Typography>Web design</Typography>
              <Typography>Android development</Typography>
              <Typography>Software development</Typography>
              <Typography>Game development</Typography>
              <Typography>Accounting</Typography>
              <Typography>Management</Typography>
              <Typography>Video Editing</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 0.5,
            }}
          >
            <AnalyticsIcon />
            <BusinessIcon />
            <GavelIcon />
            <TerminalIcon />
            <StorageIcon />
            <AddShoppingCartIcon />
            <InfoIcon />
            <TranslateIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 0.25,
            }}
          >
            <Typography>System Analyst</Typography>
            <Typography>Fashion design</Typography>
            <Typography>Attorney</Typography>
            <Typography>Linux developer</Typography>
            <Typography>Database design</Typography>
            <Typography>E-commerce</Typography>
            <Typography>Translation</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <ScreenSearchDesktopIcon /> <SellIcon />
            <BookIcon />
            <MusicNoteIcon />
            <Code />
            <AdminPanelSettingsIcon />
            <DiamondIcon />
            <MonitorHeartIcon />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography>SEO</Typography>
            <Typography>Marketing</Typography>
            <Typography>Blogging</Typography>
            <Typography>Music production</Typography>
            <Typography>Front End developer</Typography>
            <Typography>Web admin</Typography>
            <Typography>Fashion design</Typography>
            <Typography>Health care</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
