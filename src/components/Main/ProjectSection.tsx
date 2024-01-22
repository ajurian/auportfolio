import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";
import projects from "@/data/projects.json";
import { cn } from "@/lib/utils";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    githubURL?: string;
    liveURL?: string;
    thumbnailURL?: string;
}

const ProjectCard = ({
    title,
    description,
    githubURL,
    liveURL,
    thumbnailURL,
}: ProjectCardProps) => {
    const [isImageToggled, setIsImageToggled] = useState(false);
    const isThumbnailPresent = thumbnailURL !== undefined;

    return (
        <Card className="rounded-none border-x-0 sm:min-w-96 sm:max-w-96 sm:rounded-lg sm:border-x xl:min-w-128 xl:max-w-128">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {thumbnailURL && (
                <CardContent>
                    <AspectRatio
                        ratio={16 / 9}
                        className={cn("bg-muted", {
                            "cursor-pointer": isThumbnailPresent,
                        })}
                        onClick={() =>
                            setIsImageToggled(
                                (isImageToggled) => !isImageToggled
                            )
                        }
                    >
                        {isThumbnailPresent ? (
                            <Image
                                fill
                                className={cn("object-cover", {
                                    "object-contain": isImageToggled,
                                })}
                                src={thumbnailURL}
                                alt={thumbnailURL}
                            />
                        ) : (
                            <Skeleton className="h-full w-full" />
                        )}
                    </AspectRatio>
                </CardContent>
            )}
            <CardFooter className="flex gap-2">
                {githubURL && (
                    <Button variant="outline" className="ml-auto" asChild>
                        <Link
                            href={githubURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                            <FontAwesomeIcon
                                className="ml-2"
                                icon={faArrowUpRightFromSquare}
                            />
                        </Link>
                    </Button>
                )}
                {liveURL && (
                    <Button variant="outline" asChild>
                        <Link
                            href={liveURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live
                            <FontAwesomeIcon
                                className="ml-2"
                                icon={faArrowUpRightFromSquare}
                            />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default function ProjectSection() {
    return (
        <section id="projects" className="scroll-mt-14 py-4 md:px-4">
            <Typography variant="h3" className="mb-4 text-center font-serif">
                <h3>Projects</h3>
            </Typography>
            <div className="flex flex-wrap items-start justify-center gap-4">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
}
