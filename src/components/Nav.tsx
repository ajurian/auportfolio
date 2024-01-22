"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
    const scrollTop = useScrollTop();

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 mb-[1px] flex w-full items-center justify-end gap-2 p-2 transition sm:justify-center",
                scrollTop > 0 &&
                    "mb-0 border-b bg-card text-card-foreground shadow-lg"
            )}
        >
            <Sheet>
                <SheetTrigger className="inline-flex sm:hidden" asChild>
                    <Button variant="ghost" size="icon">
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="top"
                    className="bg-card text-card-foreground"
                >
                    <div className="mt-4 flex flex-col">
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                className="w-full rounded-none"
                                asChild
                            >
                                <Link href="#about">About</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                className="w-full rounded-none"
                                asChild
                            >
                                <Link href="#tech-stack">Tech Stack</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                className="w-full rounded-none"
                                asChild
                            >
                                <Link href="#projects">Projects</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                className="w-full rounded-none"
                                asChild
                            >
                                <Link href="#contact">Contact</Link>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
            <Button
                variant="ghost"
                className="hidden font-semibold sm:inline-flex"
                asChild
            >
                <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <Link href="#tech-stack">Tech Stack</Link>
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <Link href="#contact">Contact</Link>
            </Button>
        </nav>
    );
};

export default Nav;
