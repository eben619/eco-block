import React from 'react';

export default function SortingGuideContent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Sorting Guide for Waste Management</h1>
      <p className="text-lg text-gray-700 mb-6">
        Proper waste sorting is essential for effective recycling and environmental conservation. By separating different types of waste correctly, we can ensure that materials are reused, recycled, or disposed of in the most eco-friendly way possible. Below is a simple guide to help you sort your waste efficiently.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Plastics</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Plastics:</strong> Bottles, containers, and plastic packaging marked with recycling symbols (usually with numbers 1-7). Rinse out any residue before placing them in the recycling bin.</li>
          <li><strong>Non-Recyclable Plastics:</strong> Items like plastic bags, straws, and certain food packaging cannot be recycled through most curbside programs. Consider reusing these items or finding specialized recycling centers.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Paper and Cardboard</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Paper:</strong> Newspapers, magazines, cardboard boxes, and office paper are recyclable. Ensure they are clean and dry before recycling.</li>
          <li><strong>Non-Recyclable Paper:</strong> Tissue paper, paper towels, and paper contaminated with food or grease should be disposed of in the general waste bin.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Glass</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Glass:</strong> Bottles, jars, and other glass containers can usually be recycled. Remove any caps or lids and rinse them out before placing them in the recycling bin.</li>
          <li><strong>Non-Recyclable Glass:</strong> Ceramics, mirrors, and broken glass are not suitable for curbside recycling and should be disposed of carefully in the general waste.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Metals</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Metals:</strong> Aluminum cans, tin cans, and clean foil can be recycled. Crush cans to save space in your recycling bin.</li>
          <li><strong>Non-Recyclable Metals:</strong> Paint cans, batteries, and electronic waste require special disposal methods. Check with your local recycling center for guidance.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Organic Waste</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Compostable Materials:</strong> Fruit and vegetable scraps, coffee grounds, eggshells, and yard waste are perfect for composting. If you have a compost bin, add these items to create nutrient-rich soil.</li>
          <li><strong>Non-Compostable Organic Waste:</strong> Meat, dairy products, and oily foods should not be composted as they attract pests and can cause odors. Dispose of these in the general waste bin.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Hazardous Waste</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Examples:</strong> Paints, chemicals, batteries, and electronic waste should never be thrown in regular bins. These materials require special handling and disposal. Contact your local hazardous waste disposal facility for instructions.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">E-Waste</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable E-Waste:</strong> Computers, phones, and other electronics contain valuable materials that can be recycled. Many communities offer e-waste recycling events or designated drop-off locations.</li>
          <li><strong>Non-Recyclable E-Waste:</strong> Some electronic components may not be recyclable and require special disposal methods. Check with your local e-waste recycler for more information.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Tips for Effective Sorting</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Rinse Containers:</strong> Always rinse food and drink containers before recycling to prevent contamination.</li>
          <li><strong>Check Local Guidelines:</strong> Recycling rules vary by location. Be sure to follow your community’s guidelines for proper sorting.</li>
          <li><strong>Reduce, Reuse, Recycle:</strong> The best way to manage waste is to reduce what you use, reuse what you can, and recycle the rest.</li>
        </ul>
      </div>

      <p className="text-lg text-gray-700">
        By following this sorting guide, you can contribute to a cleaner environment and ensure that waste is managed sustainably. Every small effort counts in making the world a better place!
      </p>
    </div>
  );
}
