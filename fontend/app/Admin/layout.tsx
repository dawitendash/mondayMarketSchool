import { FaBookOpen, FaBullhorn, FaCalendarCheck, FaChalkboardTeacher, FaChartBar, FaClipboardList, FaCog, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import CustomHeader from "../Components/custom_header";
import CustomSideBar from '../Components/custom_sidebar';
import "../globals.css";
const links = [
    {
        href: "/Admin",
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
        href: "/Admin/Teacher",
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
        <div className="flex flex-col min-h-screen bg-white">
            <CustomHeader headerlog="/logo.svg" thememode="Darkmode" usertype="Admin" />
            <div className="flex flex-1 ">
                <CustomSideBar links={links} />
                <main className="flex-1 p-6 ml-3 bg-white">{children}</main>
            </div>
        </div>
    );
}
