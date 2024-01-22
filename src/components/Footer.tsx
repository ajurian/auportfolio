"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    IconDefinition,
    faFacebookF,
    faGithub,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SocialButtonProps {
    href: string;
    icon: IconDefinition;
}

const SocialButton = ({ href, icon }: SocialButtonProps) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="text-lg" asChild>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} />
                </Link>
            </Button>
        </TooltipTrigger>
        <TooltipContent>Open in new tab</TooltipContent>
    </Tooltip>
);

const Footer = () => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const copyToClipboard = () => {
        setIsTooltipOpen(true);
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTACT_EMAIL);
    };

    useEffect(() => {
        if (!isTooltipOpen) {
            return;
        }

        const timer = setTimeout(() => setIsTooltipOpen(false), 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [isTooltipOpen]);

    return (
        <footer
            id="contact"
            className="flex justify-center bg-card p-4 text-card-foreground"
        >
            <div className="flex w-full max-w-4xl flex-col gap-4">
                <div className="flex flex-col gap-2 p-2 ml-auto text-sm">
                    <div>
                        Email:
                        <Tooltip open={isTooltipOpen}>
                            <TooltipTrigger asChild>
                                <div
                                    className="text-muted-foreground text-xs cursor-pointer"
                                    onClick={copyToClipboard}
                                >
                                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                Copied to clipboard!
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div>
                        Portfolio on github:
                        <div>
                            <Button
                                variant="link"
                                size="sm"
                                className="px-0 h-auto"
                                asChild
                            >
                                <Link
                                    href={
                                        process.env
                                            .NEXT_PUBLIC_GITHUB_PORTFOLIO_URL
                                    }
                                >
                                    {
                                        process.env
                                            .NEXT_PUBLIC_GITHUB_PORTFOLIO_URL
                                    }
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex items-center justify-end gap-2">
                    <span className="mr-auto text-xs text-muted-foreground">
                        © 2024
                    </span>
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
        </footer>
    );
};

export default Footer;
