import {
    Box,
    CircularProgress,
    LinearProgress,
    Typography,
    useTheme,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import Section from "./Section";

type SkillItemProps = {
    level: number;
    name: string;
};

const SkillItem: React.FC<SkillItemProps> = ({ level, name }) => {
    const theme = useTheme();
    const bellowMd = useMediaQuery(theme.breakpoints.down("md"));

    const ProgressComponent = useMemo(
        () =>
            bellowMd ? (
                <CircularProgress
                    determinate
                    color="neutral"
                    size="lg"
                    value={level}
                    sx={{ alignSelf: "center" }}
                >
                    <Typography color="neutral">{level}%</Typography>
                </CircularProgress>
            ) : (
                <LinearProgress
                    determinate
                    color="neutral"
                    size="lg"
                    thickness={20}
                    value={level}
                    sx={{ width: "16rem" }}
                >
                    <Typography
                        textColor="common.white"
                        sx={{ mixBlendMode: "difference" }}
                    >
                        {level}%
                    </Typography>
                </LinearProgress>
            ),
        [bellowMd, level]
    );

    return (
        <Box display="flex" flexDirection="column">
            {ProgressComponent}
            <Typography
                level="body2"
                textAlign="center"
                fontWeight="bold"
                marginTop={2}
            >
                {name}
            </Typography>
        </Box>
    );
};

type SkillListProps = {
    name: string;
    children?: React.ReactNode;
};

const SkillList: React.FC<SkillListProps> = ({ name, children }) => {
    return (
        <Box className="skills-category" component="div">
            <Typography
                level="h5"
                flexBasis="100%"
                textAlign="center"
                marginBottom={2}
            >
                {name}
            </Typography>
            {children}
        </Box>
    );
};

const Skills = () => {
    return (
        <Section title="Skills" className="skills" id="skills">
            <Box className="skills-main" component="div">
                <SkillList name="Web development">
                    <SkillItem level={88} name="Frontend" />
                    <SkillItem level={79} name="Backend" />
                    <SkillItem level={70} name="Web design" />
                    <SkillItem level={82} name="React" />
                </SkillList>
                <SkillList name="Other">
                    <SkillItem level={85} name="Java" />
                    <SkillItem level={84} name="C#" />
                    <SkillItem level={90} name="Python" />
                </SkillList>
            </Box>
        </Section>
    );
};

export default Skills;
