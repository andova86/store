import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: '#00a6fb',
          light: '#8ecae6'
    
        },
        secondary: {
          main: '#4cc9f0'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
        },
        MuiTypography: {
            styleOverrides: {
              h1: {
                fontSize: 30,
                fontWeight: 600
              },
              h2: {
                fontSize: 20,
                fontWeight: 400
              },
              subtitle1: {
                fontSize: 18,
                fontWeight: 600
              }
            }
          },

          
    MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small',
          disableElevation: true,
          color:'primary'
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: 10,
            ":hover": {
              opacity: 0.8,
              transition: 'all 0.3s ease-in-out'
            }
          }
        }
      },
  
    },
});
