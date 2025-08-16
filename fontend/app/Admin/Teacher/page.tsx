import CustomButton from "@/app/Components/custom_Button";
import CustomCard from "@/app/Components/custom_card";
import CustomTable from "@/app/Components/custom_table";
import { FaFileExport, FaFileImport, FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
const teachers = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        subject: "Mathematics",
        phone: "123-456-7890",
        status: "Active",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        subject: "English",
        phone: "234-567-8901",
        status: "Active",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michaelbrown@example.com",
        subject: "Science",
        phone: "345-678-9012",
        status: "Inactive",
    },
    {
        id: 4,
        name: "Emily Johnson",
        email: "emilyjohnson@example.com",
        subject: "History",
        phone: "456-789-0123",
        status: "Active",
    },
    {
        id: 5,
        name: "William Lee",
        email: "williamlee@example.com",
        subject: "Geography",
        phone: "567-890-1234",
        status: "Inactive",
    },
];

export default function Teacher() {
    return (
        <div className="flex flex-col space-y-4 ">
            <div className="flex flex-row justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <CustomCard card_title="Teacher" count_number="34" icon={<FaChalkboardUser />} />
                <CustomCard card_title="Active Teacher" count_number="10" icon={<FaHeart />} />
                <CustomCard card_title="Inactive Teacher" count_number="4" icon={<FaRegHeart />} />
                <CustomCard card_title="Teacher" count_number="2" icon={<FaChalkboardUser />} />
            </div>
            <div className=" flex flex-row bg-white shadow-lg h-[50] items-center gap-6 p-4 ">
                <CustomButton
                    button_icon={<FaPlus className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Add student"
                />
                <CustomButton
                    button_icon={<FaFileExport className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Export List"
                />
                <CustomButton
                    button_icon={<FaFileImport className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Import List"
                />
            </div>
            <CustomTable table_title="Teacher List" search_placeholder="Search teacher" tabledata={teachers} />
        </div>
    );
}