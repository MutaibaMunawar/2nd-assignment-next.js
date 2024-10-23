import React from 'react'
import Image from 'next/image';


const Service = () => {
  return (
    <div>
        <div>Our Services</div>
      <div className="p-12 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ">
            <Image 
              src="/fitness.jpeg" 
              alt="fitness"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
            Fitness Fusion
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image 
              src="/group.jpeg" 
              alt="group"
              layout="responsive"
              width={500}
              height={400}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
              Group Classes
            </div>
          </div>

        
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image 
              src="/flex.jpg" 
              alt="flex"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
             flex Yoga
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image  
              src="/Wellness.jpg" 
              alt="welness"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
              Wellness Workshops
            </div>
          </div>

        </div>
      </div>  
    </div>
  )
}

export default Service