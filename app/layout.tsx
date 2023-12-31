import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: {
        default: "YASSINE CHETTOUCH | Portfolio",
        template: "%s | chronark.com",
    },
    description:
        "Software engineer and Graphic Designer. I build websites and web applications with React, Next.js, and Tailwind CSS.",
    openGraph: {
        title: "YASSINE CHETTOUCH | Portfolio",
        description:
            "Software engineer and Graphic Designer. I build websites and web applications with React, Next.js, and Tailwind CSS.",
        url: "https://www.eldevyas.me",
        siteName: "eldevyas.me",
        images: [
            {
                url: "https://www.eldevyas.me/og.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Eldevyas",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/favicon.png",
    },
};
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={[inter.variable, calSans.variable].join(" ")}
        >
            <head>
                {/* Beam Analytics */}
                <Analytics />
            </head>
            <body
                className={`bg-black ${
                    process.env.NODE_ENV === "development"
                        ? "debug-screens"
                        : undefined
                }`}
            >
                {children}
            </body>

            {/* Vercel Analytics */}
            <VercelAnalytics />
        </html>
    );
}
