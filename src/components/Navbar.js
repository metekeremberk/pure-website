import { useEffect, useState } from "react";

export default function Navbar() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<div
			className={`bg-light px-10 top-0 h-[20vh] sticky transition-shadow flex justify-between font-mono ${
				!top && `shadow-lg`
			}`}
		>
			<img
				src="navbar_logo.jpg"
				width={200}
				height={150}
				alt="navbar_logo"
				className="object-contain"
			/>
			<ul className="font-medium my-auto text-xl">
				<li className="p-5">
					<a href="/">Home</a>
				</li>
			</ul>
		</div>
	);
}
