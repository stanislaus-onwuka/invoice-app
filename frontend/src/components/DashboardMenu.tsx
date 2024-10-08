import React from "react";
import { NavLink } from "react-router-dom";

interface DashboardMenuLinkProps {
	name: string;
	path: string;
	icon: string;
}

const dashboardMenuLinks = [
	{
		name: "Getting Started",
		path: "/getting-started",
		icon: "/assets/svgs/getting-started.svg",
	},
	{
		name: "Overview",
		path: "/overview",
		icon: "/assets/svgs/overview.svg",
	},
	{
		name: "Accounts",
		path: "/accounts",
		icon: "/assets/svgs/getting-started.svg",
	},
	{
		name: "Invoice",
		path: "/invoice",
		icon: "/assets/svgs/invoice.svg",
	},
	{
		name: "Beneficiary Management",
		path: "/beneficiary-management",
		icon: "/assets/svgs/beneficiary.svg",
	},
	{
		name: "Help Center",
		path: "/help",
		icon: "/assets/svgs/help.svg",
	},
	{
		name: "Settings",
		path: "/settings",
		icon: "/assets/svgs/settings.svg",
	},
];

function DashboardMenu() {
	const DashboardMenuLink = ({ name, path, icon }: DashboardMenuLinkProps) => {
		return (
			<li className="py-[14px] px-3">
				<NavLink
					to={path}
					style={{
						border: "8px",
						transition: "300ms",
					}}
					className={({ isActive }) =>
						isActive ? "text-gray-2 border-default-gray" : "text-gray-1 border-white"
					}
				>
					<div className="flex items-center gap-2">
						<div className="max-w-6">
							<img src={icon} alt={name} />
						</div>
						<h3>{name}</h3>
					</div>
				</NavLink>
			</li>
		);
	};

	return (
		<aside className="py-10 px-6 max-w-[280px] fixed top-0 w-full h-full bg-white">
			<div className="mb-10">
				<img src="/Logo.svg" alt="Logo" />
			</div>
			<ul className="flex flex-col gap-3">
				{dashboardMenuLinks.map((dashboardLink, idx) => (
					<DashboardMenuLink
						key={idx}
						name={dashboardLink.name}
						icon={dashboardLink.icon}
						path={dashboardLink.path}
					/>
				))}
			</ul>
		</aside>
	);
}

export default DashboardMenu;
