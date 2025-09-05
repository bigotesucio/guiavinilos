import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    theme?: 'light' | 'dark';
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, icon, theme = 'light' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isDark = theme === 'dark';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subtextColor = isDark ? 'text-white/80' : 'text-gray-700';
    const borderColor = isDark ? 'border-white/30' : 'border-black';
    const plusColor = isDark ? 'text-white' : 'text-black';
    const iconColor = isDark ? 'text-white' : 'text-black';
    

    const StateIcon = () => (
        <span className="p-1 flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
            <svg className={`w-3 h-3 ${iconColor}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 6H11" /> {/* Horizontal line */}
                {!isOpen && <path d="M6 1V11" />} {/* Vertical line for plus */}
            </svg>
        </span>
    );

    return (
        <div className={`border-b ${borderColor}`}>
            <button
                className={`flex items-center justify-between w-full py-4 text-base font-semibold text-left ${textColor}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="flex items-center gap-4">
                    <StateIcon />
                    {icon && <span className="flex items-center justify-center">{icon}</span>}
                    <span>{title.toUpperCase()}</span>
                </span>
                 <svg className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} ${plusColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
            <div className={`pl-10 pr-4 pb-4 text-sm ${subtextColor} ${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;