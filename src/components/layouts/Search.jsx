import React, { useState } from "react";
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



const Search = () => {
  const [showCat, setShowCat] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const catHandler = () => {
    setShowCat(!showCat);
  };
  const handleLog = () => {
    setShowLog(!showLog);
  };
  return (
    <>
      <div className="bg-[#F5F5F3] pt-[30px]">
        <Container>
          <div className="flex justify-between items-center relative">
            <div className="flex items-center gap-x-[10px]">
              <HiOutlineMenuAlt1
                onClick={catHandler}
                className="cursor-pointer"
              />
              <p>Shop by Category</p>
              {showCat && (
                <div className="absolute top-[50px] p-3 text-white bg-black">
                  <ul>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Accesories
                    </li>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Furniture
                    </li>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Electronics
                    </li>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Clothes
                    </li>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Bags
                    </li>
                    <li className="p-3 hover:font-bold hover:p-5 transition-all duration-300 cursor-pointer font-DM text-[14px]">
                      Home appliances
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-[600px] pr-[50px] py-[10px] px-[20px] bg-white"
              />
              <FaMagnifyingGlass className="absolute right-5 top-3.5 cursor-pointer" />
            </div>
            <div className="flex gap-x-[15px] items-center ">
              <div className="relative">
                <FaUser onClick={handleLog} className="cursor-pointer" />
                {showLog && (
                  <div className="absolute top-[40px] right-0 w-[200px] text-center font-DM font-bold">
                    <p className="text-white bg-black p-4">My Account</p>
                    <p className="bg-white text-black p-4">Log Out</p>
                  </div>
                )}
              </div>
              <Link to={"/Cart"}><button><IoCartSharp className="text-[18px]" /></button></Link>
            </div>
          </div>
        </Container>
        <Images className={"m-auto w-full"} src={Banner} />
      </div>
      <Container className={"py-[20px]"}>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-[10px]">
              <p className="text-[25px]">2</p>
              <p className="font-DM text-[16px]"> Two years warranty</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <p className="text-[25px]"><FaTruck /></p>
              <p className="font-DM text-[16px]">Free shipping</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <p className="text-[25px]"><FaUndo /></p>
              <p className="font-DM text-[16px]">Return policy in 30 days</p>
            </div>
          </div>
        </Container>
    </>
  );
};

export default Search;
