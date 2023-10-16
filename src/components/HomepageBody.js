import HomepageInfoCard from "./HomepageInfoCard";

export default function HomepageBody() {
	return (
		<div className="w-full h-auto">
			<ul className="mx-auto w-2/3 items-center">
				<HomepageInfoCard
					title={"What is CanSat?"}
					paragraph={
						"CanSats are mini satellites the size of a soda can, often used in education to teach satellite technology and data collection. Rules for CanSat typically include size constraints, self-containment, safety mechanisms, and compliance with weight and communication regulations."
					}
					image={""}
					reversed={false}
					pageLink={"/cansat"}
				/>
				<HomepageInfoCard
					title={"GitHub Repository for CanSat Codes"}
					paragraph={
						"Access our team's GitHub repository for CanSat code, including microcontroller programming, sensor integration, and communication systems."
					}
					image={""}
					reversed={true}
					pageLink={"/github"}
				/>
				<HomepageInfoCard
					title={"Safety Instructions"}
					paragraph={
						"Handle components carefully, follow launch safety measures, obtain permissions, check weather conditions, and include contact information for safe landings."
					}
					image={""}
					reversed={false}
					pageLink={"/safety"}
				/>
				<HomepageInfoCard
					title={"Best Practices"}
					paragraph={
						"Plan your mission, test rigorously, use redundancy, ensure reliable tracking, and maintain weight balance for a stable descent."
					}
					image={""}
					reversed={true}
					pageLink={"/best-practices"}
				/>
				<HomepageInfoCard
					title={"Step-by-Step Assembly and Test Instructions"}
					paragraph={
						"Follow manufacturer instructions for assembling and testing CanSat components."
					}
					image={""}
					reversed={false}
					pageLink={"/assembly-and-test-instructions"}
				/>
				<HomepageInfoCard
					title={"Test Report"}
					paragraph={
						"A documented report of all CanSat tests is crucial for diagnosing problems and system improvement."
					}
					image={""}
					reversed={true}
					pageLink={"/test-reports"}
				/>
				<HomepageInfoCard
					title={"Common Mistakes & Frequently Observed Problems"}
					paragraph={
						"Be aware of common mistakes. Seek guidance from your supervisor when a problem arises."
					}
					image={""}
					reversed={false}
					pageLink={"/common-mistakes"}
				/>
			</ul>
		</div>
	);
}
