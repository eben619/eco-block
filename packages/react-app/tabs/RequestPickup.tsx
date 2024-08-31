import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, usePublicClient, useWalletClient, useChainId } from 'wagmi';
import WasteManagementABI from '../SocialConnect/abis/WasteManagement.json'; // Import the ABI

const contractAddress = "0x510656370abae7ed4323f7130881c39814aa3c6e"; // Replace with your contract address

export default function RequestPickup() {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [gpsAddress, setGpsAddress] = useState('');
  const [selectedWasteTypes, setSelectedWasteTypes] = useState<string[]>([]);
  
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!walletClient || !publicClient) {
      alert('Please connect your wallet.');
      return;
    }

    try {
      // Create a new instance of the contract
      const contract = {
        address: contractAddress as `0x${string}`,
        abi: WasteManagementABI,
      };

      // Convert the date and time to a UNIX timestamp
      const pickupDateTime = Math.floor(new Date(`${pickupDate}T${pickupTime}`).getTime() / 1000);

      // Prepare the transaction
      const { request } = await publicClient.simulateContract({
        ...contract,
        functionName: 'requestPickup',
        args: [gpsAddress, selectedWasteTypes, BigInt(pickupDateTime), BigInt(pickupDateTime)],
      });

      // Send the transaction
      const hash = await walletClient.writeContract(request);

      // Wait for the transaction to be mined
      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      if (receipt.status === 'success') {
        alert('Pickup request submitted successfully!');
        // Reset the form after submission
        setPickupDate('');
        setPickupTime('');
        setGpsAddress('');
        setSelectedWasteTypes([]);
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      console.error('Error submitting pickup request:', error);
      alert('Failed to submit pickup request. Please try again.');
    }
  };

  const handleWasteTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedWasteTypes(options);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {!isConnected && (
        <div className="text-center">
          <p className="text-xl font-bold text-red-600">
            Please connect your wallet to request a pickup
          </p>
        </div>
      )}
      {isConnected && (
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">Request Waste Pickup</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
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
            <div>
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
            <div>
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
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="wasteTypes">
                Select Waste Type(s)
              </label>
              <select
                id="wasteTypes"
                multiple
                value={selectedWasteTypes}
                onChange={handleWasteTypeChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="Metal">Metal</option>
                <option value="Biodegradable">Biodegradable</option>
                <option value="Plastic">Plastic</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Request Pickup
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}