import React, { useState } from "react";
import Container from "../Container";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cart.value);
 
  return (
    <Container className={"py-[40px]"}>
      <h1 className="font-bold font-DM text-[50px] py-[50px] ">Cart</h1>

      <div className="bg-[#F5F5F3] py-[30px] px-[10px] font-DM font-bold text-[16px]">
        <ul className="flex justify-between">
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      </div>
      <div className=" bg-white border-1 py-[30px] px-[10px] font-DM font-bold text-[16px]">
        {data.map((item) => (
          <>
            <ul className="flex justify-between items-center">
              <li>
                <img className="w-[70px]" src={item.img} />
              </li>
              <li>{item.price}</li>
              <div className="flex gap-4">
                <button>+</button>
              <li>{item.quantity}</li>
              <button>-</button>
              </div>
              <li>{`$${item.price * item.quantity}`}</li>
            </ul>
          </>
        ))}
      </div>
        
    </Container>
  );
};

export default Cart;
