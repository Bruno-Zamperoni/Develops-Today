"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

const VehicleSelector = () => {
  const [vehicles, setVehicles] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const apiUrl = process.env.VEHICLES_API_URL;

  useEffect(() => {
    console.log(apiUrl);
    async function fetchVehicleMakes() {
      try {
        const response = await fetch("https:vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json");
        const data = await response.json();

        setVehicles(data.Results);
        const makeNames = data.Results.map((item) => item.MakeName);
        setMakes(makeNames);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    }
    fetchVehicleMakes();
  }, []);

  const years = [];
  for (let year = 2015; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);

    const selectedVehicle = vehicles.find((vehicle) => vehicle.MakeName === e.target.value);

    if (selectedVehicle) {
      setSelectedMakeId(selectedVehicle.MakeId);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
    <h1 className="text-center text-3xl font-bold text-gray-800">Vehicle Filter</h1>
    
    <div className="space-y-4">
      <div>
        <label htmlFor="make-selector" className="block text-lg font-medium text-gray-700">Select Vehicle Make:</label>
        <select
          id="make-selector"
          value={selectedMake}
          onChange={handleMakeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="">--Select Make--</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
  
      <div>
        <label htmlFor="year-selector" className="block text-lg font-medium text-gray-700">Select Model Year:</label>
        <select
          id="year-selector"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="">--Select Year--</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  
    <Link href={`result/${selectedMakeId}/${selectedYear}`}>
      <button
        className="w-full sm:w-auto bg-green-600 text-white rounded-full py-3 px-6 font-semibold text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed mt-3"
        disabled={!selectedMakeId || !selectedYear}
      >
        Next
      </button>
    </Link>
  </div>
  
  );
};

export default VehicleSelector;
