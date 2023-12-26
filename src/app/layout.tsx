import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], weight: ["600", "800"] });

export const metadata: Metadata = {
	title: "Blog Preview",
	description: "Challenge by Frontend mentor. Block preview card",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${figtree.className} bg-card-yellow min-h-screen flex justify-center items-center`}
				suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
