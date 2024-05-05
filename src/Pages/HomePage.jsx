import React from 'react'
import Navbar from '../Components/Navbar'
import Images from "/image.jpg";
import Images2 from "/image2.jpg";
import shake from '/shake.jpg'
import waffels1 from '/waffels1.png'
import waffels2 from '/waffels2.png'
import waffels3 from '/waffels3.png'
import shakes from '/shakes.png'
import burger from '/burger.png'
import { Bounce, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion"
import Footer from '../Components/Footer';



const HomePage = () => {

    return (
        <>
        
            <Navbar />

            {/* carousal start */}


            <div className="h-screen w-full carousel carousel-horizondal  ">
                <div className="carousel-item h-full">
                    <img src={Images} />
                </div>
                <div className="carousel-item h-full">
                    <img src={Images2} />
                </div>
                <div className="carousel-item h-full">
                    <img src={Images2} />
                </div>
            </div>
            {/* carousal end */}

            {/* most popular start  */}
            <div >
                <h1 className='font-sans font-extrabold px-3 py-2'>
                    Most popular
                </h1>
                <div className='px-2'>
                    <div>
                        <div className="py-1 w-full">
                            <figure> <img className="rounded-t-xl" src={shake} alt="shakes" /> </figure>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="pr-1 w-full ">
                            <figure> <img className='rounded-md h-48 object-cover' src={shake} alt="shakes" /> </figure>
                        </div>

                        <div className="w-full">
                            <figure> <img className='rounded-md h-48 object-cover' src={shake} alt="shakes" /> </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* mostpopular end */}

            {/* Selection */}

            <div className=' justify-start space-x-3'>
                <h1 className='text-black font-sans font-extrabold py-3 px-3 '>What's on your mind?</h1>
                <div className='grid grid-cols-3 gap-4 py-6 '>
                    <div>
                        <img  src={shakes} alt="" className="w-20 h-20 tansform hover:scale-110 duration-200 " />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                    <div>
                        <img  src={burger} alt="" className="w-20 h-20 transform hover:scale-110 duration-200 " />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                    <div><img src={waffels2} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                    <div><img src={waffels3} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                    <div><img src={shakes} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                    <div><img src={burger} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className="text-justify font-serif">Shakes</h2>
                    </div>
                </div>

            </div>

            {/* selection end */}


            {/* footer */}

        <Footer/>

            {/* footer section end */}
        </>
    )
}

export default HomePage
