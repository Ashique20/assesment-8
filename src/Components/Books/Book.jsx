
import { useNavigate } from 'react-router-dom';
import star from '../images/star.png'
const Book = ({book}) => {

  const navigate = useNavigate()
  const detail=()=>{
    navigate(`/bookDetail/${book.bookId}`)
  }
   
    return (
        <div onClick={detail}  className='cursor-pointer'>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 bg-[#F3F3F3] ">
    <img src={book.image} alt="Shoes" className="rounded-xl p-4" />
  </figure>
  <div className="card-body  ">
  <div className="flex gap-2">
   {book.tags.map(tag=><p className="text-green-400 font-bold bg-green-50 rounded-xl p-2 ">{tag}</p>)}
   </div>
    <h2 className="card-title  text-2xl">{book.bookName}</h2>
        <h1>By:{book.publisher}</h1>
    <div className="card-actions flex justify-between">
      <h1 className='text-xl'>{book.category}</h1>
      <div className='flex gap-2'>
      <h1>{book.rating}</h1><img src={star} alt="" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;