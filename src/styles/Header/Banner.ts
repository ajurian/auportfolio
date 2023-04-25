import { NestedSxProps } from "@/types/styles";
import { Theme } from "@mui/joy";

const bannerStyle: NestedSxProps<Theme> = (theme) => ({
    height: "100vh",
    backgroundImage: "url(banner/background.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12,
    gap: 24,
    "& .intro": {
        maxWidth: "50rem",
    },
    "& .display": {
        position: "relative",
        width: "30rem",
        height: "30rem",
        flexShrink: 0,
    },
    [theme.breakpoints.down("xl")]: {
        "& .display": {
            width: "26rem",
            height: "26rem",
        },
    },
    [theme.breakpoints.down("lg")]: {
        "& .display": {
            width: "22rem",
            height: "22rem",
        },
    },
    [theme.breakpoints.down("laptop")]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
        "& .intro": {
            order: 2,
        },
        "& .display": {
            order: 1,
            width: "18rem",
            height: "18rem",
        },
        "@media (orientation: landscape)": {
            height: "100vw",
        },
    },
    [theme.breakpoints.down("sm")]: {
        height: "100vmax",
        paddingInline: 8,
        "& .display": {
            display: "none",
        },
    },
});

export default bannerStyle;
