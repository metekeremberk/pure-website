import Link from "next/link";

export default function HomepageInfoCard({
	title,
	paragraph,
	image,
	reversed,
	pageLink,
}) {
	if (reversed) {
		return (
			<li className="h-[80vh] flex flex-col justify-center">
				<div className="h-2/3 bg-light p-10 flex items-center">
					<img src={image} className="basis-1/3 " />
					<div className="basis-2/3">
						<h1 className="text-3xl p-5">{title}</h1>
						<p className="text-lg p-5">{paragraph}</p>
						<div className="pl-5 w-full">
							<Link
								className="bg-secondary text-light text-lg py-2 px-4 rounded-md hover:bg-primary"
								href={pageLink}
							>
								More
							</Link>
						</div>
					</div>
				</div>
			</li>
		);
	}
	return (
		<li className="h-[80vh] flex flex-col justify-center">
			<div className="h-2/3 bg-light p-10 flex items-center">
				<div className="basis-2/3">
					<h1 className="text-3xl p-5">{title}</h1>
					<p className="text-lg p-5">{paragraph}</p>
					<div className="pr-10 w-full flex flex-row justify-end">
						<a
							className="bg-secondary text-light text-lg py-2 px-4 rounded-md hover:bg-primary font-semibold"
							href={pageLink}
						>
							More
						</a>
					</div>
				</div>
				<img src={image} className="basis-1/3 " />
			</div>
		</li>
	);
}
