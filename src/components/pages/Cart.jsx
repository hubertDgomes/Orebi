import React, { useState } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { quantityMinus, quantityPlus } from "../../features/addToCartSlice";

const Cart = () => {
  const data = useSelector((state) => state.cart.value);
  const amount = data.quantity;
  const dispatch = useDispatch()

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
        {data.map((item) => {
          return (
            <ul key={item.id} className="flex justify-between items-center">
              <li>
                <img className="w-[70px]" src={item.img} alt={item.title} />
              </li>
              <li>${item.price}</li>
              <div className="flex gap-4 items-center">
                <button onClick={()=> dispatch(quantityPlus(item.id))}>+</button>
                <li>{item.quantity}</li>
                <button onClick={()=> dispatch(quantityMinus(item.id))}>-</button>
              </div>
              <li>${item.price * item.quantity}</li>
            </ul>
          );
        })}
      </div>
    </Container>
  );
};

export default Cart;
