import { Box, BoxProps, Typography } from "@mui/joy";
import React from "react";

type SectionProps = BoxProps & {
    title: string;
};

const Section: React.FC<SectionProps> = ({
    title,
    className,
    children,
    ...props
}) => {
    return (
        <Box className={`section ${className}`} component="div" {...props}>
            <Typography className="section-title" level="h3">
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default Section;
