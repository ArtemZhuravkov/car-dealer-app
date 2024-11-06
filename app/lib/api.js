export async function fetchVehicleMakes() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CARS_API_URL);
    return response.json();
  } catch (err) {
    throw err;
  }
}
