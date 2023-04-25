import { NestedSxProps } from "@/types/styles";
import { Theme } from "@mui/joy";

const skillsStyle: NestedSxProps<Theme> = (theme) => ({
    "& .skills-main": {
        display: "flex",
        gap: 2,
        "& .skills-category": {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "start",
            gap: 6,
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection:"column"
        },
    },
});

export default skillsStyle;
