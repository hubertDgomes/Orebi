import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const Login = () => {
    const stopRel = (e)=>{
        e.preventDefault()
    }
  return (
    <>
      <Container>
        <h1 className="font-DM font-bold text-[49px] lg:py-[30px] text-center md:text-left">Login</h1>
        <div className="md:w-[644px]">
          <p className="font-DM text-[16px] text-[#767676] mt-[40px] lg:mt-[123px] lg:py-[50px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <hr />
        <h2 className="font-DM font-bold text-[49px] py-[30px] text-center md:text-left">
          Returning Customer
        </h2>

        <form className="md:py-[50px] text-center md:text-left" action="">
            <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">

          <div className="md:w-[580px] mb-[40px] md:mb-0">
            <label htmlFor="" className="font-DM font-bold text-[16px]">Email address</label>
            <br />
            <input type="email" className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left" placeholder="Enter Your Email" />
          </div>

          <div className="md:w-[580px]">
            <label htmlFor="" className="font-DM font-bold text-[16px]">Password</label>
            <br />
            <input type="password"  className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left" placeholder="Enter the Password" />
          </div>
            </div>
          <button onClick={stopRel} className="py-[20px] px-[85px] border-2 font-DM font-bold text-[14px] hover:bg-black hover:text-white cursor-pointer transition-all duration-300 mb-[40px] md:mb-0">Log In</button>
        </form>
        <hr />
        <h2 className="font-DM font-bold text-[49px] pt-[40px] text-center md:text-left">New Customer?</h2>
        <div className="lg:w-[644px]">
          <p className="font-DM text-[16px] text-[#767676] py-[40px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="text-center md:text-left">
            <Link to={"/SignUp"}><button className="py-[20px] px-[85px] border-2 font-DM font-bold text-[14px] hover:bg-black hover:text-white cursor-pointer transition-all duration-300 mb-[40px]">Sign Up</button></Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
