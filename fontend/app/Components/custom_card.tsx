import React from 'react'
interface custom_card_props {
    icon: React.ReactNode,
    count_number: String,
    card_title: string,
}
const CustomCard = ({ icon, count_number, card_title }: custom_card_props) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white w-[180] h-[100] shadow-lg space-y-2 text-[14px] hover:border-b-2 hover:border-b-[#1976D2] hover:cursor-pointer">
            <div className='font-bold'>{count_number}</div>
            <div className="flex flex-row justify-center items-center space-x-2 ">
                {icon}
                <span>{card_title}</span>
            </div>
        </div>
    )
}

export default CustomCard