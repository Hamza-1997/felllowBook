import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const THEME = createTheme({
    typography: {
        fontFamily: "Open Sans",
        h1: {
            fontFamily:"Merriweather"
        },
        h2: {
            fontFamily:"Merriweather"
        },
        h3: {
            fontFamily:"Merriweather"
        },
        button: {
            fontStyle: "italic",
        },
    },
});
  
export default THEME;

