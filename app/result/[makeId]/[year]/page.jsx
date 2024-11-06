import { fetchVehicleMakes } from '@/app/lib/api';

// Fetch data to generate the static paths for all the result pages
export const generateStaticParams = async () => {
    try {
        // Fetch the vehicle makes from your API (or a static list)
        const vehicleData = await fetchVehicleMakes();
        const vehicleMakes = vehicleData.Results;
        // Generate years array
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

        // Generate paths for every make and year
        const paths = vehicleMakes.flatMap((make) => {
            return years.map((year) => ({
                params: { makeId: make.MakeId, year: year }
            }));
        });
        return paths

    } catch (error) {
        console.error('Error fetching vehicle makes:', error);
        return { paths: [], fallback: 'blocking' };
    }
};

const ResultPage = async ({ params }) => {
    const { makeId, year } = await params;
    const data = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    ).then((res) => res.json());
    const vehiclesData = data.Results;

    if (!vehiclesData || vehiclesData.length === 0) {
        notFound(); // If no data is found, return a 404
    }

    return (
        <>
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">
                    Results for {makeId} - {year}
                </h1>

                <ul className="space-y-4">
                    {vehiclesData.map((vehicle) => (
                        <li key={vehicle.Model_ID} className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{vehicle.Make_Name}</h2>
                                <p className="text-gray-600">Model ID: {vehicle.Model_ID}</p>
                                <p className="text-gray-600">Car Name: {vehicle.Model_Name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ResultPage;