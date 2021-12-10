import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
    AppBar as MuiAppBar, 
    Badge, 
    Box, Container, CssBaseline, Divider, 
    Drawer as MuiDrawer, 
    IconButton, List, 
    ListItem, ListItemIcon, ListItemText, 
    Toolbar, Typography
} from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon, 
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Person as PersonIcon,
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
import {Link} from 'react-router-dom'
/*function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
    palette:{
        mode: 'dark'
    }
});

const DashboardContent = ({children}) => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                        pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                        </IconButton>
                        
                    </Toolbar>
                    <Divider />
                    <List>
                        <Link to="/clientes" style={{textDecoration: 'none', color:'white'}}>
                            <ListItem>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItem>
                        </Link>
                        <Link to="/compras" style={{textDecoration: 'none', color:'white'}}>
                            <ListItem>
                                <ListItemIcon>
                                    <ChevronLeftIcon />
                                </ListItemIcon>
                                <ListItemText primary="Compras" />
                            </ListItem>
                        </Link>
                        <Link to="/ventas" style={{textDecoration: 'none', color:'white'}}>
                            <ListItem>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ventas" />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    </ThemeProvider>
  );
}

export default DashboardContent;
/*export default function Dashboard() {
  return <DashboardContent />;
}*/