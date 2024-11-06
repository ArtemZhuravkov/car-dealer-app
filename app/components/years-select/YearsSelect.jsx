export const YearsSelect = ({ onChangeHandler, selectedValue }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

    return (
        <select
            className="block w-full p-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
        text-gray-700"
            value={selectedValue}
            onChange={(e) => onChangeHandler(e)}
        >
            <option value="">Select year</option>
            {years.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}
