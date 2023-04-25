import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
    interface BreakpointOverrides {
        xs: true;
        mobile: true;
        sm: true;
        tablet: true;
        laptop: true;
        md: true;
        lg: true;
        desktop: true;
        xl: true;
    }
}

const theme = extendTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    breakpoints: {
        values: {
            xs: 0,
            mobile: 0,
            sm: 600,
            tablet: 640,
            laptop: 1024,
            md: 900,
            lg: 1200,
            desktop: 1200,
            xl: 1536,
        },
    },
});

export default theme;
