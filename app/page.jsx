"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { fetchVehicleMakes } from "@/app/lib/api";
import { VehicleMakesSelect } from "./components/vehicle-makes-select/VehicleMakesSelect";
import { YearsSelect } from "./components/years-select/YearsSelect";
import { LoadingSpinner } from "./components/loading-spinner/LoadingSpinner";

export default function Home() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vehicleMake, setVehicleMake] = useState("");
  const [modelYear, setModelYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicleData = await fetchVehicleMakes();
        setVehicleMakes(vehicleData.Results);
      } catch (error) {
        setError("Failed to load vehicle makes.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const isButtonDisabled = !vehicleMake || !modelYear;

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      {error && <div className="text-red-600">{error}</div>}
      {loading && <LoadingSpinner />}
      {vehicleMakes && !loading && (
        <div className="border rounded p-5">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Car Dealer
          </h1>
          <div className="mb-4">
            <label
              htmlFor="vehicleMake"
              className="block text-sm font-bold text-gray-700"
            >
              Vehicle Make:
            </label>
            <VehicleMakesSelect vehicleMakes={vehicleMakes} onChangeHandler={(e) => setVehicleMake(e.target.value)} selectedValue={vehicleMake} />
          </div>
          <div>
            <label
              htmlFor="modelYear"
              className="block text-sm font-bold text-gray-700"
            >
              Model Year:
            </label>
            <YearsSelect onChangeHandler={(e) => setModelYear(e.target.value)} selectedValue={modelYear} />
          </div>

          <div className="mt-6">
            <Link
              href={isButtonDisabled ? '#' : `/result/${vehicleMake}/${modelYear}`}
              passHref
            >
              <button
                disabled={isButtonDisabled}
                className={`w-full py-3 px-6 text-white font-semibold rounded-md 
                           ${isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
