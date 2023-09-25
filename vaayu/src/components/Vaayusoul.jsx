import React, { useState } from 'react';
import axios from 'axios';

const apiKey = 'fec307e567msh8973332cb7d2418p1bb94ajsnd750f07c108c';
const apiBaseUrl = 'https://carbon-footprint-calculator-api.p.rapidapi.com';

const vehicleTypes = {
  car: [
    'SmallDieselCar',
    'MediumDieselCar',
    'LargeDieselCar',
    'MediumHybridCar',
    'LargeHybridCar',
    'MediumLPGCar',
    'LargeLPGCar',
    'MediumCNGCar',
    'LargeCNGCar',
    'SmallPetrolVan',
    'LargePetrolVan',
    'SmallDielselVan',
    'MediumDielselVan',
    'LargeDielselVan',
    'LPGVan',
    'CNGVan',
    'SmallPetrolCar',
    'MediumPetrolCar',
    'LargePetrolCar',
  ],
  flight: [
    'DomesticFlight',
    'ShortEconomyClassFlight',
    'ShortBusinessClassFlight',
    'LongEconomyClassFlight',
    'LongPremiumClassFlight',
    'LongBusinessClassFlight',
    'LongFirstClassFlight',
  ],
  bike: ['SmallMotorBike', 'MediumMotorBike', 'LargeMotorBike'],
};

const publicTransportTypes = [
  'Taxi',
  'ClassicBus',
  'EcoBus',
  'Coach',
  'NationalTrain',
  'LightRail',
  'Subway',
  'FerryOnFoot',
  'FerryInCar',
];

export default function Vaayusoul() {
  const [distance, setDistance] = useState('');
  const [transportType, setTransportType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [isVehicleDropdownDisabled, setIsVehicleDropdownDisabled] = useState(true);

  const handleTransportTypeChange = (value) => {
    setTransportType(value);
    if (value === 'carTravel') {
      setIsVehicleDropdownDisabled(false);
    } else {
      setIsVehicleDropdownDisabled(true);
      setVehicleType('');
    }
  };

  const calculateCarbonFootprint = async () => {
    try {
      // Create URL-encoded parameters
      const params = new URLSearchParams();
      params.append('distance', distance);
      if (transportType === 'carTravel') {
        params.append('vehicle', vehicleType);
      } else {
        params.append('type', vehicleType);
      } // Use vehicleType here

      const response = await axios.post(`${apiBaseUrl}/${transportType}`, params.toString(), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'carbon-footprint-calculator-api.p.rapidapi.com',
        },
        data:params,
      });
      setCarbonFootprint(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="carbon-container">
      <h1 className="carbon-title">Carbon Footprint Calculator</h1>
      <div>
        <label>Distance (in km): </label>
        <input
          className="carbon-input"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <label>Transport Type: </label>
        <select
          className="carbon-select"
          value={transportType}
          onChange={(e) => handleTransportTypeChange(e.target.value)}
        >
          <option value="">Select Transport Type</option>
          <option value="carTravel">Car</option>
          <option value="flight">Flight</option>
          <option value="motorBike">Bike</option>
          <option value="publicTransit">Public Transport</option>
        </select>
      </div>
      {transportType === 'carTravel' && (
        <div>
          <label>Car Type: </label>
          <select
            className="carbon-select"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Car Type</option>
            {vehicleTypes.car.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}
      {transportType === 'flight' && (
        <div>
          <label>Flight Type: </label>
          <select
            className="carbon-select"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Flight Type</option>
            {vehicleTypes.flight.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}
      {transportType === 'motorBike' && (
        <div>
          <label>Bike Type: </label>
          <select
            className="carbon-select"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Bike Type</option>
            {vehicleTypes.bike.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}
      {transportType === 'publicTransit' && (
        <div>
          <label>Public Transport Type: </label>
          <select
            className="carbon-select"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Public Transport Type</option>
            {publicTransportTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}
      <button className="carbon-button" onClick={calculateCarbonFootprint}>Calculate</button>
      {carbonFootprint !== null && (
        <div className="carbon-result">
          <h2>Carbon Footprint: {carbonFootprint.carbon}</h2>
        </div>
      )}
    </div>
  );
}
