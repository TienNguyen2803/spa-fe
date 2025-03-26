import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import { EventNote } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhoneIcon from "@mui/icons-material/Phone";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SpaIcon from "@mui/icons-material/Spa";
import { Link } from "react-router";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#8D6E63" }}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                Tấm Ơi Spa
              </Typography>
              <IconButton color="inherit" aria-label="phone">
                <PhoneIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <SpaIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                Tấm Ơi Spa
              </Typography>
              <Button
                color="inherit"
                component={Link}
                to="/home"
                startIcon={<HomeIcon />}
              >
                Trang chủ
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                startIcon={<InfoIcon />}
              >
                Giới thiệu
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/services"
                startIcon={<SpaIcon />}
              >
                Dịch vụ
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/gallery"
                startIcon={<PhotoLibraryIcon />}
              >
                Hình ảnh
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/news"
                startIcon={<NewspaperIcon />}
              >
                Tin tức
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                startIcon={<LocationOnIcon />}
              >
                Liên hệ
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                startIcon={<EventNote />}
              >
                Đặt lịch
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            background: "#FBF7F4",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #8D6E63 0%, #6D4C41 100%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <SpaIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
              Tấm Ơi Spa
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
              Nâng niu mái tóc Việt
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItem
              component={Link}
              to="/home"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Trang chủ"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>

            <ListItem
              component={Link}
              to="/about"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <InfoIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Giới thiệu"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>

            <ListItem
              component={Link}
              to="/services"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <SpaIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Dịch vụ"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>

            <ListItem
              component={Link}
              to="/gallery"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <PhotoLibraryIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Hình ảnh"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>

            <ListItem
              component={Link}
              to="/news"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <NewspaperIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Tin tức"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>

            <ListItem
              component={Link}
              to="/contact"
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  bgcolor: "rgba(141, 110, 99, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#8D6E63" }} />
              </ListItemIcon>
              <ListItemText
                primary="Liên hệ"
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItem>
          </List>

          <Divider sx={{ mx: 2, bgcolor: "rgba(141, 110, 99, 0.12)" }} />

          <Box sx={{ p: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<EventNote />}
              sx={{
                bgcolor: "#8D6E63",
                "&:hover": {
                  bgcolor: "#6D4C41",
                },
                borderRadius: 2,
                py: 1,
                mb: 2,
              }}
            >
              Đặt lịch ngay
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#8D6E63",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <PhoneIcon fontSize="small" />
              0907 616 866
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
