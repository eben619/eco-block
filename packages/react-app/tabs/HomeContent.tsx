import React from 'react';
import Image from "next/image";

export default function HomeContent() {
    const features = [
        "Seamless waste sorting guide to help you categorize your waste effectively.",
        "Schedule pickups with specialized waste disposal companies for free.",
        "Earn rewards for responsible waste management practices.",
        "Track your environmental impact and contribution to sustainability."
    ];

    return (
        <div className="p-6 justify-center">
            <div className="flex flex-shrink-0 justify-center">
                <Image
                    className="block w-auto sm:block lg:block"
                    src="/EcoBlockSolutions.png"
                    width="250"
                    height="250"
                    alt=""
                />
            </div>
            <h1 className="text-lg font-bold text-black mb-15 text-center">
                Welcome to EcoBlock
            </h1>

            <p className="text-lg text-gray-700 mb-6 text-center">
                EcoBlock is your comprehensive platform for managing waste sustainably. We connect individuals and businesses with waste disposal companies that specialize in different types of waste, ensuring that materials are properly sorted and recycled in an environmentally friendly way.
            </p>

            <div className="p-6">
                <h2 className="text-lg font-bold text-black mb-4 text-center">
                    Why Choose EcoBlock?
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className=" shadow-md rounded-lg p-4 text-green-600 font-bold flex items-center justify-center"
                        >
                            <p className="text-center">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get Involved
            </h2>
            <p className="text-lg text-gray-700">
                Join us in making the world a cleaner place. Whether you're an individual looking to manage your household waste better or a business aiming to improve your waste management practices, EcoBlock has the tools you need.
            </p>
        </div>
    );
}
