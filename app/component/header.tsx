import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
          <nav className="flex items-center justify-between p-4 bg-gray-800 shadow-md ">
        <div className="text-white text-lg font-semibold">
          Fitness <span className="font-bold">Club</span>
        </div>
        <div className="flex-1 flex justify-center space-x-4">
          <Link href="/" className="text-white hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link href="/services" className="ml-4 text-white hover:text-yellow-400 transition">
            Services
          </Link>
        </div>
      </nav>
    </div> 
  )
}
export default Header