import { NestedSxProps } from "@/types/styles";
import { Theme } from "@mui/joy";

const projectsStyle: NestedSxProps<Theme> = (theme) => ({
    "& .project-list": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        "& .project-card": {
            minWidth: "20rem",
        },
        [theme.breakpoints.down("desktop")]: {
            gap: 10,
            "& .project-card": {
                minWidth: "18rem",
            },
        },
        [theme.breakpoints.down("laptop")]: {
            gap: 8,
        },
        [theme.breakpoints.down("md")]: {
            gap: 6,
            "& .project-card": {
                minWidth: "16rem",
            },
        },
        [theme.breakpoints.down("tablet")]: {
            gap: 4,
            "& .project-card": {
                minWidth: "15rem",
            },
        },
    },
});

export default projectsStyle;
