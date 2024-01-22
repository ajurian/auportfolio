import Providers from "@/components/Providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Inter, Noto_Serif, Roboto_Mono } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "AU Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans dark bg-background text-foreground`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
