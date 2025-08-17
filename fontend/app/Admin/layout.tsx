import { FaBookOpen, FaBullhorn, FaCalendarCheck, FaChalkboardTeacher, FaChartBar, FaClipboardList, FaCog, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import CustomHeader from "../Components/custom_header";
import CustomSideBar from '../Components/custom_sidebar';
import "../globals.css";
const links = [
    {
        href: "/",
        icon: <FaHome className="w-4 h-4 " />,
        text: "Dashboard",
        isActive: true,
    },
    {
        href: "/Student",
        icon: <FaUser className="w-4 h-4 " />,
        text: "Students",
        isActive: false,
    },
    {
        href: "/Teacher",
        icon: <FaChalkboardTeacher className="w-4 h-4 " />,
        text: "Teachers",
        isActive: false,
    },
    {
        href: "/Classes",
        icon: <FaBookOpen className="w-4 h-4 " />,
        text: "Classes",
        isActive: false,
    },
    {
        href: "/Attendance",
        icon: <FaCalendarCheck className="w-4 h-4 " />,
        text: "Attendance",
        isActive: false,
    },
    {
        href: "/Exam",
        icon: <FaClipboardList className="w-4 h-4 " />,
        text: "Exams",
        isActive: false,
    },
    {
        href: "/Reports",
        icon: <FaChartBar className="w-4 h-4 " />,
        text: "Reports",
        isActive: false,
    },
    {
        href: "/Announcement",
        icon: <FaBullhorn className="w-4 h-4 " />,
        text: "Announcement",
        isActive: false,
    },
    {
        href: "/Setting",
        icon: <FaCog className="w-4 h-4 " />,
        text: "setting",
        isActive: false,
    },
    {
        href: "/LogOut",
        icon: <FaSignOutAlt className="w-4 h-4 " />,
        text: "Logout",
        isActive: false,
    },
];
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-30 hidden lg:block overflow-y-auto bg-gray-800 mt-10">
                <CustomSideBar links={links} />
            </div>
            <div className="flex flex-col flex-1 lg:ml-64">
                <div className="fixed top-0 right-0 left-0 lg:left-0 z-50">
                    <CustomHeader headerlog="/logo.svg" thememode="Darkmode" usertype="Admin" />
                </div>
                <main className="flex-1 p-4 lg:p-6 mt-16 lg:mt-20 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
