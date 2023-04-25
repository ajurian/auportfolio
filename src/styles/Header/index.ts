import { Theme } from "@mui/joy";
import { SxProps } from "@mui/system";
import bannerStyle from "./Banner";
import navStyle from "./Nav";

const headerStyle: SxProps<Theme> = {
    "& .nav": navStyle,
    "& .banner": bannerStyle,
};

export default headerStyle;
