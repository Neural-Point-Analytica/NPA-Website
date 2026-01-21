import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-noto-sans",
});

const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-noto-serif",
});

export const metadata: Metadata = {
    title: "Neural Point Analytica | データ主導の意思決定",
    description: "Neural Point Analytica delivers decision-ready data systems for high-stakes business environments.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                notoSansJP.variable,
                notoSerifJP.variable
            )}>
                <main className="relative flex flex-col min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
