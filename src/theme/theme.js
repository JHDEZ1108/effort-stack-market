/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
// color design tokens export
export const colorTokens = {
  grey: {
    // DarkMode
    50: "#283747",
    100: "#1f2c3a",
    200: "#15202c",
    
    // LightMode
    300: "#FFFFFF",
    400: "#fafafa",
    500: "#f7f7f7",
    600: "#1e1e1f"

  },
  primary: {
    // DarkMode
    50: "#edb928",
    100: "#ffd86c",
    200: "#f7d986",
    300: "#9ba9ca",
    
    // light Mode
    400: "#f2b302",
    500: "#fad778",
    600: "#fcdf8b"
  },
  semantic:{
    50: "#50e3a8",
    100: "#e6436e",
    200: "#e8a74d",
    300: "#4d98e8"
  },
  socialMedia:{
    50: "#dc2626",
    100: "#336ff2",
    200: "#57a5f2",
    300: "#3cab91",
  }
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[50],
              main: colorTokens.primary[100],
              light: colorTokens.primary[200],
              aux: colorTokens.primary[300],
              text: colorTokens.grey[300]
            },
            neutral: {
              succes: colorTokens.semantic[50],
              error: colorTokens.semantic[100],
              warning: colorTokens.semantic[200],
              info: colorTokens.semantic[300],
            },
            background: {
              default: colorTokens.grey[50],
              alt: colorTokens.grey[100],
              aux: colorTokens.grey[200]
            },
            socialMedia: {
              instagramColor: colorTokens.socialMedia[50],
              linkedInColor: colorTokens.socialMedia[100],
              twitterColor: colorTokens.socialMedia[200],
              gitHubColor: colorTokens.socialMedia[300]
            }
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[400],
              main: colorTokens.primary[500],
              light: colorTokens.primary[600],
              aux: colorTokens.primary[300],
              text: colorTokens.grey[600]
            },
            neutral: {
              succes: colorTokens.semantic[50],
              error: colorTokens.semantic[100],
              warning: colorTokens.semantic[200],
              info: colorTokens.semantic[300],
            },
            background: {
              default: colorTokens.grey[300],
              alt: colorTokens.grey[400],
              aux: colorTokens.grey[500],
            },
            socialMedia: {
              instagramColor: colorTokens.socialMedia[50],
              linkedInColor: colorTokens.socialMedia[100],
              twitterColor: colorTokens.socialMedia[200],
              gitHubColor: colorTokens.socialMedia[300]
            }
          }),
    },
    typography: {
      fontFamily: "Amatic SC, cursive",
      fontSize: 16,
      h1: {
        fontSize: 64,
        fontWeight: 700,
      },
      h2: {
        fontSize: 56,
        fontWeight: 700,
      },
      h3: {
        fontSize: 48,
        fontWeight: 700,
      },
      h4: {
        fontSize: 40,
        fontWeight: 700,
      },
      h5: {
        fontSize: 32,
        fontWeight: 700,
      },
      h6: {
        fontSize: 24,
        fontWeight: 700,
      },
      body1: {
        fontFamily: "Poiret One, cursive",
        fontSize: 20,
        fontWeight: 400,
      },
      body2: {
        fontFamily: "Poiret One, cursive",
        fontSize: 16,
        fontWeight: 400,
      },
      subtitle1: {
        fontFamily: "Poiret One, cursive",
        fontSize: 14,
        fontWeight: 400,
      },
    },    
  };
};
