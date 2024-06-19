import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

import shakes from '/shake.jpg'
import juice from '/juice.jpg'
import { Button } from '@material-tailwind/react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


const Juices_shakes = () => {
  const [juiceData, Setjuices] = useState([])
  const [Loading, setLoading] = useState(false)

  const menuJuice=[
    {
        title:"sharja",
        rate:400,
        image:["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252482/oregano/juice/vtl3ybqtlx3bxwhlc1t9.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252484/oregano/juice/obi4dw5kqcpkcjyay2hc.jpg"]
    },
    {
        title:"apple shake",
        rate:400,
        image:["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252482/oregano/juice/vtl3ybqtlx3bxwhlc1t9.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252484/oregano/juice/obi4dw5kqcpkcjyay2hc.jpg"]
    },
    {
        title:"oreo",
        rate:400,
        image:["https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252482/oregano/juice/vtl3ybqtlx3bxwhlc1t9.jpg","https://res.cloudinary.com/dlcnf8yfh/image/upload/v1718252484/oregano/juice/obi4dw5kqcpkcjyay2hc.jpg"]
    }
]


  return (
    <>
      <Navbar />
      {/* types card start */}
      {Loading ? (
        <p>loading</p>
      ) : (
        <div>
          <h1 className='p-2 font-bold'>
            Choose juice or shakes
          </h1>
        </div>
      )}
      <div className='flex container p-1 space-x-1 '>
        <Link to={'/listPage'}>
          <div className='h-50 w-39 relative'>
            <img className="rounded-xl" src={shakes} alt="" />
            <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-gray-300 font-bold p-2 text-xl font-sans ">shakes</h1>
            </div>
          </div>
        </Link>
        <div className=' h-50 w-39 relative'>
          <img className="rounded-xl" src={juice} alt="" />
          <div className='absolute inset-0 rounded-xl bg-black bg-opacity-40 flex items-center justify-center'>
            <h1 className='text-gray-300 font-bold p-2 text-xl font-sans '>Juices</h1>
          </div>
        </div>
      </div>
      {/* types card end */}

      {/* oregano special start */}
      <div className='container p-2 font-bold'>
        <h1 className='text-black'>
          Oregano Special
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          {juiceData?.data?.map((item) => (
            <div className=' h-60' key={item.productId}>
              <img className="w-full h-40 object-cover rounded-b-md" src={item?.productImage[0]} alt="" />
              <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                {item?.productName}
              </div>
              <div className="text-black text-end text-sm">
                ₹{item?.Rate}
              </div>
              <Link to={"/DetailPage"} className='border border-current p-1 px-2 rounded-sm text-sm ml-2'>View</Link>
            </div>
          ))}
        </div>
      </div>
      {/* oregano special end */}
      <Footer />
    </>
  )
}

export default Juices_shakes
