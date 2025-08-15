'use client'
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import CustomAvater from "./custom_avater";
interface custom_table_props {
    table_title: string,
    search_placeholder: string,
    tabledata: any[],
}

const CustomTable = ({ table_title, search_placeholder, tabledata }: custom_table_props) => {
    const tableheader = tabledata.length > 0 ? Object.keys(tabledata[0]) : [];
    const [selectedData, setSelectedData] = useState<any[]>([]);
    console.log(JSON.stringify(selectedData))
    console.log('array length')
    console.log(tabledata.length)
    console.log(tabledata)
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                    {table_title}
                </h3>
            </div>
            <div>
                <input
                    type="text"
                    placeholder={search_placeholder}
                    className="px-3 py-2 border lg:w-[20rem] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
            </div>
            <div>
                {tabledata.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 border border-gray-300 rounded-lg">
                        No student data is Found
                    </div>
                ) : (<table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 border- border-gray-300">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
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
                            {tableheader.map((header) => (
                                <th key={header} className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                                    {header}
                                </th>
                            ))}
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                                Action
                            </th>
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
                                    {
                                        tableheader.map((header) => (
                                            <td

                                                key={header} className={`px-4 py-2 border-r border-gray-300 ${row[header] === 'Active' ? " text-[#14CA35]" : row[header] === 'Inactive' ? "text-[#EB5757]" : ''}`}>
                                                {
                                                    header === 'profile' ?
                                                        (<CustomAvater profile_image={undefined} />) :
                                                        row[header]
                                                }
                                            </td>
                                        ))
                                    }
                                    <td className="flex flex-row gap-2 items-center justify-center px-4 py-2 border-r border-gray-300 ">
                                        <FaPen className="text-blue-500 text-[13px]" />
                                        <FaTrash className="text-red-500 text-[13px]" />
                                    </td>
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