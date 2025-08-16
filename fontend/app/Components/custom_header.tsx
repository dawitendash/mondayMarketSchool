import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import CustomAvater from './custom_avater'
interface custom_header_props {
    headerlog: string,
    thememode: string,
    usertype: string,
}
const CustomHeader = ({ headerlog, thememode, usertype }: custom_header_props) => {
    return (
        <div className=" flex flex-row  bg-white p-4 text-black shadow-lg items-center border-b border-gray-200">
            <button title='menu' className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <FaBars className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1">
                <Image src={headerlog} alt='logo' width={230} height={40} />

            </div>
            <div className="flex flex-1 justify-end ">
                <div className="w-40 flex items-center">
                    {thememode}
                </div>
                <div className="flex flex-row items-center p-2 space-x-1">
                    <CustomAvater profile_image={undefined} />
                    <span className="font-black text-base-standard">
                        {usertype}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CustomHeader