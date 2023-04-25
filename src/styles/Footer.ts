import { Theme } from "@mui/joy";
import { SxProps } from "@mui/system";

const footerStyle: SxProps<Theme> = (theme) => ({
    paddingInline: 16,
    paddingBlock: 8,
    "& .contact": {
        maxWidth: "60rem",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },
    [theme.breakpoints.down("sm")]: {
        paddingInline: 10,
    },
});

export default footerStyle;
