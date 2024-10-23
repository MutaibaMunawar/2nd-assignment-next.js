import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
  
      <div className="flex items-center h-96 p-4">
        <div className="relative h-full w-1/3">
          <Image 
            src="/hero-sec.jpeg" 
            alt="Hero Image"
            layout="responsive" 
            width={500} 
            height={300} 
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>
     <div className="flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg ml-4">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome to the Fitness Club!</h1>
  <p className="mt-4 text-gray-600 text-sm md:text-base">
    &apos;Welcome to FitNewss Club&apos; where your fitness journey begins—empowering you to achieve your health goals through personalized training and a supportive community.&apos;
  </p>
  <Link 
    href="/join" 
    className="mt-6 inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
  >
    Join Now
  </Link>
</div>
      </div>

      
      
    </div>
  );
};

export default Home;
