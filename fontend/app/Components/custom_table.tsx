'use client'
import { useState } from "react";
import { FaDownload, FaFileExport, FaFileImport, FaPen, FaPlus, FaTrash } from "react-icons/fa";
import CustomButton from "../Components/custom_Button";
import CustomForm from "../Components/custom_form";
import CustomModal from "../Components/custom_modal";
import CustomAvater from "./custom_avater";
interface custom_table_props {
    table_title: string,
    search_placeholder: string,
    tabledata: any[],
    ismodal: boolean
}

const CustomTable = ({ table_title, search_placeholder, tabledata, ismodal }: custom_table_props) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openExportModal, setExportModal] = useState(false);
    const tableheader = tabledata.length > 0 ? Object.keys(tabledata[0]) : [];
    const [selectedData, setSelectedData] = useState<any[]>([]);

    console.log(JSON.stringify(selectedData))
    console.log('array length')
    console.log(tabledata.length)
    console.log(tabledata)
    return (
        <div className="flex flex-col space-y-4">
            {
                !ismodal ? (
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
                            child={< CustomTable table_title="Exported Student List" tabledata={selectedData} search_placeholder="search student" ismodal={true} />} />
                    </div>
                ) : (<></>)
            }
            <div>
                <h3 className="text-xl-standard font-semibold text-gray-800 mb-2 md:mb-0">
                    {table_title}
                </h3>
            </div>
            <div>
                {
                    !ismodal ? (
                        <input
                            type="text"
                            placeholder={search_placeholder}
                            className="px-3 py-2 border lg:w-[20rem] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />

                    ) : (
                        <div className="flex flex-row gap-3">
                            <CustomButton
                                button_icon={<FaDownload className="w-4 h-4 text-xs-standard" />}
                                button_color="#2F80ED"
                                button_hovercolor="#1366d6"
                                button_title="Download as Pdf"
                                button_fun={() => console.log('download successfully ')}
                            />
                            <CustomButton
                                button_icon={<FaDownload className="w-4 h-4 text-xs-standard" />}
                                button_color="#2F80ED"
                                button_hovercolor="#1366d6"
                                button_title="Download as Excel"
                                button_fun={() => console.log('download successfully ')}
                            />
                        </div>)
                }

            </div>
            <div>
                {tabledata.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 border border-gray-300 rounded-lg text-base-standard">
                        No student data is Found {selectedData.length === 0 ? `in ${table_title}` : ''}
                    </div>
                ) : (<table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 border- border-gray-300">
                        <tr>
                            {
                                !ismodal ? (
                                    <th className="px-4 py-2 text-left text-sm-standard font-semibold text-gray-700 border-r border-gray-300">
                                        <input type="checkbox" className="text-blue-400"
                                            checked={selectedData.some(item => item.id === tabledata[0].id)}
                                            onChange={() => {
                                                if (selectedData.length === tabledata.length) {
                                                    setSelectedData([])
                                                } else {
                                                    setSelectedData([...tabledata])
                                                }
                                            }} />
                                    </th>
                                ) : (<></>)
                            }
                            {tableheader.map((header) => (
                                <th key={header} className="px-4 py-2 text-left text-sm-standard font-semibold text-gray-700 border-r border-gray-300">
                                    {header}
                                </th>
                            ))}
                            {
                                !ismodal ? (
                                    <th className="px-4 py-2 text-left text-sm-standard font-semibold text-gray-700 border-r border-gray-300">
                                        Action
                                    </th>
                                ) : (<></>)
                            }
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            tabledata.map((row, index) => (
                                <tr key={index} className={
                                    `hover:bg-blue-50 transition-colors cursor-pointer border-b border-gray-300
                                    ${selectedData.some(item => item.id === row.id) ? "bg-blue-100" : ""
                                    }
                                    `
                                }>
                                    {
                                        !ismodal ? (
                                            <td className="px-4 py-2 border-r border-gray-300">
                                                <input type="checkbox" className="text-blue-400"
                                                    checked={selectedData.some(item => item.id === row.id)}
                                                    onChange={() => {
                                                        if (selectedData.some(item => item.id === row.id)) {
                                                            setSelectedData(selectedData.filter(item => item.id !== row.id));
                                                        } else {
                                                            setSelectedData([...selectedData, row]);
                                                        }
                                                    }} />
                                            </td>
                                        ) : (<></>)
                                    }
                                    {
                                        tableheader.map((header) => (
                                            <td

                                                key={header} className={`px-4 py-2 border-r border-gray-300 text-sm-standard ${row[header] === 'Active' ? " text-[#14CA35]" : row[header] === 'Inactive' ? "text-[#EB5757]" : ''}`}>
                                                {
                                                    header === 'profile' ?
                                                        (<CustomAvater profile_image={undefined} />) :
                                                        row[header]
                                                }
                                            </td>
                                        ))
                                    }
                                    {
                                        !ismodal ? (
                                            <td className="flex flex-row gap-2 items-center justify-center px-4 py-2 border-r border-gray-300 ">
                                                <FaPen className="text-blue-500 text-xs-standard" />
                                                <FaTrash className="text-red-500 text-xs-standard" />
                                            </td>
                                        ) : (<></>)
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>)
                }
            </div>
        </div>
    )
}
export default CustomTable