import { createTheme } from "@mui/material";



export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0077b6',
      light: '#8ecae6'

    },
    secondary: {
      main: '#fb8500'
    },
    background: {
      default: "#f8f9fa"
    },
    info: {
      main: '#fff',
    }

  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          height: 100,

          backgroundColor: '#FFF',
          // backgroundImage: 'linear-gradient(0deg, #FFF 0%, #B5FFFC 100%)'
          

          /*  backgroundImage:  "linear-gradient(to bottom , #fff, #DAEAF1)" */

        },
      }
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
        color: 'info'
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


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }

  }
});