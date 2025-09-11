import React from "react";
import Images from "../Images";
import sample from "/src/assets/sample.png";
import { FaHeart } from "react-icons/fa";
import { IoSync } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/addToCartSlice";


const Products = ({ src, proName, proPrice }) => {
  let dispatch = useDispatch();
  const sendToCart = () => {
    
    dispatch(
      addCart({
        img: src,
        title: proName,
        price: proPrice,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <div className="lg:w-[370px] w-[250px] relative group mx-[20px]">
        <Images className={"bg-[#F9F9F9] m-auto w-full"} src={src} />
        <div className="bg-white py-[10px] px-[30px] flex flex-col items-end absolute bottom-[50px] w-full translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <div className="flex items-center gap-x-[10px]">
            <p className="font-DM text-[16px] hover:font-bold py-[10px] cursor-pointer">
              Add to Wish List
            </p>
            <FaHeart />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <p className="font-DM text-[16px] hover:font-bold py-[10px] cursor-pointer">
              Compare
            </p>
            <IoSync />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <button
              onClick={sendToCart}
              className="font-DM text-[16px] hover:font-bold py-[10px] cursor-pointer"
            >
              Add to Cart
            </button>
            <FaCartShopping />
          </div>
            
        </div>
        <button className="py-[10px] px-[30px] text-white bg-black font-DM font-bold text-[14px] absolute top-4 left-4">
          New
        </button>
        <div className="py-[10px] flex justify-between items-center">
          <p className="font-DM font-bold text-[20px]">{proName}</p>
          <p className="text-[#767676] font-DM text-[16px]">{proPrice}</p>
        </div>
      </div>
      
    </>
  );
};

export default Products;
