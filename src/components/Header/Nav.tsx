import { Button, ButtonProps, ButtonTypeMap, Sheet } from "@mui/joy";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type NavButtonProps = Omit<ButtonProps, "variant"> & {
    transparentNav: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ children, transparentNav }) => {
    const variant = useMemo<ButtonTypeMap["props"]["variant"]>(
        () => (transparentNav ? "solid" : "plain"),
        [transparentNav]
    );

    return <Button variant={variant}>{children}</Button>;
};

const Nav: React.FC = () => {
    const [transparentNav, setTransparentNav] = useState(true);
    const transparentClass = useMemo(
        () => (transparentNav ? "transparent" : ""),
        [transparentNav]
    );

    const scrollHandler = useCallback(() => {
        if (transparentNav) {
            window.scrollY !== 0 && setTransparentNav(false);
            return;
        }

        window.scrollY === 0 && setTransparentNav(true);
    }, [transparentNav]);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    return (
        <Sheet
            className={`nav ${transparentClass}`}
            component="nav"
            variant="plain"
        >
            <NavButton transparentNav={transparentNav}>Home</NavButton>
            <NavButton transparentNav={transparentNav}>Skills</NavButton>
            <NavButton transparentNav={transparentNav}>Projects</NavButton>
            <NavButton transparentNav={transparentNav}>Contact</NavButton>
        </Sheet>
    );
};

export default Nav;
