import React from 'react'
import { motion } from "framer-motion"
import './style.css'
import shakes from '/shake.jpg'
import juice from '/juice.jpg'
import { Button } from '@material-tailwind/react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const Juices_shakes = () => {

  return (
    <>
    <Navbar/>
      {/* types card start */}
      <div className='flex container p-1 space-x-1 '>
        <div className='h-50 w-39 '>
          <img className="rounded-xl" src={shakes} alt="" />
        </div>
        <div className=' h-50 w-39'>
          <img className="rounded-xl" src={juice} alt="" />
        </div>
      </div>
      {/* types card end */}

      {/* oregano special start */}
      <div className='container p-2 font-bold'>
        <h1 className='text-black'>
          Oregano Special
        </h1>
        <div className='grid grid-cols-3 gap-3'>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        <div className=' h-60'>
            <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
            <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
             NUTELLA SHAKE
            </div>
            <div className="text-black text-end text-sm">
            ₹200</div>
            <button className='border border-current px-3 rounded-sm text-sm ml-2'>View</button>
            
          </div>
        </div>
      </div>

      {/* oregano special end */}
      <Footer/>
    </>
  )
}

export default Juices_shakes
