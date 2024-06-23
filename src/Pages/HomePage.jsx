import React from 'react'
import Navbar from '../Components/Navbar'
import starter from '/starter.jpg'
import comboBan from '/comboBan.jpg'
import oreganoSpecial from '/oreganoSpecial.png'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {


    return (
        <>

            <Navbar />

            {/* carousal start */}


                <div className="h-svh w-full relative overflow-hidden">
  <div className="carousel carousel-horizontal w-full h-full flex">
    <div className="carousel-item relative h-full w-96">
      <h1 className="absolute top-64 left-4 transform -translate-y-1/2  text-white text-4xl font-sans">
Discover Cafe Oregano: Where Flavor Comes First !</h1>
      <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148396/Carousal1_lyyvk0.jpg"} alt="Carousel 1" />
    </div>
    <div className="carousel-item relative h-full w-96">
        <h1 className="absolute top-64 left-8 transform -translate-y-1/2 text-white text-4xl  ">
      Where Every Bite Tells a Story:)
{/* <h1 className='text-xl font-serif p-1 '>Taste the virgin</h1> */}
</h1>
      <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148396/Carousal2_elrcgh.jpg"} alt="Carousel 2" />
    </div>
    <div className="carousel-item relative h-full w-96">
      <h1 className="absolute top-64 left-4 transform -translate-y-1/2 text-white text-4xl ">
      Discover Delights: Cafe Oregano Edition </h1>
      <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148396/Carousal4_sh3ycn.jpg"} alt="Carousel 3" />
    </div>
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
                            <Link to="/listPage/combo">
                                <figure> <img className="rounded-t-xl" src={comboBan} alt="shakes" /> </figure>
                                <div className='absolute inset-0 rounded-t-xl bg-black opacity-45 flex items-center justify-center'>
                                    <h1 className='text-white p-2 text-3xl font-extrabold font-sans'>Combo</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className="m-1 w-full relative ">
                            <Link to={"/listPage"}>
                            <figure> <img className='rounded-md h-48 w-full' src={oreganoSpecial} alt="shakes" /> </figure>
                            <div className='absolute inset-0 rounded-md flex items-center opacity-65 justify-center bg-black bg-opacity-40'>
                                <h1 className='text-white font-bold p-2 text-xl font-sans'>oregano Special</h1>
                            </div>
                            </Link>
                        </div>

                        <div className="m-1 w-full relative ">
                            <Link to={'/listPage/starter'}>
                            <figure> <img className='rounded-md h-48  w-full' src={starter} alt="shakes" /> </figure>
                            <div className='absolute inset-0 rounded-md flex items-center opacity-65 justify-center bg-black bg-opacity-40'>
                                <h1 className='text-white font-bold p-2 text-xl font-sans'>Starter</h1>
                            </div>
                            </Link>
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
                            <img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148511/shakes_mayaxw.png"} alt="" className="w-24 h-20 tansform hover:scale-110 duration-200 " />
                            <h2 className="text-balance font-serif">Shakes</h2>
                        </div>
                    </Link>
                    <Link  to={'/listPage/burger'}>
                    <div>
                        <img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148511/burger_f9ivvj.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200 " />
                        <h2 className=" text-balance font-serif">Burger</h2>
                    </div>
                    </Link>
                    <Link to={'/listPage/pizza'}>
                    <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148508/pizza_ljitle.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Pizza</h2>
                    </div>
                    </Link>
                    <Link to={'/listPage/pasta'}>
                    <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719133977/Firefly_20240623143328-removebg-preview_it3ria.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Pasta</h2>
                    </div>
                    </Link>
                    <Link to={'/listPage/sandwich'}>
                    <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148508/sandwitch_pvu1oe.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Sandwitch</h2>
                    </div>
                    </Link>
                    <Link to={'/listPage/wrap'}>
                    <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148510/wrap_hdlsut.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                        <h2 className=" text-balance font-serif">Wrap</h2>
                    </div>
                    </Link>
                </div>

            </div>

            {/* selection end */}


            {/* footer */}

            <Footer />

            {/* footer section end */}
        </>
    )
}

export default HomePage
