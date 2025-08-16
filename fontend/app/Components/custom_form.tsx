
const CustomForm = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Add Student</h2>

            <form className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        placeholder="fullname"
                        type="text"
                        name="fullname"
                        className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-300"
                        required
                    />
                </div>
                {/* Class */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Class</label>
                    <input
                        placeholder="class"
                        type="text"
                        name="class"
                        className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-300"
                        required
                    />
                </div>

                {/* Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Section</label>
                    <input
                        type="text"
                        name="section"
                        placeholder="section"
                        className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-300"
                        required
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CustomForm