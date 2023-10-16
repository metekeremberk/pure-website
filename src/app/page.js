"use client";

import HomepageBody from "@/components/HomepageBody";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="bg-tertiary w-auto font-mono">
			<Navbar />
			<HomepageBody />
		</main>
	);
}
