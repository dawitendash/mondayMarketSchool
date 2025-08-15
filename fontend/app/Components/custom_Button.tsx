'use client'
import React from 'react';
interface custom_button_props {
    button_icon: React.ReactNode,
    button_title: string,
    button_color: string,
    button_hovercolor: string,
}
const CustomButton = ({ button_icon, button_title, button_color, button_hovercolor }: custom_button_props) => {
    return (
        <button
            style={{
                backgroundColor: button_color
            }}
            className="flex items-center space-x-2 bg-[#2F80ED] text-white px-4 py-2 rounded-lg hover:bg-[#1366d6] transition-colors hover:shadow-lg hover:cursor-pointer text-[14px]"
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = button_hovercolor;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = button_color
            }}
        >
            {button_icon}
            <span>{button_title}</span>
        </button>
    )
}

export default CustomButton