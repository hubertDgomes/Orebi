import React from 'react'
import Header from '../layouts/Header'
import Search from '../layouts/Search'
import ShowCase from '../layouts/ShowCase'
import NewArrival from '../layouts/NewArrival'
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Search/>
    <ShowCase/>
    <NewArrival/>
    <div className="fixed bottom-10 right-8 border-1 p-2 rounded-[10px] hover:bg-black hover:text-white hover:rounded-[30px] transition-all duration-300 hidden sm:block">
      <Link to={"/Cart"}><button><IoCartSharp className="text-[50px] cursor-pointer text-[50px]" /></button></Link>
    </div>
    </>
  )
}

export default Home
