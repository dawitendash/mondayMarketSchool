import Image from 'next/image'
import CustomAvater from './custom_avater'
interface custom_header_props {
    headerlog: string,
    thememode: string,
    usertype: string,
}
const CustomHeader = ({ headerlog, thememode, usertype }: custom_header_props) => {
    return (
        <div className="flex flex-row bg-white p-4 text-black  mb-3 shadow-lg items-center">
            <div className="flex-1">
                <Image src={headerlog} alt="logo" width={250} height={65} />
            </div>
            <div className="flex flex-1 justify-end ">
                <div className="w-40 flex items-center">
                    {thememode}
                </div>
                <div className="flex flex-row items-center p-2 space-x-1">
                    <CustomAvater profile_image={undefined} />
                    <span className="font-black">
                        {usertype}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CustomHeader