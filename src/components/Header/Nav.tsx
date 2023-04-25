import { Button, ButtonProps, ButtonTypeMap, Sheet } from "@mui/joy";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    useRef,
    RefObject,
} from "react";

type NavButtonProps = Omit<ButtonProps, "variant"> & {
    navRef: RefObject<HTMLDivElement>;
    transparentNav: boolean;
    scrollToSelector?: string | null;
};

const NavButton: React.FC<NavButtonProps> = ({
    navRef,
    transparentNav,
    scrollToSelector,
    children,
}) => {
    const variant = useMemo<ButtonTypeMap["props"]["variant"]>(
        () => (transparentNav ? "solid" : "plain"),
        [transparentNav]
    );

    const clickHandler = useCallback(() => {
        if (!scrollToSelector) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (!navRef) return;

        const navElement = navRef.current;

        if (!navElement) return;

        const element =
            document.querySelector<HTMLDivElement>(scrollToSelector);

        if (!element) return;

        const { top } = element.getBoundingClientRect();

        window.scrollTo({
            top: top - navElement.clientHeight + window.scrollY,
            behavior: "smooth",
        });
    }, [navRef, scrollToSelector]);

    return (
        <Button onClick={clickHandler} variant={variant}>
            {children}
        </Button>
    );
};

const Nav: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

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
            ref={ref}
        >
            <NavButton navRef={ref} transparentNav={transparentNav}>
                Home
            </NavButton>
            <NavButton
                navRef={ref}
                transparentNav={transparentNav}
                scrollToSelector="#skills"
            >
                Skills
            </NavButton>
            <NavButton
                navRef={ref}
                transparentNav={transparentNav}
                scrollToSelector="#projects"
            >
                Projects
            </NavButton>
            <NavButton
                navRef={ref}
                transparentNav={transparentNav}
                scrollToSelector="#contact"
            >
                Contact
            </NavButton>
        </Sheet>
    );
};

export default Nav;
