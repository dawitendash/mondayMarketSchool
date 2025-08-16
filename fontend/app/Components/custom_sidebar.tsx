interface custom_sideBar_props {
    links: any[],
}
const CustomSideBar = ({ links }: custom_sideBar_props) => {
    return (
        <aside className="w-64 bg-white text-black p-4 shadow-lg border-r border-gray-200 lg:block   ">
            <nav className="flex-1 space-y-2 pb-5 pt-5">
                {
                    links.map((link, index) => (
                        <a key={index} href={link.href}
                            className={`flex hover:cursor-pointer p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 justify-start text-base-standard transition-colors ${link.isActive ? "bg-blue-100 text-blue-600 border-r-2 border-blue-600" : "text-gray-700"}`}>
                            <span className="flex flex-row space-x-3 justify-start items-center">
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