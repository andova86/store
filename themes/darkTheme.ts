import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
        },
    },
});
