import React from "react";

function TopNavigation({ pageTitle }: { pageTitle: string }) {
	return (
		<nav className="flex items-center justify-between border-b py-[18px]">
			<h2 className="uppercase text-[28px] leading-[34.8px] font-medium text-gray-2">{pageTitle}</h2>
			<div className="flex gap-6">
				<button className="bg-white py-3 px-5 rounded-full">
					<img src="/assets/svgs/notification.svg" alt="Notification" />
				</button>
				<button className="flex items-center p-3 bg-white rounded-[40px]">
					<span className="w-10 h-10 bg-blue-1 flex justify-center items-center rounded-full text-white font-semibold text-[14px] leading-[17.64px]">
						KA
					</span>
					<span>
						<img src="/assets/svgs/arrow-down.svg" alt="Arrow Down" />
					</span>
				</button>
			</div>
		</nav>
	);
}

export default TopNavigation;
