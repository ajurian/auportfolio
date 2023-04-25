import { Theme } from "@mui/joy";
import { SxProps } from "@mui/system";
import projectsStyle from "./Projects";
import skillsStyle from "./Skills";

const mainStyle: SxProps<Theme> = (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: 12,
    "& .section": {
        maxWidth: "70rem",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        "& .section-title": {
            textAlign: "center",
            fontWeight: "bold",
        },
    },
    "& .skills": skillsStyle,
    "& .projects": projectsStyle,
    [theme.breakpoints.down("sm")]: {
        paddingInline: 8,
    },
});

export default mainStyle;
