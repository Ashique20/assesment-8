import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books,setBook] = useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div className=' p-2 mt-32'>
            <h1 className="text-5xl text-[#131313] text-center mb-16 font-bold">Books</h1>
            <div className=" grid-cols-1 lg:grid grid-cols-3 gap-10">
            {
                books.map(book=><Book book={book} key={book?.bookId}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;