import React from 'react';

const CarbonCompass = () => {
   var data = {
      transport: {
         type: '',
         travel: '',
         days: '',
      },
      elec: '',
      tc: '',
      waste: '',
      footprint: null,
   };

   const calculateFootprint = () => {
      /*
      const transportValue = parseFloat(data.transportation) || 0;
      const energyValue = parseFloat(data.energy) || 0;
      const wasteValue = parseFloat(data.waste) || 0;
      */
      console.log(data);
   };

   return (
      <div className="min-h-screen bg-gray-900 text-white">
         <div>
            <div className="bg-gray-800 py-20 text-center">
               <h1 className="text-5xl font-bold text-green-400 mb-4">Carbon Compass</h1>
               <p className="text-xl text-gray-300 mb-8">
                  Track your carbon footprint with ease and reduce it with personalized tips.
               </p>
            </div>

            <div className="container mx-auto px-4 py-16">
               <h2 className="text-3xl font-bold text-green-400 mb-2">Problem:</h2>
               <p className="text-gray-300 mb-4">
                  Millions are concerned about their environmental impact but lack easy ways to measure and address it.
               </p>
               <h2 className="text-3xl font-bold text-green-400 mb-2">Solution:</h2>
               <p className="text-gray-300">
                  <span className="font-bold">Carbon Compass</span> empowers them to track their footprint, identify areas for improvement, and receive tailored eco-friendly advice.
               </p>
            </div>

            <div className="bg-gray-800 py-16">
               <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-green-400 mb-6">Why This Matters</h2>
                  <p className="text-gray-300">
                     Climate change is a pressing issue, and every individual can make a difference by reducing their emissions.
                  </p>
               </div>
            </div>
         </div>

         <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-green-400 mb-6">Calculate Your Carbon Footprint</h2>
            <div className="space-y-4">
               <h3 className='text-xl font-bold text-green-400'>Transport</h3>
               <div className="rounded-md bg-gray-800 p-4">
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How do you get to work / school?
                     </label>
                     <select
                        defaultValue={data.transport.type}
                        onChange={(e) => (data.transport.type = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter transportation distance"
                     >
                        <option value="car">Car</option>
                        <option value="bus">Bus</option>
                        <option value="bike">Bike</option>
                        <option value="foot">Walking</option>
                        <option value="metro">Subway</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How many miles do you drive to work / school? <span className='text-xs text-white'>(It is assumed you drive since this is the U S of A)</span>
                     </label>
                     <input
                        type="number"
                        defaultValue={data.transport.travel}
                        onChange={(e) => (data.transport.travel = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter transportation distance"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How many days do you drive to work?
                     </label>
                     <input
                        type="number"
                        defaultValue={data.carDays}
                        onChange={(e) => (data.carDays = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter days driving to work"
                     />
                  </div>
               </div>
               <h3 className='text-xl font-bold text-green-400'>Electricity</h3>
               <div className="rounded-md bg-gray-800 p-4">
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How many megawatts do you use per year? <span className='text-xs text-white'>(Assume all energy is made by fossil fuels)</span>
                     </label>
                     <input
                        type="number"
                        defaultValue={data.elec}
                        onChange={(e) => (data.elec = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter energy usage"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How much kWh do you use on temperature control per year?
                        <span className='text-xs text-white'>(heating and cooling, assume you use fully electric)</span>
                     </label>
                     <input
                        type="number"
                        defaultValue={data.tc}
                        onChange={(e) => (data.tc = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter waste emissions"
                     />
                  </div>
               </div>
               <h3 className='text-xl font-bold text-green-400'>Waste</h3>
               <div className="rounded-md bg-gray-800 p-4">
                  <div>
                     <label className="block text-sm font-medium text-green-300 mb-1">
                        How much trash do you throw away per week? <span className='text-xs text-white'>(small, medium, large)</span>
                     </label>
                     <select
                        defaultValue={data.waste}
                        onChange={(e) => (data.waste = e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter waste emissions"
                     >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                     </select>
                  </div>
               </div>
               <button
                  onClick={calculateFootprint}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
               >
                  Calculate Footprint
               </button>
               {data.footprint !== null && (
                  <div className="mt-6 p-4 bg-gray-700 rounded-lg text-center">
                     <p className="text-lg font-semibold text-green-300">
                        Your Carbon Footprint: <span className="text-white">{data.footprint} kg CO₂</span>
                     </p>
                  </div>
               )}
               <div>
                  All data will be stored locally (in cookies). This is just a demo.
               </div>
            </div>
         </div>
      </div>
   );
};

export default CarbonCompass;