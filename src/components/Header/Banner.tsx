import { Box, Typography, TypographyTypeMap, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";

const Banner: React.FC = () => {
    const theme = useTheme();
    const belowMd = useMediaQuery(theme.breakpoints.down("md"));
    const belowDesktop = useMediaQuery(theme.breakpoints.down("desktop"));

    const level = useMemo<TypographyTypeMap["props"]["level"]>(
        () => (belowMd ? "h1" : belowDesktop ? "display2" : "display1"),
        [belowMd, belowDesktop]
    );

    return (
        <Box className="banner" component="div">
            <Box className="intro" component="div">
                <Typography textColor="common.white" level={level}>
                    Lorem ipsum
                </Typography>
                <Typography textColor="common.white" level="body1">
                    Sit pariatur in commodo excepteur. Ullamco qui ullamco non
                    sit ex cillum duis ullamco et eiusmod. Aute duis commodo
                    Lorem sunt officia commodo esse amet ex ipsum deserunt
                    proident laborum est. Tempor incididunt aute ut irure velit
                    duis sint ex id. Reprehenderit veniam ea cupidatat duis
                    commodo. Duis laborum eu voluptate nulla nisi et non.
                    Adipisicing mollit anim aliquip qui labore. Ut elit non ex
                    eiusmod ex excepteur sit velit. Adipisicing nulla qui
                    consequat tempor. Qui eu nostrud duis nostrud irure
                    excepteur ea irure nostrud laboris.
                </Typography>
            </Box>
            <Box className="display" component="div">
                <Image
                    fill
                    src="/banner/astronaut.svg"
                    alt="banner astronaut"
                    style={{ pointerEvents: "none" }}
                />
            </Box>
        </Box>
    );
};

export default Banner;
