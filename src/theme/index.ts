import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
});

export default theme;
