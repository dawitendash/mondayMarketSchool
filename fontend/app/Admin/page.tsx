'use client'
import { useState } from "react";
import { FaFileExport, FaFileImport, FaHeart, FaPlus, FaRegHeart, FaUser, FaUsers } from "react-icons/fa";
import CustomButton from "../Components/custom_Button";
import CustomCard from "../Components/custom_card";
import CustomForm from "../Components/custom_form";
import CustomModal from "../Components/custom_modal";
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
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openExportModal, setExportModal] = useState(false);
    return (
        <div className="flex flex-col space-y-4 ">
            {/* Card  */}
            <div className="flex flex-row justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <CustomCard icon={<FaUser />} count_number='755' card_title='student' />
                <CustomCard icon={<FaHeart />} count_number='678' card_title='Active student' />
                <CustomCard icon={<FaRegHeart />} count_number='67' card_title='InActive student' />
                <CustomCard icon={<FaUsers />} count_number='800' card_title='student' />
            </div>
            <div className=" flex flex-row bg-white shadow-lg h-[50] items-center gap-6 p-4 ">
                <CustomButton
                    button_icon={<FaPlus className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Add student"
                    button_fun={() => setOpenEditModal(true)}
                />
                <CustomButton
                    button_icon={<FaFileExport className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Export List"
                    button_fun={() => setExportModal(true)}
                />
                <CustomButton
                    button_icon={<FaFileImport className="w-4 h-4 text-xs-standard" />}
                    button_color="#2F80ED"
                    button_hovercolor="#1366d6"
                    button_title="Import List"
                    button_fun={() => setOpenEditModal(true)}
                />
                <CustomModal
                    isOpen={openEditModal}
                    onClose={() => setOpenEditModal(false)}
                    child={< CustomForm />} />
                <CustomModal
                    isOpen={openExportModal}
                    onClose={() => setExportModal(false)}
                    child={< CustomTable table_title="Exported Student List" tabledata={students} search_placeholder="search student" ismodal={true} />} />
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