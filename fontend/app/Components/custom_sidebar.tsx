interface custom_sideBar_props {
    links: any[],
}
const CustomSideBar = ({ links }: custom_sideBar_props) => {
    return (
        <aside className="w-50 bg-white text-black p-4 shadow-lg min-h-screen">
            <nav className="flex-1 space-y-6">
                {
                    links.map((link, index) => (
                        <a key={index} href={link.href}
                            className={`flex hover:cursor-pointer pl-4 hover:text-blue-500 justify-start  ${link.isActive ? "text-blue-500 " : ''}`}>
                            <span className={`flex flex-row  space-x-1 justify-center items-center ${link.isActive ? "border-blue-500 border-b-2" : "border-b-2 border-transparent hover:border-blue-500 transition-all"}`}>
                                {link.icon}
                                <span>
                                    {link.text}
                                </span>
                            </span>
                        </a>
                    ))
                }
            </nav>
        </aside>
    )
}

export default CustomSideBar