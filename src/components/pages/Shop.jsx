import React, { useEffect, useState } from "react";
import Container from "../Container";
import Products from "../layouts/Products";
import { useSelector } from "react-redux";

const Shop = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((datas) => {
        setShow(datas.products);
      });
  }, []);
  const amount = show.length;
  const shopsItem = [];
  for (let i = 0; i < amount / 3; i++) {
    shopsItem.push(
      <Products
        src={show[i].thumbnail}
        proName={show[i].title}
        proPrice={show[i].price}
      />
    );
  }
  console.log(amount);

  return (
    <Container className={"py-[30px]"}>
      <p className="font-DM font-bold text-[49px] py-[30px]">Products</p>
      <div className="flex justify-between">
        <div className="w-[374px] flex flex-col gap-y-[30px]">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Shop by Category</div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-y-[40px] font-DM text-[16px]">
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
                <li>Category 5</li>
                <li>Category 6</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Shop by Color</div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-y-[40px] font-DM text-[16px]">
                <li>Color 1</li>
                <li>Color 2</li>
                <li>Color 3</li>
                <li>Color 4</li>
                <li>Color 5</li>
                <li>Color 6</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Shop by Brand</div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-y-[40px] font-DM text-[16px]">
                <li>Brand 1</li>
                <li>Brand 2</li>
                <li>Brand 3</li>
                <li>Brand 4</li>
                <li>Brand 5</li>
                <li>Brand 6</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Shop by Price</div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-y-[40px] font-DM text-[16px]">
                <li>$0.00 - $9.99</li>
                <li>$0.00 - $9.99</li>
                <li>$0.00 - $9.99</li>
                <li>$0.00 - $9.99</li>
                <li>$0.00 - $9.99</li>
                <li>$0.00 - $9.99</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Left one end  */}

        <div className="w-[1295px]">
          <div className="flex justify-end gap-x-[20px]">
            <div className="flex justify-end items-center gap-x-[20px]">
              <p className="font-DM ">Sort by:</p>
              <select className="py-[10px] px-[20px] w-[240px] border-1 font-DM">
                <option>Feature</option>
                <option>New</option>
                <option>Popular</option>
              </select>
            </div>
            <div className="flex justify-end items-center gap-x-[20px]">
              <p className="font-DM ">Show:</p>
              <select className="py-[10px] px-[20px] w-[240px] border-1 font-DM">
                <option>26</option>
                <option>20</option>
                <option>80</option>
              </select>
            </div>
          </div>
          <div className="productPart flex flex-wrap gap-y-[40px] justify-between mt-[50px]">
            {shopsItem}
          </div>
          <div className="flex gap-x-[20px]">
            <button className="p-3 border-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">1</button>
            <button className="p-3 border-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">2</button>
            <button className="p-3 border-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">3</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
