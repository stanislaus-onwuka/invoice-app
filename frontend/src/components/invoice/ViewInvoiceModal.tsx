import React, { useState } from "react";
import { getStatusTagTheme } from "../../utils/functions";
import PrimaryButton, { SecondaryButton } from "../Buttons";
import { reminders } from "../../data";
import InvoiceActivities from "./InvoiceActivity";
import { recentActivities } from "../../data"

interface ViewInvoiceModalProps{
	showModal: boolean,
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Reminder = ({ reminderTitle }: { reminderTitle: string }) => {
	const [selected, setSelected] = useState(false);

	return (
		<button
			onClick={() => setSelected(!selected)}
			className={`flex items-center gap-[10px] px-4 py-3 rounded-3xl border duration-100 ${
				selected ? "bg-secondary-light-green border-secondary-light-green" : " border-gray-3"
			}`}
		>
			<span className="text-[14px] leading-[17.4px] tracking-[-0.43px] text-gray-5 font-semibold">
				{reminderTitle}
			</span>
			{selected ? (
				<div>
					<img src="/assets/svgs/tick-circle.svg" alt="Check" />
				</div>
			) : null}
		</button>
	);
};

function ViewInvoiceModal({showModal, setShowModal}:ViewInvoiceModalProps) {

	return (
		<div className={showModal ? "fixed top-0 left-0 flex" : "fixed top-0 left-0 hidden"}>
			<div className="fixed z-[2] w-full h-full flex justify-center items-center">
				<div className="fixed flex flex-col w-full max-w-[1334px]">
					<button onClick={()=>setShowModal(false)} className="bg-white p-3 rounded-full w-fit self-end mb-2">
						<img src="/assets/svgs/close-icon.svg" alt="Close Button" />
					</button>
					<div className="w-full rounded-2xl bg-white p-10 h-[600px] overflow-y-scroll">
						<div className="flex justify-between mb-8">
							<div>
								<h2 className="text-[32px] leading-[40.32px] text-neutral-black font-semibold mb-2">
									Invoice - 1023494 - 2304
								</h2>
								<p className="text-base leading-5 text-gray-1 mb-6">
									View the details and activity of this invoice
								</p>
								<span
									className={`border rounded-3xl px-6 py-[7.5px] uppercase text-[10px] leading-[12.43px] w-fit font-semibold  ${getStatusTagTheme(
										"partial payment"
									)}`}
								>
									Partial Payment
								</span>
							</div>
							<div className="flex gap-6 h-[68px]">
								<SecondaryButton className="px-[47.5px] !w-fit !text-blue-1 hover:!border-blue-1">
									Download as pdf
								</SecondaryButton>
								<PrimaryButton className="px-[55px] !w-fit">Send invoice</PrimaryButton>
								<SecondaryButton className="px-6 !w-fit">More</SecondaryButton>
							</div>
						</div>
						<div className="flex gap-6 items-center p-6 border mb-8 border-gray-3 rounded-3xl w-fit">
							<h5 className="uppercase text-[12px] leading-4 tracking-[7%] text-gray-6">Reminders</h5>
							<div className="flex gap-3">
								{reminders.map((reminder, idx) => (
									<Reminder key={idx} reminderTitle={reminder} />
								))}
							</div>
						</div>
						<div className="flex gap-[55px]">
							<div className="border border-gray-3 p-8 rounded-[40px]">
								<div className="p-8 rounded-[40px] bg-fushia-60">
									<div className="flex justify-between">
										<div>
											<h5 className="text-[12px] leading-[14.92px] tracking-[7%] uppercase mb-4 font-semibold text-gray-1">
												sender
											</h5>
											<div className="flex gap-4">
												<div className=" max-w-[60px]">
													<img src="/assets/imgs/sender-logo.png" alt="Logo" />
												</div>
												<div className="flex flex-col gap-2">
													<h4 className="text-base leading-[19.89px] text-neutral-black font-semibold">
														Fabulous Enterprise
													</h4>
													<h6 className="text-[12px] leading-[14.68px] text-gray-1 font-medium">
														+386 989 271 3115
													</h6>
													<h6 className="text-[12px] leading-[14.68px] text-gray-1 font-medium">
														1331 Hart Ridge Road 48436 Gaines, MI{" "}
													</h6>
													<h6 className="text-[12px] leading-[14.68px] text-gray-1 font-medium">
														info@fabulousenterise.co
													</h6>
												</div>
											</div>
										</div>
										<div>
											<h5 className="text-[12px] leading-[14.92px] tracking-[7%] uppercase mb-4 text-gray-1 font-semibold">
												customer
											</h5>
											<div className="flex flex-col gap-2">
												<h4 className="text-base leading-[19.89px] text-neutral-black font-semibold">
													Olaniyi Ojo Adewale
												</h4>
												<h6 className="text-[12px] leading-[14.68px] text-gray-1 font-medium">
													+386 989 271 3115
												</h6>
												<h6 className="text-[12px] leading-[14.68px] text-gray-1 font-medium">
													info@fabulousenterise.co
												</h6>
											</div>
										</div>
									</div>
									<div className="mt-8">
										<h5 className="text-[12px] leading-[14.92px] tracking-[7%] uppercase mb-4 text-gray-1 font-semibold">
											Invoice details
										</h5>
										<div className="flex w-full gap-[47.33px]">
											<div>
												<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
													invoice no
												</h5>
												<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
													1023902390
												</h4>
											</div>
											<div>
												<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
													Issue date
												</h5>
												<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
													March 30th, 2023
												</h4>
											</div>
											<div>
												<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
													Due date
												</h5>
												<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
													May 19th, 2023
												</h4>
											</div>
											<div>
												<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
													Billing currency
												</h5>
												<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
													USD ($)
												</h4>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-6">
									<div className="flex items-center gap-10">
										<h3 className="text-[20px] leading-[24.86px] font-semibold">Items</h3>
										<div className="block h-[1px] bg-gray-3 w-[80%]"></div>
									</div>
									<div className="mt-6">
										<div className="flex justify-between font-medium my-4">
											<div className="max-w-[252px]">
												<h2 className="mb-1 text-base leading-5">Email Marketing</h2>
												<p className="text-gray-6 text-[13px] leading-4">
													Sed ut perspiciatis unde omnis iste natus error sit voluptatem
													accusantium
												</p>
											</div>
											<h3 className="py-6">10</h3>
											<h3 className="py-6">$1,500</h3>
											<h3 className="py-6">$15,000.00</h3>
										</div>
										<div className="flex justify-between font-medium my-4">
											<div className="max-w-[252px]">
												<h2 className="mb-1 text-base leading-5">Video looping effect</h2>
											</div>
											<h3 className="py-6">10</h3>
											<h3 className="py-6">$1,500</h3>
											<h3 className="py-6">$15,000.00</h3>
										</div>
										<div className="flex justify-between font-medium my-4">
											<div className="max-w-[252px]">
												<h2 className="mb-1 text-base leading-5">Graphic design for emails</h2>
												<p className="text-gray-6 text-[13px] leading-4">
													Tsit voluptatem accusantium
												</p>
											</div>
											<h3 className="py-6">10</h3>
											<h3 className="py-6">$1,500</h3>
											<h3 className="py-6">$15,000.00</h3>
										</div>
										<div className="flex justify-between font-medium my-4">
											<div className="max-w-[252px]">
												<h2 className="mb-1 text-base leading-5">Video looping effect</h2>
											</div>
											<h3 className="py-6">10</h3>
											<h3 className="py-6">$1,500</h3>
											<h3 className="py-6">$15,000.00</h3>
										</div>
									</div>
									<div>
										<div className="flex justify-between items-center mb-[18.5px]">
											<h4 className="uppercase text-[14px] leading-[17.12px] text-gray-1 font-medium">
												Subtotal
											</h4>
											<h2 className="text-[20px] leading-[24.46px] tracking-[0.5px] text-neutral-black">
												$6,697,200.00
											</h2>
										</div>
										<div className="flex justify-between items-center mb-[18.5px]">
											<h4 className="uppercase text-[14px] leading-[17.12px] text-gray-1 font-medium">
												Discount (2.5%)
											</h4>
											<h2 className="text-[20px] leading-[24.46px] tracking-[0.5px] text-neutral-black">
												$167,430.00
											</h2>
										</div>
										<div className="flex justify-between items-center mb-[18.5px] font-semibold">
											<h4 className="uppercase text-[18px] leading-[22.37px] text-neutral-black font-medium">
												Total amount due
											</h4>
											<h2 className="text-[25px] leading-[31.5px] tracking-[0.5px] text-neutral-black font-extrabold">
												$167,430.00
											</h2>
										</div>
									</div>
								</div>
								<div className="mt-6 py-4 px-6 rounded-3xl border border-gray-3">
									<h5 className="text-[12px] leading-[14.92px] tracking-[7%] uppercase mb-4 text-gray-1 font-semibold">
										Payment information
									</h5>
									<div className="flex flex-wrap w-full gap-[47.33px]">
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												Account name
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												1023902390
											</h4>
										</div>
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												account number
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												March 30th, 2023
											</h4>
										</div>
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												Ach routing no
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												May 19th, 2023
											</h4>
										</div>
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												Bank Name
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												USD ($)
											</h4>
										</div>
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												bank address
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												1023902390
											</h4>
										</div>
										<div>
											<h5 className="text-[10px] leading-[20px] tracking-[8%] mb-1 text-gray-6 uppercase font-medium">
												account number
											</h5>
											<h4 className="text-neutral-black text-[12px] leading-5 font-semibold">
												March 30th, 2023
											</h4>
										</div>
									</div>
								</div>
								<div className="py-4 px-6 bg-gray-4 rounded-[40px] mt-6 flex flex-col">
									<label className="uppercase text-[14px] leading-[17.12px] text-gray-1 font-medium">
										NOTE
									</label>
									<textarea
										cols={4}
										className="bg-transparent resize-none"
										value="Thank you for your patronage"
									/>
								</div>
							</div>
							<div className=" w-full max-w-[449px]">
								<InvoiceActivities activitiesData={recentActivities}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => setShowModal(false)}
				className="fixed top-0 w-full h-full bg-neutral-black opacity-25"
			></div>
		</div>
	);
}

export default ViewInvoiceModal;
