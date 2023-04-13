import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { DarkMode, LightMode } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, useTheme, IconButton, SvgIcon, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { setMode } from '../../slices/uiSlice';
import AppContext from '../../context/AppContext';
import FlexBetween from '../FlexBetween';

function Navbar() {
  const theme = useTheme();
  const defaultB = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  
  const { state } = useContext(AppContext);
  const { cart } = state;
  
  const styles = {
    number: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      backgroundColor: '#f44336',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      fontWeight: 'bold',
      color: '#fff',
    },
  };
  
  
  const dispatch = useDispatch();
  
  return(
    <Box 
      sx={{
        boxShadow: `0px 0px 2px #fae6af`,
        backgroundColor: defaultB, 
        width:"100%", 
        mb:"3rem"
      }}>
      <FlexBetween className="navbar" padding="1rem 6%">
        <FlexBetween gap="1.75rem">
          <IconButton
            component={Link}
            alt="ESLogo"
            to="/"
          >
            <SvgIcon style={{ height: '30px', width: '30px' }}>
              <svg
                style={{ fill: primaryMain, cursor: 'pointer' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 495.93 565.75">
                <g id="Capa_2" data-name="Capa 2">
                  <g id="Test">
                    <path d="M495.93,316.33v97.9a20.86,20.86,0,0,1-10.42,18.06l-230,132.78a5,5,0,0,1-7.52-4.34V460a8.78,8.78,0,0,1,4.39-7.6L389,373.46a5.15,5.15,0,0,0,0-8.92l-135-78a4,4,0,0,1,0-7l89.57-51.71a7.21,7.21,0,0,1,7.19,0l141.19,81.5A8,8,0,0,1,495.93,316.33Z"/>
                    <path d="M488.3,144.34l-87.6,50.58a7.91,7.91,0,0,1-7.9,0L251.71,113.46a7.51,7.51,0,0,0-7.48,0L204.14,136.6a3.85,3.85,0,0,0,0,6.66l87.39,50.46a4,4,0,0,1,0,7l-89.21,51.51a7.94,7.94,0,0,1-7.89,0L7.65,144.34a5.09,5.09,0,0,1,0-8.81L237.53,2.79a20.87,20.87,0,0,1,20.85,0L488.3,135.53A5.09,5.09,0,0,1,488.3,144.34Z"/>
                    <path d="M198.37,430.34V531.86a5.16,5.16,0,0,1-7.74,4.47l-180.2-104A20.85,20.85,0,0,1,0,414.23V206.11a5.14,5.14,0,0,1,7.72-4.45l86.8,50.11a9.31,9.31,0,0,1,4.66,8.07V363.76a9.08,9.08,0,0,0,4.54,7.86l91.13,52.61A7.05,7.05,0,0,1,198.37,430.34Z"/>
                  </g>
                </g>
              </svg>
            </SvgIcon>
          </IconButton>
        </FlexBetween>
        <FlexBetween gap="1.75rem">
          <IconButton
            sx={{ fontSize: "25px" }}
            onClick={() => dispatch(setMode())}
          >
          {theme.palette.mode === "dark" ? (
            <LightMode alt="LightMode" sx={{ color: primaryMain, fontSize: "25px" }} />
            ) : (
            <DarkMode alt="DarkMode" sx={{ color: primaryMain, fontSize: "25px" }} />
          )}
          </IconButton>
          <IconButton
            component={Link}
            to="/checkout"
            alt="Cart"
            sx={{ fontSize: "25px", color: primaryMain, }}
          >
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <Typography sx={styles.number}>
                {cart.length}
              </Typography>
            )}
          </IconButton>
        </FlexBetween>
      </FlexBetween>
    </Box>
  )
}

export default Navbar;
