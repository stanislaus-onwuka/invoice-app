import React from "react";

interface InvoiceHighlightProps {
	title: string;
	status: string;
	number: number;
	amount: number;
	currency?: string;
}

function InvoiceHighlight({ title, status, number, amount, currency }: InvoiceHighlightProps) {
	let hightlightBg;
	const amountInParts = amount.toString().split(".");

	switch (status) {
		case "paid":
			hightlightBg = "bg-success";
			break;
		case "unpaid":
			hightlightBg = "bg-warning";
			break;
		case "overdue":
			hightlightBg = "bg-danger";
			break;

		default:
			hightlightBg = "bg-neutral";
			break;
	}

	return (
		<div className="py-8 px-10 flex flex-col bg-white rounded-3xl">
			<div className="mb-4">
				<img src="/assets/svgs/category.svg" alt="category" />
			</div>
			<div className="flex items-center gap-2 mb-2">
				<h6 className="uppercase text-xs leading-5 font-normal text-gray-1 tracking-[8%]">{title}</h6>
				<span className={`px-4 py-3 rounded-3xl text-gray-2 text-sm leading-[17.4px] font-medium ${hightlightBg}`}>
					{number < 10 ? ("0" + number).slice(-2) : number.toLocaleString()}
				</span>
			</div>
			<h3 className="whitespace-nowrap font-semibold">
				<span className="text-[28px] leading-[34.8px] text-neutral-black">{`${currency || "$"} ${parseInt(
					amountInParts[0]
				).toLocaleString()}.`}</span>
				<span className="text-[14px] leading-[17.4px] text-gray-1">
					{amountInParts[1] ? amountInParts[1] : "00"}
				</span>
			</h3>
		</div>
	);
}

export default InvoiceHighlight;
