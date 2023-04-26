import { LaunchRounded } from "@mui/icons-material";
import { AspectRatio, Box, Card, IconButton, Link, Typography } from "@mui/joy";
import NextLink from "next/link";
import Section from "./Section";

type ProjectCardProps = {
    url: string;
    title: string;
    description: string;
    imagePath: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    url,
    title,
    description,
    imagePath,
}) => {
    return (
        <Card
            className="project-card"
            component="div"
            variant="outlined"
            sx={{ display: "flex", minWidth: "20rem" }}
        >
            <Typography level="h6" fontWeight="bold">
                {title}
            </Typography>
            <Typography level="body2">{description}</Typography>
            <IconButton
                variant="plain"
                size="sm"
                sx={{ position: "absolute", right: "1rem" }}
            >
                <Link component={NextLink} href={url} target="_blank">
                    <LaunchRounded />
                </Link>
            </IconButton>
            <AspectRatio sx={{ my: 2 }}>
                <Box
                    sx={{
                        backgroundImage: `url(${imagePath})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                />
            </AspectRatio>
        </Card>
    );
};

const Projects = () => {
    return (
        <Section title="Projects" className="projects" id="projects">
            <Box className="project-list" component="div">
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
                <ProjectCard
                    url="https://accordchat.web.app/friends/"
                    title="Chat"
                    description="Simple chat app"
                    imagePath="/project-images/accordchat.png"
                />
            </Box>
        </Section>
    );
};

export default Projects;
