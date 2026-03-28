import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Shoaib Ali | Lead Mobile & Web App Developer",
  description:
    "Lead mobile and web app developer specializing in cross-platform applications for iOS, Android, and Web. End-to-end solutions from design to deployment.",
  keywords: [
    "mobile app developer",
    "web developer",
    "React Native",
    "Flutter",
    "Next.js",
    "iOS",
    "Android",
    "freelance developer",
  ],
  openGraph: {
    title: "Syed Shoaib Ali | Lead Mobile & Web App Developer",
    description:
      "Lead mobile and web app developer specializing in cross-platform applications for iOS, Android, and Web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
