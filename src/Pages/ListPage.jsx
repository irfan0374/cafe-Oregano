import React, { useContext } from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { MenuContext } from '../MenuContext'




const ListPage = () => {
    const {category}=useParams()
    const {menu}=useContext(MenuContext)
    const filterMenu=menu.filter(item=>item.category==category)
    return (
        <>
        <Navbar/>
            <div className='container p-2 font-bold'>
             
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h1>
      
                <div className='grid grid-cols-3 gap-3'>
                    {filterMenu.length>0?(
                        filterMenu.map(item=>(
                          <div className=' h-60'>
                          <img className="w-full h-40 object-cover rounded-b-md" src={item.image[0]} alt="" />
                          <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                             {item.name}
                          </div>
                          <div className="text-black text-end text-sm">
                              ₹{item.price}</div>
                          <Link to={'/detailPage'} className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>
                      </div>
                        ))

                    ):(<p>no item found for this category</p>)}
                </div>
            </div>
          <Footer/>
        </>
    )
}

export default ListPage
