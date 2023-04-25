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

type SkillProps = {
    level: number;
    name: string;
};

const Skill: React.FC<SkillProps> = ({ level, name }) => {
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
                    <Typography>{level}%</Typography>
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

type SkillCategoryProps = {
    name: string;
    children?: React.ReactNode;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ name, children }) => {
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
        <Section title="Skills" className="skills">
            <Box className="skills-main" component="div">
                <SkillCategory name="Web development">
                    <Skill level={88} name="Frontend" />
                    <Skill level={79} name="Backend" />
                    <Skill level={70} name="Web design" />
                    <Skill level={82} name="React" />
                </SkillCategory>
                <SkillCategory name="Other">
                    <Skill level={85} name="Java" />
                    <Skill level={84} name="C#" />
                    <Skill level={90} name="Python" />
                </SkillCategory>
            </Box>
        </Section>
    );
};

export default Skills;
