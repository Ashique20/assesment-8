import { Link } from "react-router-dom";
import { useReadContext } from "../ReadContext";
import year from '../images/year.png'

const WishList = () => {
    const {doneWish} = useReadContext()
    
    return (
        <div >
           
            {
                doneWish.map(read=><div className="card card-side bg-base-100 shadow-xl p-4 mt-10">
                <figure className="  bg-[#F3F3F3] w-24 p-2"><img src={read.image} alt="Movie"/></figure>
                <div className="ml-10">
                  <h2 className="card-title text-3xl">{read.bookName}</h2>
                  <p className="text-xl mt-2">By {read.author}</p>
                  <div className="flex gap-4 mt-5">
                  <span className="font-bold text-xl">Tag</span>
                    {
                        read.tags.map(tag=><p className="text-green-400 font-bold bg-green-50 rounded-xl p-2 ">{tag}</p>)
                    }
                    <div className="flex items-center">
                    <img src={year} alt="" />
                    {read.yearOfPublishing}
                  </div>
                  </div>
                  
                  <div className="flex text-xl gap-8">
                    <div>Publisher:{read.publisher}</div>
                    <div>Page:{read.totalPages}</div>
                  </div>
                  <div className="flex gap-4 mt-10">
                <div className="bg-[#e4ecfc] p-3 rounded-2xl">
                  Categoty:{read?.category}
                </div>
                <div className="bg-[#fce4b6] p-3 rounded-2xl">
                  Rating:{read?.rating}
                </div>
                <Link to={`/bookDetail/${read.bookId}`}>
                  <div className="bg-green-200 p-3 rounded-2xl">
                    View Details
                  </div>
                </Link>
              </div>
                </div>
               
              </div>)
            }
        </div>
    );
};

export default WishList;