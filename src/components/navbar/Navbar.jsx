import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: "#E75129"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{paddingY: "1rem"}}>    
          <Typography
            variant="h6"
            noWrap
       
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" className='z-10'>
            <img src="/images/Logonegativo.png" alt="Logo" style={{ marginRight: '0.5rem', height: '7rem' }} />
        </Link>  </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className='z-10'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/">
                  <Typography textAlign="center">Proyecto</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/resultados">
                  <Typography textAlign="center">Resultados</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/mejoratucentro">
                  <Typography textAlign="center">Mejora tu centro</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/noticias">
                  <Typography textAlign="center">Noticias</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/contacto">
                  <Typography textAlign="center">Contacto</Typography>
                  </Link>
                </MenuItem>
                
             
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > <Link to="/" className='z-10'>
               <img src="/images/Logonegativo.png" alt="Logo" style={{ marginRight: '0.5rem', height: '7rem' }} />
               </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'flex-end' }}>
            <Link to="/" className='z-10'>
            
              <Button
                 
                onClick={handleCloseNavMenu}
                sx={{mr:2, my: 2, color: 'white', display: 'block' }}
              >
               Proyecto
              </Button>
           </Link>
           <Link to="/resultados" className='z-10'>
            
              <Button
                 
                onClick={handleCloseNavMenu}
                sx={{mr:2, my: 2, color: 'white', display: 'block' }}
              >
               Resultados
              </Button>
           </Link>
           <Link to="/mejoratucentro" className='z-10'>
            
              <Button
                 
                onClick={handleCloseNavMenu}
                sx={{mr:2, my: 2, color: 'white', display: 'block' }}
              >
               Mejora tu centro
              </Button>
           </Link>
           <Link to="/noticias" className='z-10'>
            
              <Button
                 
                onClick={handleCloseNavMenu}
                sx={{mr:2, my: 2, color: 'white', display: 'block' }}
              >
               Noticias
              </Button>
           </Link>
           <Link to="/contacto" className='z-10'>
            
              <Button
                 
                onClick={handleCloseNavMenu}
                sx={{mr:2, my: 2, color: 'white', display: 'block' }}
              >
               Contacto
              </Button>
           </Link>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;