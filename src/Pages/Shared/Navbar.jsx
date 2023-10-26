import { FaMoon, FaSun } from 'react-icons/fa6'
import Logo from '../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'



const Navbar = () => {

const {toggle,setToggle,user,logOut} = useContext(AuthContext)


const toggler = () => {
  const newToggle = !toggle;
  setToggle(newToggle);
  localStorage.setItem('toggle', newToggle);
};


    const navItems = <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
       {user !== null ?   <>
        <li><NavLink to={'/bookings'}>Bookings</NavLink></li>
        <li onClick={logOut}><NavLink to={'/'}>Log Out</NavLink></li>
       </> : <li><NavLink to={'/login'}>Log in</NavLink></li> }
    </>
  return (
<div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl -mt-6">
        <img src={Logo} alt="Logo" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>


  <div className="navbar-end">
<div onClick={toggler}>
{toggle ?   <FaSun  className='text-2xl me-4 cursor-pointer' /> :   < FaMoon className='text-2xl me-4 cursor-pointer' />}
</div>


    <a className="btn btn-outline btn-warning">Appointment</a>
  </div>
</div>
  )
}

export default Navbar
