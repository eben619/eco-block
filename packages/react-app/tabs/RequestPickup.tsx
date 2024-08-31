import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function RequestPickup() {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [gpsAddress, setGpsAddress] = useState('');
  const { isConnected } = useAccount(); // Check if the wallet is connected

  // Typing the event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission here, e.g., sending the data to a server
    console.log(`Pickup Date: ${pickupDate}`);
    console.log(`Pickup Time: ${pickupTime}`);
    console.log(`GPS Address: ${gpsAddress}`);
    // Reset form after submission
    setPickupDate('');
    setPickupTime('');
    setGpsAddress('');
    alert('Pickup request submitted successfully!');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {!isConnected && (
        <div className="flex justify-center mb-4">
          <ConnectButton showBalance={false} />
        </div>
      )}
      {isConnected && (
        <>
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Request Waste Pickup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="pickupDate">
                Pickup Date
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="pickupTime">
                Pickup Time
              </label>
              <input
                type="time"
                id="pickupTime"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="gpsAddress">
                Ghana Post GPS Address
              </label>
              <input
                type="text"
                id="gpsAddress"
                value={gpsAddress}
                onChange={(e) => setGpsAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your GPS address"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                Request Pickup
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
