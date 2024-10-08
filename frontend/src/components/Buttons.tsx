import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrimaryButton({ children, className, onClick }: ButtonProps) {
	return (
        <button
            onClick={onClick}
            className={`bg-blue-1 uppercase text-white whitespace-nowrap font-medium text-[16px] leading-[19.89px] w-full py-4 border border-blue-1 duration-100 rounded-[40px] hover:bg-white hover:text-blue-1 ${className}`}
            
		>
			{children}
		</button>
	);
}

export function SecondaryButton({ children, className, onClick }: ButtonProps) {
	return (
        <button
            onClick={onClick}
            className={`bg-white border border-gray-3 whitespace-nowrap uppercase text-gray-1 font-semibold text-[14px] leading-[17.4px] w-full py-4 duration-100 rounded-[40px] hover:text-gray-2 hover:border-gray-2 ${className}`}
            
		>
			{children}
		</button>
	);
}

export default PrimaryButton;
