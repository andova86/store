import { deepOrange, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
   

  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
   
   
    
   
  }
});