import React, { useEffect, useState } from "react";
import Container from "../Container";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import Images from "../Images";
import Banner from "/src/assets/banner1.png";
import { FaTruck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import addCart from "../../features/addToCartSlice";

const Search = () => {
  const [showCat, setShowCat] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [quary, setQuary] = useState("");
  const [show, setShow] = useState([]);

  const catHandler = () => {
    setShowCat(!showCat);
  };
  const handleLog = () => {
    setShowLog(!showLog);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShow(data.products);
      });
  }, []);

  const filtered = show.filter((item) =>
    item.title.toLowerCase().includes(quary.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#F5F5F3] pt-[30px]">
        <Container>
          <div className="flex justify-between items-center relative mx-[14px]">
            <div className="flex items-center gap-x-[10px]">
              <HiOutlineMenuAlt1
                onClick={catHandler}
                className="cursor-pointer"
              />
              <p className="text-[10px] sm:text-[16px]">Shop by Category</p>
              {showCat && (
                <div className="absolute z-10 top-[40px] sm:top-[50px] p-0 sm:p-4 text-white bg-black w-[80px] sm:w-fit">
                  <ul>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Accesories
                    </li>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Furniture
                    </li>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Electronics
                    </li>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Clothes
                    </li>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Bags
                    </li>
                    <li className="p-1 sm:p-3 hover:font-bold sm:hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[10px] sm:text-[14px]">
                      Home appliances
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setQuary(e.target.value)}
                placeholder="Search Products"
                className="w-[150px] sm:w-[200px] lg:w-[600px] pr-[50px] py-[10px] px-[20px] bg-white sm:placeholder:text-[19px] placeholder:text-[10px]"
              />
              <FaMagnifyingGlass className="absolute right-5 top-[20px] sm:top-3.5 cursor-pointer text-[10px] sm:text-[20px]" />
              <div className="absolute bg-white m-auto w-full flex justify-center flex-col items-center max-h-[600px] overflow-y-auto">
                {quary &&
                (filtered.length > 0 ? (
                  filtered.map((item) => (
                    <Products
                      src={item.thumbnail}
                      proName={item.title}
                      proPrice={item.price}
                    />
                  ))
                ) : (
                  <p className="text-[30px]  font-bold  text-red-500 p-4">Not Found</p>
                ))}
              </div>
            </div>
            <div className="flex gap-x-[15px] items-center">
              <div className="relative">
                <FaUser
                  onClick={handleLog}
                  className="cursor-pointer text-[30px]"
                />
                {showLog && (
                  <div className="absolute top-[20px] sm:top-[40px] right-0 sm:w-[200px] w-[90px] text-center font-DM font-bold">
                    <Link to={"/AboutMe"}><button className="text-white bg-black p-1 text-[10px] sm:text-[20px] cursor-pointer sm:p-4 w-[200px]">
                      My Account
                    </button></Link>
                    <Link to={"/Login"}><button className="bg-white text-black p-1 text-[10px] sm:text-[20px] cursor-pointer sm:p-4 w-[200px]">
                      Log In
                    </button></Link>
                  </div>
                )}
              </div>
              <Link to={"/Cart"}>
                <button>
                  <IoCartSharp className="text-[30px] cursor-pointer" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
        <Images className={"m-auto w-full"} src={Banner} />
      </div>
      <Container className={"py-[20px]"}>
        <div className="flex sm:flex-row flex-col text-center sm:justify-between gap-y-[20px] items-center">
          <div className="flex items-center gap-x-[10px]">
            <p className="text-[25px]">2</p>
            <p className="font-DM text-[16px]"> Two years warranty</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <p className="text-[25px]">
              <FaTruck />
            </p>
            <p className="font-DM text-[16px]">Free shipping</p>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <p className="text-[25px]">
              <FaUndo />
            </p>
            <p className="font-DM text-[16px]">Return policy in 30 days</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Search;
