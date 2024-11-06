export const VehicleMakesSelect = ({ vehicleMakes, onChangeHandler, selectedValue }) => {
    return (
        <select
            className="block w-full p-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            value={selectedValue}
            onChange={(e) => onChangeHandler(e)}
        >
            <option value="">Select make</option>
            {vehicleMakes.map((item) => (
                <option key={item.MakeId} value={item.MakeId}>
                    {item.MakeName}
                </option>
            ))}
        </select>
    );
}
