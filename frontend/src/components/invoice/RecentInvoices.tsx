import React from "react";
import { SecondaryButton } from "../Buttons";
import { getStatusTagTheme } from "../../utils/functions";

interface InvoiceEntryProps {
	invoice_id: string;
	date: string;
	amount: number;
	status: string;
	currency?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

interface RecentInvoicesType {
	date: string;
	invoices: InvoiceEntryProps[];
}


interface RecentInvoicesProps {
	data: RecentInvoicesType[];
	showModal: boolean,
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const InvoiceEntry = ({ invoice_id, date, amount, status, currency, onClick }: InvoiceEntryProps) => {


	return (
		<button onClick={onClick} className="flex justify-between gap-[50.5px] py-4 px-6 w-full">
			<h4 className="text-[14px] leading-[25.2px] text-gray-5 font-semibold text-left max-w-[100px]">{invoice_id}</h4>
			<div className="px-4 flex flex-col gap-1 text-left">
				<h6 className="text-[10px] leading-5 tracking-[8%] mb-1 text-gray-6 font-normal uppercase">Due Date</h6>
				<h4 className="text-sm font-semibold text-gray-1">{date}</h4>
			</div>
			<div className="flex flex-col gap-3 items-end">
				<h3 className="whitespace-nowrap font-semibold">
					<span className="text-base leading-5 text-gray-5">{`${
						currency || "$"
					} ${amount.toLocaleString()}`}</span>
				</h3>
				<span
					className={`border rounded-3xl px-6 py-[7.5px] uppercase text-[10px] leading-[12.43px] w-fit font-semibold  ${getStatusTagTheme(status)}`}
				>
					{status}
				</span>
			</div>
		</button>
	);
};


function RecentInvoices({ data, showModal, setShowModal }: RecentInvoicesProps) {
	return (
		<div className="p-8 bg-white rounded-[40px] w-[55%]">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl leading-[24.86px] font-semibold text-neutral-black">Recent Invoices</h2>
				<SecondaryButton className="!text-blue-1 !text-[12px] !leading-4 max-w-[242px] hover:!border-blue-1">view all invoices</SecondaryButton>
			</div>
			<div>
				{data.map((recentInvoice, idx) => {
					return (
						<>
							<h3
								key={idx}
								className="uppercase mb-2 py-[10px] text-[12px] leading-[16px] font-semibold text-neutral-black"
							>
								{recentInvoice.date}
							</h3>
							<div>
								{recentInvoice.invoices.map((invoiceEntry, idx) => (
									<InvoiceEntry
										key={idx}
										onClick={()=>setShowModal(true)}
										invoice_id={invoiceEntry.invoice_id}
										date={invoiceEntry.date}
										amount={invoiceEntry.amount}
										status={invoiceEntry.status}
									/>
								))}
							</div>
						</>
					);
				})}
				{}
			</div>
		</div>
	);
}

export default RecentInvoices;
