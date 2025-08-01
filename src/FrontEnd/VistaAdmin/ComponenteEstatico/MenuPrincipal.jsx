import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Vista Principal', path: '/panel/principal' },
    { text: 'Vista Proyectos', path: '/panel/proyectos' },
    { text: 'Vista Contacto', path: '/panel/contacto' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            EDICION DE COMPONENTES
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map(({ text, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(path)}>
    
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  <Box
  component="main"
  sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
>
  <Toolbar />
  <Outlet />
</Box>
    </Box>
  );
}