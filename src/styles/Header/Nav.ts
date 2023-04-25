import { NestedSxProps } from "@/types/styles";
import { Theme } from "@mui/joy";

const navStyle: NestedSxProps<Theme> = (theme) => ({
    position: "fixed",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    left: 0,
    top: 0,
    right: 0,
    gap: 2,
    padding: 2,
    zIndex: 10,
    border: "none",
    transition:
        "background 150ms ease-in-out 50ms, box-shadow 150ms ease-in-out 50ms",
    backgroundColor: theme.vars.palette.common.white,
    boxShadow: theme.vars.shadow.sm,
    "& .MuiButton-root": {
        color: theme.vars.palette.common.black,
        transition:
            "color 150ms ease-in-out 50ms, background 150ms ease-in-out 50ms",
    },
    "&.transparent": {
        backgroundColor: "rgba(255, 255, 255, 0)",
        boxShadow: "none",
        "& .MuiButton-root": {
            color: theme.vars.palette.common.white,
            transition:
                "color 150ms ease-in-out 50ms, background 150ms ease-in-out 50ms",
        },
    },
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        gap: 4,
    },
});

export default navStyle;
