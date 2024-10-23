import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
     <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
    </div>
    <div className="mt-4 text-center">
      <p className="text-xs">&copy; {new Date().getFullYear()} Fitness Club. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer