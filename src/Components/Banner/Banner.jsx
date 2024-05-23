import { Link } from "react-router-dom";
import book from "../images/bannerBook.png";
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly m-20  bg-[#F3F3F3] rounded-2xl">
      <div className="flex-1 p-20 mt-20">
        <h1 className="text-6xl">
          Books to freshen up <span>your bookshelf</span>
        </h1>
        <Link to="/listed">
         
          <button className="bg-[#23BE0A] rounded p-4 mt-10 text-white font-bold">
            View The List
          </button>
        </Link>
      </div>
      <div className="lg:p-20">
        <img src={book} alt="" />
      </div>
    </div>
  );
};

export default Banner;
