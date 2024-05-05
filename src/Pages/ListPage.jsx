import React from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ListPage = () => {
    return (
        <>
        <Navbar/>
            <div className='container p-2 font-bold'>
                <h1 className='text-black py-4'>
                   category name
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
                </div>
            </div>
          <Footer/>
        </>
    )
}

export default ListPage
