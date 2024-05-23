import { Outlet } from "react-router-dom";
;
import Navbar from "./Navbar/Navbar";

const Screen = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Screen;