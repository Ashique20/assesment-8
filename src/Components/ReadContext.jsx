import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rechart from "./Rechart/Rechart";
const ReadContext = createContext();

export const useReadContext = () => useContext(ReadContext);

export const ReadProvider = ({ children }) => {
  const [doneRead, setRead] = useState([]);
  const [doneWish, setWish] = useState([]);


  const read = (book) => {
    const exist = doneRead.find((done) => done.bookId === book.bookId);
    if (!exist) {
      setRead([...doneRead, book]);
      toast("Nice!Check Reading List...");
    } else {
      toast.error("Already Added");
    }
  };


  const wish = (book) => {
    const existInWish = doneWish.find((wish) => wish.bookId === book.bookId);
    const existInRead = doneRead.find((read) => read.bookId === book.bookId);
    if (!existInWish && !existInRead) {
      setWish([...doneWish, book]);
      toast("Nice!Check Wish List...");
    } else {
      toast.error("Already Added");
    }
  };

  const handleReadFilter = (filter) => {
    let sortRead = [...doneRead]
    let sortWish = [...doneWish]
    if(filter==='rating'){
      const sortRate = sortRead.sort((a, b) => b.rating - a.rating)
      const sortWishRate = sortWish.sort((a, b) => b.rating - a.rating)
    setRead(sortRate)
    setWish(sortWishRate)
    }
    else if(filter==='totalPages'){
      const sortPage = sortRead.sort((a, b) => b.totalPages - a.totalPages)
      const sortWishPage = sortWish.sort((a, b) => b.totalPages - a.totalPages)
    setRead(sortPage)
    setWish(sortWishPage)
    }
    else if(filter==='publisherYear'){
      const sortYear = sortRead.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      const sortWishYear = sortWish.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
    setRead(sortYear)
    setWish(sortWishYear)
    }
  
  };
  return (
    <ReadContext.Provider
      value={{ read, doneRead, wish, doneWish, handleReadFilter }}
    >
      {children}
     
      <ToastContainer />
    </ReadContext.Provider>
  );
};
