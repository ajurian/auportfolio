import Blob from "@/components/svg/Blob";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import {
    IconDefinition,
    faFacebookF,
    faGithub,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface SocialButtonProps {
    href: string;
    icon: IconDefinition;
}

const SocialButton = ({ href, icon }: SocialButtonProps) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="w-12 text-2xl"
                asChild
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} />
                </Link>
            </Button>
        </TooltipTrigger>
        <TooltipContent>Open in new tab</TooltipContent>
    </Tooltip>
);

export default function About() {
    return (
        <section
            id="about"
            className="flex min-h-screen scroll-mt-14 flex-col-reverse items-center justify-center gap-4 p-4 lg:flex-row"
        >
            <div className="flex flex-col">
                <Typography variant="h2">
                    <h2 className="border-b font-mono">
                        Hello! I am a Web Developer
                    </h2>
                </Typography>
                <Typography>
                    <p>
                        Passionate Fullstack Web Developer specializing in
                        Frontend with a journey that began in 2019 as a hobbyist
                        programmer. Proficient in HTML, CSS, and JavaScript,
                        particularly experienced in crafting engaging user
                        interfaces using frameworks like React.js. I am good in
                        translating design concepts into responsive and visually
                        appealing web applications. Constantly evolving my
                        skills. With a holistic approach to web development, and
                        a problem-solving mindset, I am dedicated to creating
                        seamless digital experiences. Let&apos;s connect and
                        explore opportunities to bring ideas to life in the
                        ever-evolving world of web development.
                    </p>
                </Typography>
                <div className="mt-4 flex items-center gap-2">
                    <SocialButton
                        href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                        icon={faFacebookF}
                    />
                    <SocialButton
                        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                        icon={faLinkedinIn}
                    />
                    <SocialButton
                        href={process.env.NEXT_PUBLIC_GITHUB_URL}
                        icon={faGithub}
                    />
                </div>
            </div>
            <div className="items relative aspect-square flex-shrink-0 basis-64 bg-blob bg-cover text-primary lg:basis-72">
                <div className="absolute h-full w-full">
                    <Blob />
                </div>
                <Image
                    fill
                    src="/images/astronaut.svg"
                    alt="Astronaut floating"
                    className="animate-float"
                />
            </div>
        </section>
    );
}
