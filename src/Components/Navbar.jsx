import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" p-0 navbar bg-green">
    <div className="flex-1">
      <a className="px-6 text-xl text-base-200 disabled"><Link to={'/'}>Cafe organo</Link></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary className='text-base-200'>
              Menu
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li><Link to={'/juice'}>Juice</Link></li>
              <li><Link>Burger</Link></li>
              <li><Link>pasta</Link></li>
              <li><Link>pizza</Link></li>
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
