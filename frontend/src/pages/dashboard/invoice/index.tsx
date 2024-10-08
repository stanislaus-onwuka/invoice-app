import React, { useState } from "react";
import TopNavigation from "../../../components/TopNavigation";
import PrimaryButton, { SecondaryButton } from "../../../components/Buttons";
import InvoiceHighlight from "../../../components/invoice/InvoiceHighlight";
import InvoiceAction from "../../../components/invoice/InvoiceAction";
import RecentInvoices from "../../../components/invoice/RecentInvoices";
import RecentActivities from "../../../components/invoice/RecentActivities";
import ViewInvoiceModal from "../../../components/invoice/ViewInvoiceModal";
import { highlightData, invoices, recentActivities } from "../../../data"

function Invoices() {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<TopNavigation pageTitle="Invoice" />
			<section className="mt-10">
				<div className="flex justify-between items-center mb-10">
					<h2 className="text-[32px] leading-[39.78px] font-medium">Invoice</h2>
					<div className="flex w-full gap-8 max-w-[524px]">
						<SecondaryButton>See What's New</SecondaryButton>
						<PrimaryButton>Create</PrimaryButton>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-8">
					{highlightData.map((highlight, idx) => (
						<InvoiceHighlight
							key={idx}
							title={highlight.title}
							status={highlight.status}
							number={highlight.number}
							amount={highlight.amount}
						/>
					))}
				</div>
			</section>
			<section className="mt-10">
				<h3 className="text-xl leading-[24.86px] font-semibold mb-6">Invoice Actions</h3>
				<div>
					<div className="grid grid-cols-3 gap-8 mb-6">
						<InvoiceAction
							hasBlueBg
							title="Create New Invoice"
							description="Create new invoices easily"
							icon={<img src="/assets/imgs/money.png" alt="money" />}
						/>
						<InvoiceAction
							title="Change Invoice settings"
							description="Customise your invoices"
							icon={
								<img
									src="/assets/svgs/invoice-actions/setting.svg"
									className=" w-full"
									alt="settings"
								/>
							}
						/>
						<InvoiceAction
							title="Manage Customer list"
							description="Add and remove customers"
							icon={
								<img
									src="/assets/svgs/invoice-actions/customers.svg"
									className=" w-full"
									alt="customers"
								/>
							}
						/>
					</div>
					<div className="flex gap-8">
						<RecentInvoices showModal={showModal} setShowModal={setShowModal} data={invoices} />
						<RecentActivities activitiesData={recentActivities} />
					</div>
				</div>
			</section>
			<ViewInvoiceModal showModal={showModal} setShowModal={setShowModal}/>
		</>
	);
}

export default Invoices;
