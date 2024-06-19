import React from 'react'
import Navbar from '../Components/Navbar'
import carousal1 from "/Carousal1.JPG?url";
import carousal2 from "/Carousal2.JPG?url";
import carousal3 from "/Carousal5.JPG?url";
import shake from '/shakes.PNG?url'
import pizza from '/pizza.PNG?url'
import wrap from '/wrap.PNG?url'
import sandwitch from '/sandwitch.PNG?url'
import waffels from '/waffels3.png'
import starter from '/starter.jpg'
import comboBan from '/comboBan.jpg'
import oreganoSpecial from '/oreganoSpecial.png'
import burger from '/burger.PNG?url'
import { Bounce, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion"
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {

 
    return (
        <>
        
            <Navbar />

            {/* carousal start */}


            <div className="h-screen w-full carousel carousel-horizondal  ">
                <div className="carousel-item h-full w-96">
                    <img className='object-cover' src={carousal1} />
                </div>
                <div className="carousel-item h-full w-96">
                    <img className='object-cover' src={carousal2} />
                </div>
                <div className="carousel-item h-full w-96">
                    <img className='object-cover' src={carousal3} />
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
                        <div className="m w-full relative">
                            <figure> <img className="rounded-t-xl" src={comboBan} alt="shakes" /> </figure>
                            <div className='absolute inset-0 rounded-t-xl bg-black opacity-45 flex items-center justify-center'>
                                <h1 className='text-white p-2 text-3xl font-extrabold font-sans'>Combo</h1>
                            </div>
                        </div> 
                    </div>
                    <div className='flex '>
                        <div className="m-1 w-full relative ">
                            <figure> <img className='rounded-md h-48 w-full' src={oreganoSpecial} alt="shakes" /> </figure>
                            <div className='absolute inset-0 rounded-md flex items-center opacity-65 justify-center bg-black bg-opacity-40'>
                                <h1 className='text-white font-bold p-2 text-xl font-sans'>oregano Special</h1>
                            </div>
                        </div>

                        <div className="m-1 w-full relative ">
                            <figure> <img className='rounded-md h-48  w-full' src={starter} alt="shakes" /> </figure>
                            <div className='absolute inset-0 rounded-md flex items-center opacity-65 justify-center bg-black bg-opacity-40'>
                                <h1 className='text-white font-bold p-2 text-xl font-sans'>Starter</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* mostpopular end */}

            {/* Selection */}

            <div className=' justify-center space-x-3'>
                <h1 className='text-black font-sans font-extrabold py-3 px-3 '>What's on your mind?</h1>
                <div className='grid grid-cols-3 gap-4 py-6 '>
                    <Link to={"/juice"}>
                    <div>
                        <img  src={shake} alt="" className="w-24 h-20 tansform hover:scale-110 duration-200 " />
                        <h2 className="text-balance font-serif">Shakes</h2>
                    </div>
                    </Link>
                    <div>
                        <img  src={burger} alt="" className="w-20 h-20 transform hover:scale-110 duration-200 " />
                        <h2 className=" text-balance font-serif">Burger</h2>
                    </div>
                    <div><img src={pizza} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Pizza</h2>
                    </div>
                    <div><img src={waffels} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Waffels</h2>
                    </div>
                    <div><img src={sandwitch} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Sandwitch</h2>
                    </div>
                    <div><img src={wrap} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Wrap</h2>
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
