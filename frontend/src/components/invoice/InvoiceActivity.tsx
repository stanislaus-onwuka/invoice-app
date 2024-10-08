import React from "react";

interface ActivityProps {
	title: string;
	date: string;
	action: string;
	description: string;
}


interface RecentActivitiesProps {
    activitiesData: ActivityProps[]
}


const Activity = ({ title, date, action, description }: ActivityProps) => {
	return (
		<div className="flex gap-4">
			<div className="max-w-[48px] self-start">
				<img src="/assets/imgs/avatar.png" alt="Avatar" />
			</div>
			<div>
				<h3 className="text-[18px] leading-[22.37px] mb-1 font-semibold">{title}</h3>
				<h5 className="text-sm tracking-[0.3%] leading-[22.4px] text-gray-1 font-normal">{date}</h5>
				<p className="p-4 bg-gray-4 text-gray-4 rounded-2xl text-sm tracking-[0.3%] leading-[22.4px] font-semibold max-w-[300px]">
					<span className="text-gray-1">{action}</span>
					<span className="text-neutral-black">{description} </span>
				</p>
			</div>
		</div>
	);
};

function InvoiceActivities({activitiesData}:RecentActivitiesProps) {
	return (
		<div className="p-8 bg-white rounded-[40px]">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl leading-[24.86px] font-semibold text-neutral-black">Invoice Activity</h2>
            </div>
            <div className="flex flex-col gap-6">
                {
                    activitiesData.map((activity, idx) => (
                        <Activity
                            key={idx}
                            title={activity.title}
                            action={activity.action}
                            date={activity.date}
                            description={activity.description}
                        />
                    ))
                }
            </div>
		</div>
	);
}

export default InvoiceActivities;
