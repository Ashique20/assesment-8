import { useEffect } from "react";
import { NavLink,  useLocation, useNavigate} from "react-router-dom";
import './Navbar/Navbar.css'


const ListNav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        if(location.pathname === "/listed"){
            navigate('/listed/read')
        }
    },[])
    console.log(location)
    return (
        <div className="border-b-4 mb-10">
            <ul className="flex gap-4 text-xl nav ">
               <NavLink to='/listed/read'> <li>Read Books</li></NavLink>
                <NavLink to='/listed/wish'><li>WishListBooks</li></NavLink>
            </ul>
        </div>
    );
};

export default ListNav;