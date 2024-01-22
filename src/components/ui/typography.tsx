import { cn } from "@/lib/utils";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const typographyVariants = cva(undefined, {
    variants: {
        variant: {
            h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
            h2: "scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            h3: "scroll-m-20 text-2xl font-medium tracking-tight",
            h4: "scroll-m-20 text-xl font-medium tracking-tight",
            p: "leading-7 [&:not(:first-child)]:mt-4",
        },
    },
    defaultVariants: {
        variant: "p",
    },
});

export interface TypographyProps
    extends SlotProps,
        VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <Slot
                className={cn(typographyVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
