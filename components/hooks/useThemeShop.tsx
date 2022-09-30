import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isDarkSet } from "../../redux/slices";
import { RootState } from "../../redux/store";



export const useThemeShop = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.theme)

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
               
                dispatch(isDarkSet(!state.isDark))

            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            primary: {
                                main: '#fff'
                              },

                              secondary: {
                                main: grey[500]
                              },

                            divider: grey[200],
                            text: {
                                primary: grey[900],
                                secondary: grey[800],
                            },
                        }
                        : {
                            // palette values for dark mode
                          
                        }),
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
                        
                            height: 60
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
            }),
        [mode],
    );

    return {colorMode: colorMode,theme: theme }

}
