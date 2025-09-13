import React, { useEffect, useState } from "react";
import Container from "../Container";
import { data } from "react-router-dom";

const SignUp = () => {
  const [division, setDivision] = useState([]);
  const [select, setSelect] = useState("");
  useEffect(() => {
    fetch("/src/features/division.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDivision(data);
      });
  }, []);
  //   console.log(select);

  const district = select ? division.division[select] : [];
  console.log(district);

  return (
    <>
      <Container>
        <h1 className="font-DM font-bold text-[49px] lg:py-[30px] text-center md:text-left">
          Sign up
        </h1>
        <div className="md:w-[644px]">
          <p className="font-DM text-[16px] text-[#767676] mt-[40px] lg:mt-[123px] lg:py-[50px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <hr />
        <h2 className="font-DM font-bold text-[49px] py-[30px] text-center md:text-left">
          Your Personal Details
        </h2>

        <form className="md:py-[50px] text-center md:text-left" action="">
          <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">
            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                First Name
              </label>
              <br />
              <input
                type="text"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter Your First Name"
              />
            </div>

            <div className="md:w-[580px]">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Last Name
              </label>
              <br />
              <input
                type="text"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter your Last name"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">
            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Email address
              </label>
              <br />
              <input
                type="email"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="md:w-[580px]">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Telephone
              </label>
              <br />
              <input
                type="tel"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter the Number"
              />
            </div>
          </div>
          {/* <button className="py-[20px] px-[85px] border-2 font-DM font-bold text-[14px] hover:bg-black hover:text-white cursor-pointer transition-all duration-300 mb-[40px] md:mb-0">
            Log In
          </button> */}
          <hr />
          <h2 className="font-DM font-bold text-[49px] py-[30px] text-center md:text-left">
            New Customer
          </h2>
          <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">
            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Address 1
              </label>
              <br />
              <input
                type="text"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter Your First Name"
              />
            </div>

            <div className="md:w-[580px]">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Address 2
              </label>
              <br />
              <input
                type="text"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter your Last name"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">
            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                City
              </label>
              <br />
              <input
                type="text"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter Your First Name"
              />
            </div>

            <div className="md:w-[580px]">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Post Code
              </label>
              <br />
              <input
                type="number"
                className="font-DM text-[16px] border-b-1 lg:w-[580px] w-[300px] focus:outline-0 mt-[20px] text-center md:text-left placeholder:text-center md:placeholder:text-left"
                placeholder="Enter your Last name"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-[40px] py-[60px]">
            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                Division
              </label>
              <br />
              <select
                name=""
                id=""
                className="lg:w-[580px] w-[300px] border-b-1 p-2 pt-[14px] text-center md:text-left font-DM font-bold focus:outline-0"
                onChange={(e) => setSelect(e.target.value)}
              >
                {division.division &&
                  Object.keys(division.division).map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </div>

            <div className="md:w-[580px] mb-[40px] md:mb-0">
              <label htmlFor="" className="font-DM font-bold text-[16px]">
                District
              </label>
              <br />
              <select
                name=""
                id=""
                className="lg:w-[580px] w-[300px] border-b-1 p-2 pt-[14px] text-center md:text-left font-DM font-bold focus:outline-0"
              >
                {district.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
