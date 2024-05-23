import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-10 flex flex-col lg:flex-row">
        <div className="navbar-start">
        <h1 className="font-bold text-3xl">Book Vibe</h1>
        </div>
        <div className="navbar-center">
         <ul className="flex gap-2 mt-2  flex-row items-center  lg:gap-10 lg:text-xl ">
         <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/listed'>Listed Books</NavLink></li>
          <li><NavLink to='/chart'>Pages to Read</NavLink></li>
          <li><NavLink to='/blog'>Blogs</NavLink></li>
          <li><NavLink to='/fame'>Fame</NavLink></li>
         </ul>
        </div>
        <div className="navbar-end mt-10 lg:mt-0 gap-4">
          <button className="p-4 rounded-2xl  bg-green-400 ">
            Sign In
          </button>
          <button className="p-4 rounded-2xl  bg-[#59C6D2] ">
            Sign Up
          </button>
         
        </div>
      </div>
    );
};

export default Navbar;