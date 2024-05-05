import React from 'react'

const Navbar = () => {
  return (
    <div className=" p-0 navbar bg-green">
    <div className="flex-1">
      <a className="px-6 text-xl text-base-200 disabled">Cafe organo</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary className='text-base-200'>
              Menu
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li><a>Juice</a></li>
              <li><a>Burger</a></li>
              <li><a>pasta</a></li>
              <li><a>pizza</a></li>
            </ul>
          </details>
        </li>
        <li className='text-base-200'><a>About us</a></li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar
