import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function SortingGuideContent() {
  const sections = [
    {
      title: 'Plastics',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Plastics:</strong> Bottles, containers, and plastic packaging marked with recycling symbols (usually with numbers 1-7). Rinse out any residue before placing them in the recycling bin.</li>
          <li><strong>Non-Recyclable Plastics:</strong> Items like plastic bags, straws, and certain food packaging cannot be recycled through most curbside programs. Consider reusing these items or finding specialized recycling centers.</li>
        </ul>
      ),
    },
    {
      title: 'Paper and Cardboard',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Paper:</strong> Newspapers, magazines, cardboard boxes, and office paper are recyclable. Ensure they are clean and dry before recycling.</li>
          <li><strong>Non-Recyclable Paper:</strong> Tissue paper, paper towels, and paper contaminated with food or grease should be disposed of in the general waste bin.</li>
        </ul>
      ),
    },
    {
      title: 'Glass',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Glass:</strong> Bottles, jars, and other glass containers can usually be recycled. Remove any caps or lids and rinse them out before placing them in the recycling bin.</li>
          <li><strong>Non-Recyclable Glass:</strong> Ceramics, mirrors, and broken glass are not suitable for curbside recycling and should be disposed of carefully in the general waste.</li>
        </ul>
      ),
    },
    {
      title: 'Metals',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable Metals:</strong> Aluminum cans, tin cans, and clean foil can be recycled. Crush cans to save space in your recycling bin.</li>
          <li><strong>Non-Recyclable Metals:</strong> Paint cans, batteries, and electronic waste require special disposal methods. Check with your local recycling center for guidance.</li>
        </ul>
      ),
    },
    {
      title: 'Organic Waste',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Compostable Materials:</strong> Fruit and vegetable scraps, coffee grounds, eggshells, and yard waste are perfect for composting. If you have a compost bin, add these items to create nutrient-rich soil.</li>
          <li><strong>Non-Compostable Organic Waste:</strong> Meat, dairy products, and oily foods should not be composted as they attract pests and can cause odors. Dispose of these in the general waste bin.</li>
        </ul>
      ),
    },
    {
      title: 'Hazardous Waste',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Examples:</strong> Paints, chemicals, batteries, and electronic waste should never be thrown in regular bins. These materials require special handling and disposal. Contact your local hazardous waste disposal facility for instructions.</li>
        </ul>
      ),
    },
    {
      title: 'E-Waste',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Recyclable E-Waste:</strong> Computers, phones, and other electronics contain valuable materials that can be recycled. Many communities offer e-waste recycling events or designated drop-off locations.</li>
          <li><strong>Non-Recyclable E-Waste:</strong> Some electronic components may not be recyclable and require special disposal methods. Check with your local e-waste recycler for more information.</li>
        </ul>
      ),
    },
    {
      title: 'Tips for Effective Sorting',
      content: (
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Rinse Containers:</strong> Always rinse food and drink containers before recycling to prevent contamination.</li>
          <li><strong>Check Local Guidelines:</strong> Recycling rules vary by location. Be sure to follow your community’s guidelines for proper sorting.</li>
          <li><strong>Reduce, Reuse, Recycle:</strong> The best way to manage waste is to reduce what you use, reuse what you can, and recycle the rest.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">Sorting Guide for Waste Management</h1>
      {/* Embed YouTube Video */}
      <div className="mb-8">
        <iframe className='py-7'
        
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/peUp6WoqEOw"
          title="Waste Sorting Guide"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-4"> {/* Wrapping each Disclosure in a div */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-center text-green-600 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 my-4">
                  <span className="w-full text-center">{section.title}</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''} w-4 h-4 text-green-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                  {section.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
