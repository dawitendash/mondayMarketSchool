
import { FaHeart, FaRegHeart, FaUser, FaUsers } from "react-icons/fa";
import CustomCard from "../Components/custom_card";
import CustomTable from "../Components/custom_table";
const students = [
    {
        profile: "👤",
        id: "S001",
        fullname: "student one ",
        class: "10",
        section: "A",
        status: "Active",
    },
    {
        profile: "👤",
        id: "S002",
        fullname: "student two",
        class: "10",
        section: "B",
        status: "Inactive",
    },
    {
        profile: "👤",
        id: "S003",
        fullname: "student 3",
        class: "9",
        section: "C",
        status: "Active",
        action: "Edit / Delete"
    },
    {
        profile: "👤",
        id: "S004",
        fullname: "student 4",
        class: "8",
        section: "A",
        status: "Active",
    },
    {
        profile: "👤",
        id: "S005",
        fullname: "student 5",
        class: "7",
        section: "B",
        status: "Inactive",
    }
];

export default function Dashboard() {
    return (
        <div className="flex flex-col space-y-4 ">
            {/* Card  */}
            <div className="flex flex-row justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <CustomCard icon={<FaUser />} count_number='755' card_title='student' />
                <CustomCard icon={<FaHeart />} count_number='678' card_title='Active student' />
                <CustomCard icon={<FaRegHeart />} count_number='67' card_title='InActive student' />
                <CustomCard icon={<FaUsers />} count_number='800' card_title='student' />
            </div>
            <CustomTable
                table_title="Student List"
                tabledata={students}
                search_placeholder="search student"
                ismodal={false}
            />
        </div>
    );
}