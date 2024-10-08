import React, { ReactNode } from 'react'

interface InvoiceActionProps {
    icon: ReactNode;
    title: string;
    description: string,
    hasBlueBg?: boolean
}


function InvoiceAction({ icon, title, description, hasBlueBg = false }: InvoiceActionProps) {
    if (hasBlueBg) {
        return (
            <button className='py-8 px-10 rounded-3xl bg-blue-1'>
                <div className='w-20 h-20 mb-4'>
                    {icon}
                </div>
                <div className='text-left'>
                    <h3 className="text-[22px] leading-[27.35px] mb-2 font-medium text-white">{title}</h3>
                    <p className="text-[14px] leading-[22.4px] tracking-[0.3%] text-gray-4 font-normal">{description}</p>
                </div>
            </button>
        )
    }

    return (
        <button className='py-8 px-10 rounded-3xl bg-white'>
            <div className='w-20 h-20 mb-4'>
                {icon}
            </div>
            <div className='text-left'>
                <h3 className="text-[22px] leading-[27.35px] mb-2 font-medium text-gray-2">{title}</h3>
                <p className="text-[14px] leading-[22.4px] tracking-[0.3%] text-gray-1 font-normal">{description}</p>
            </div>
        </button>
    )
}

export default InvoiceAction