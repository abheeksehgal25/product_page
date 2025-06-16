import './App.css'
import { useState } from 'react';

import additional from './images/additional.png';
import photoframe from './images/photoframe.png'

function App() {
  const [favorited, setFavorited] = useState(Array(12).fill(false));

  const handleFavoriteClick = (index) => {
    const newFavorited = [...favorited];
    newFavorited[index] = !newFavorited[index];
    setFavorited(newFavorited);
  };

  return (
    <div className="p-8">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-800 hover:underline">Home</a>
              <i className="fas fa-chevron-right mx-2 text-gray-500 text-xs"></i>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-black hover:text-gray-800 hover:underline">Categories</a>
              <i className="fas fa-chevron-right mx-2 text-gray-500 text-xs"></i>
            </li>
            <li className="flex items-center">
              <span className="text-black font-medium">Photo frames</span>
            </li>
          </ol>
        </nav>

        {/* Filter and Sort Options */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex flex-wrap items-center space-x-4">
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Sort</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Size</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Colour</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Price</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Categories</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Appearance</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
            <div className="relative shadow-sm">
              <select className="border-transparent bg-[#E2E2E2] rounded-full px-4 py-2 text-black appearance-none pr-8 hover:bg-gray-100 transition-all duration-300">
                <option>Custom rating</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <img src={photoframe} alt="Photo frame" className="w-full h-64 object-contain" />
              <div className={`absolute top-2 right-2 cursor-pointer ${favorited[index] ? 'text-red-500' : 'text-gray-500'}`} onClick={() => handleFavoriteClick(index)}>
                <i className="fas fa-heart"></i>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-lg mb-1">Photo frame</h3>
                <p className="text-gray-600 text-sm mb-2">Description, size, colour, type</p>
                <p className="text-xl font-bold text-gray-900 mb-2">Rs. 99/- <span className="text-sm font-normal text-gray-600">only</span></p>
                <div className="flex items-center mb-4">
                  {/* Stars */}
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="text-gray-600 text-sm ml-2">(4)</span>
                </div>
                <p className="text-sm text-black hover:underline mb-4">More options</p>
                <div className="flex space-x-2 mb-6">
                  {/* Option Thumbnails */}
                  <img src={additional} alt="Option 1" className="w-12 h-12 border rounded transform transition-all duration-300 hover:shadow-md hover:scale-105" />
                  <img src={additional} alt="Option 2" className="w-12 h-12 border rounded transform transition-all duration-300 hover:shadow-md hover:scale-105" />
                  <img src={additional} alt="Option 3" className="w-12 h-12 border rounded transform transition-all duration-300 hover:shadow-md hover:scale-105" />
                  <img src={additional} alt="Option 4" className="w-12 h-12 border rounded transform transition-all duration-300 hover:shadow-md hover:scale-105" />
                </div>
                <button className="w-full bg-[#653C28] hover:bg-black text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 mb-2 transform transition-all duration-300 hover:shadow-lg hover:scale-105">BUY NOW</button>
                <button className="w-full bg-[#653C28] hover:bg-black text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform transition-all duration-300 hover:shadow-lg hover:scale-105">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
