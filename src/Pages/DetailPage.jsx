import React from 'react'
import Navbar from '../Components/Navbar'

const DetailPage = () => {
    return (
        <>
            <Navbar />
            <div className=''>


                <div className=' bg-black container w-full p-4 h-screen md:h-80'>
                    {/* carousal */}
                    <div className="w-80 md-64 carousel rounded-box h-80">
                        <div className="carousel-item w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                    {/* carousal */}
                    <div className=' '>
                        <h1 className='text-gray-400 text-2xl font-sans font-semibold py-2 text-start'>
                            NUTELLA SHAKES
                        </h1>
                        <h2 className='text-gray-400 text-xl font-semibold  '>
                            ₹200
                        </h2>
                    </div>
                    <div className='flex justify-center'>


                        <button className="border rounded-xl text-gray-400 p-3" onClick={() => document.getElementById('my_modal_1').showModal()}>operatin time</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>



            </div>

        </>
    )
}

export default DetailPage
