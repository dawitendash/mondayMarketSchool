import Image from 'next/image'
import { FaUser } from 'react-icons/fa'

interface custom_avater_props {
    profile_image: string | undefined,
}
const CustomAvater = ({ profile_image }: custom_avater_props) => {
    return (
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-300 flex justify-center items-center">
            {
                profile_image !== undefined ?
                    (<Image src={profile_image} width={40} height={40} alt='' />) :
                    (<FaUser
                        width={40}
                        height={40}
                        className=""
                    />)
            }

        </div>
    )
}

export default CustomAvater