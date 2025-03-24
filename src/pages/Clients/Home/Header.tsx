
import React, { useState } from 'react';
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
  useTheme
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import SpaIcon from '@mui/icons-material/Spa';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#8D6E63' }}>
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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Tấm Ơi Spa
              </Typography>
              <IconButton color="inherit" aria-label="phone">
                <PhoneIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <SpaIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Tấm Ơi Spa
              </Typography>
              <Button color="inherit">Trang chủ</Button>
              <Button color="inherit">Dịch vụ</Button>
              <Button color="inherit">Tin tức</Button>
              <Button color="inherit">Về chúng tôi</Button>
              <Button color="inherit">Liên hệ</Button>
              <Button color="inherit" variant="outlined" startIcon={<EventNoteIcon />}>
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
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, backgroundColor: '#8D6E63', color: 'white' }}>
            <Typography variant="h6">Tấm Ơi Spa</Typography>
            <Typography variant="subtitle2">Nâng niu mái tóc Việt</Typography>
          </Box>
          <List>
            <ListItem button>
              <ListItemIcon><SpaIcon /></ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><SpaIcon /></ListItemIcon>
              <ListItemText primary="Dịch vụ" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><NewspaperIcon /></ListItemIcon>
              <ListItemText primary="Tin tức" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="Về chúng tôi" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LocationOnIcon /></ListItemIcon>
              <ListItemText primary="Liên hệ" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><EventNoteIcon /></ListItemIcon>
              <ListItemText primary="Đặt lịch" />
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
