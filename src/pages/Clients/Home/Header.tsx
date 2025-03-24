import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import SpaIcon from "@mui/icons-material/Spa";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Link } from "react-router";
import { EventNote } from "@mui/icons-material";

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
              <Button color="inherit" component={Link} to="/home" startIcon={<HomeIcon />}>
                Trang chủ
              </Button>
              <Button color="inherit" component={Link} to="/about" startIcon={<InfoIcon />}>
                Giới thiệu
              </Button>
              <Button color="inherit" component={Link} to="/services" startIcon={<SpaIcon />}>
                Dịch vụ
              </Button>
              <Button color="inherit" component={Link} to="/products" startIcon={<ShoppingBasketIcon />}>
                Sản phẩm
              </Button>
              <Button color="inherit" component={Link} to="/gallery" startIcon={<PhotoLibraryIcon />}>
                Hình ảnh
              </Button>
              <Button color="inherit" component={Link} to="/news" startIcon={<NewspaperIcon />}>
                Tin tức
              </Button>
              <Button color="inherit" component={Link} to="/contact" startIcon={<LocationOnIcon />}>
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

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, backgroundColor: "#8D6E63", color: "white" }}>
            <Typography variant="h6">Tấm Ơi Spa</Typography>
            <Typography variant="subtitle2">Nâng niu mái tóc Việt</Typography>
          </Box>
          <List>
            <ListItem component={Link} to="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItem>
            <ListItem component={Link} to="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Giới thiệu" />
            </ListItem>
            <ListItem component={Link} to="/services">
              <ListItemIcon>
                <SpaIcon />
              </ListItemIcon>
              <ListItemText primary="Dịch vụ" />
            </ListItem>
            <ListItem component={Link} to="/products">
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="Sản phẩm" />
            </ListItem>
            <ListItem component={Link} to="/gallery">
              <ListItemIcon>
                <PhotoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Hình ảnh" />
            </ListItem>
            <ListItem component={Link} to="/news">
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Tin tức" />
            </ListItem>
            <ListItem component={Link} to="/contact">
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Liên hệ" />
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle2">Hotline: 0907 616 866</Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
