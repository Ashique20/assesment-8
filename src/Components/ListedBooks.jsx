import { Outlet } from "react-router-dom";
import ListNav from "./ListNav";
import Read from "./Read/Read";
import { useReadContext } from "./ReadContext";

const ListedBooks = () => {
  const{handleReadFilter} = useReadContext()
  
    return (
      <div>
          <div>
                <h1 className="text-3xl font-bold  bg-[#F3F3F3] rounded-3xl p-4 text-center">Books</h1>
                <div className="text-center mt-10  "><details className="dropdown">
  <summary className="m-1 mb-10 p-3 rounded-2xl cursor-pointer bg-green-400 ">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleReadFilter('rating')}><a>Rating</a></li>
    <li onClick={()=>handleReadFilter('totalPages')}><a>Number of Pages</a></li>
    <li onClick={()=>handleReadFilter('publisherYear')}><a>Publisher Year</a></li>
  </ul>
</details></div>
        </div> 
        <ListNav></ListNav>
       <Outlet></Outlet>
       
      </div>
        

    );
};

export default ListedBooks; 