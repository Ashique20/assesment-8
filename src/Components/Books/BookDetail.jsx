import { useLoaderData, useParams } from "react-router-dom";
import { useReadContext } from "../ReadContext";


const BookDetail = () => {
    const books = useLoaderData()
  
    const {read,wish} = useReadContext()
   
    
    const {id} = useParams()
    const book = books?.find(book=>book?.bookId === id)
    
    
   
    return (
      <div>
          <div className="flex flex-col lg:flex-row justify-evenly mt-20 lg:p-0 p-20">
           <div className="bg-[#F3F3F3] rounded-2xl">
            <img className="lg:h-[800px] p-10 " src={book.image} alt="" />
           </div>
           <div c>
            <h1 className="text-6xl">{book.bookName}</h1>
            <p className="mt-10 text-3xl">{book.author}</p>
            <hr className="mt-8"/>
            <h1 className="text-2xl">{book.category}</h1>
            <h1 className="text-xl mt-5">Review:{book.review}</h1>
           <div className="flex gap-4">
           {
                book.tags.map(tag=><p className="text-lg">{tag}</p>)
            }
           </div>
           <hr className="mt-8" />
          <div className="mt-10 text-2xl">
          <div className="flex gap-4"><h1>Number of Pages:</h1>{book.totalPages}</div>
           <div className="flex gap-4"><h1>Publisher:</h1>{book.author}</div>
           <div className="flex gap-4"><h1>Rating:</h1>{book.rating}</div>
          </div>
          <div className="flex mt-10 gap-4">
          <button onClick={()=>read(book)} className="p-4 rounded-2xl  bg-green-400 ">
           Read
          </button>
          <button onClick={()=>wish(book)} className="p-4 rounded-2xl  bg-[#59C6D2] ">
           Wishlist
          </button>
         
        </div>
           </div>
          
        </div>
        
      </div>
    );
};

export default BookDetail;