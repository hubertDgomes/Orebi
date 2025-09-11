import React, { useState } from "react";
import Container from "../Container";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import { Link, Links } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };
  return (
    <Container className={"py-[30px] "}>
      <div className="flex items-center mx-[20px] lg:mx-0">
        <Images src={Logo} />
        <div className="m-auto">
          <ul className="sm:flex gap-x-[40px] font-DM text-[16px] font-semibold hidden">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/Shop"}><li>Shop</li></Link>
            <li>About</li>
            <li>Contacts</li>
            <li>Journal</li>
          </ul>
        </div>
        
        <div className="block sm:hidden">
          <button onClick={showNav}>
            {toggle ? <RxCross2 /> : <IoMdMenu/>}
          </button>
          
        </div>
        
      </div>
      {toggle && (
            <div className="transition-all duration-700 block sm:hidden items-start">
              <ul>
                <Link to={"/"}>
              <li className="px-5 py-3 text-[20px] border-1">Home</li>
            </Link>
            <Link to={"/Shop"}><li className="px-5 py-3 text-[20px] border-1">Shop</li></Link>
            <li className="px-5 py-3 text-[20px] border-1">About</li>
            <li className="px-5 py-3 text-[20px] border-1">Contacts</li>
            <li className="px-5 py-3 text-[20px] border-1">Journal</li>
              </ul>
            </div>
          )}
    </Container>
  );
};

export default Header;
