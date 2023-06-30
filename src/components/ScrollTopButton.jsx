import React, { useEffect, useState } from 'react';
import { Fab, useTheme } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollTopButton() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showScroll ? (
    <Fab
      color="secondary"
      size="small"
      aria-label="scroll back to top"
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        color: theme.palette.common.white,
        backgroundColor: primaryMain,
        '&:hover': {
          backgroundColor: primaryLight,
        },
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  ) : null;
}

export default ScrollTopButton;
