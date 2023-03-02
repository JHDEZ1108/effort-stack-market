/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Link, IconButton, Typography, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const instagramColor = theme.palette.socialMedia.instagramColor;
  const twitterColor = theme.palette.socialMedia.twitterColor;
  const linkedInColor = theme.palette.socialMedia.linkedInColor;
  const gitHubColor = theme.palette.socialMedia.gitHubColor;
  const defaultB = theme.palette.background.default;
  const mode = theme.palette.mode;
  let boxShadowColor;
  
  if (mode === 'light') {
    boxShadowColor = '#BFBFBF';
  } else {
    boxShadowColor = '#3F3F3F';
  }
  
  const urlList = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/JHDEZ1108',
      icon: <TwitterIcon sx={{ fontSize: '2rem', color: twitterColor }} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jhdez1108/',
      icon: <InstagramIcon sx={{ fontSize: '2rem', color: instagramColor }} />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/JHDEZ1108/pokeRedux',
      icon: <GitHubIcon sx={{ fontSize: '2rem', color: gitHubColor }} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jhdez1108/',
      icon: <LinkedInIcon sx={{ fontSize: '2rem', color: linkedInColor }} />
    }
  ];
  
  return (
    <footer  sx={{
      boxShadow: `0px 0px 10px ${boxShadowColor}`,
      backgroundColor: defaultB, 
      width:"100%", 
      mb:"3rem"
    }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ p: 1 }} >
        {urlList.map((url) => (
          <Grid item key={url.name}>
            <Link href={url.href} target="_blank" rel="noreferrer" underline="none">
              <IconButton sx={{ transition: 'transform 250ms', '&:hover': { transform: 'scale(1.5)' } }}>
                {url.icon}
              </IconButton>
            </Link>
          </Grid>
        ))}
        <Grid item>
          <Typography variant="body1" sx={{ fontSize: '0.8rem', transition: 'color 500ms' }}>
            Made by{' '}
            <Link href="https://github.com/JHDEZ1108" target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: 'blue.600', textDecorationOffset: '2px', transition: 'color 500ms', '&:hover': { color: 'blue.400' } }}>
              Josué Hernández
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
