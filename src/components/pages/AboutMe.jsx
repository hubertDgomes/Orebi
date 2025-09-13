import React from "react";
import Container from "../Container";

const AboutMe = () => {
  return (
    <>
      <Container>
        <h1 className="font-DM font-bold text-[39px] mb-[80px] lg:text-left text-center">My Account</h1>

        <div className="flex flex-col md:flex-row gap-x-[50px] lg:py-[100px]">
          <div className="w-full lg:w-[234px] transition-all duration-400">
            <ul className="flex flex-col gap-y-[30px] font-DM text-[#767676] text-[16px] text-center lg:text-left">
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Dashboard
              </li>
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Others
              </li>
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Donwloads
              </li>
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Addresses
              </li>
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Account details
              </li>
              <li className="border-b-1 pb-[20px] hover:text-black hover:font-bold cursor-pointer transition-all duration-300">
                Logout
              </li>
            </ul>
          </div>
          <div className="lg:w-[918px] font-DM text-[16px] text-[#767676] text-center lg:text-left py-[40px]">
            <p className="pb-[50px]">Hello admin (not admin? Log out)</p>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
