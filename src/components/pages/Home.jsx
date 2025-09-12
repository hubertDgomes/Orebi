import React, { useState , CSSProperties, useEffect  } from 'react'
import Header from '../layouts/Header'
import Search from '../layouts/Search'
import ShowCase from '../layouts/ShowCase'
import NewArrival from '../layouts/NewArrival'
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { PropagateLoader } from "react-spinners";
const Home = () => {
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
    setLoading(false)
  },2000)
  return () => clearTimeout(timer)
  },[])

  // if(loading){
  //   return(
  //     <div className="h-[400px] flex justify-center items-center">
  //       <PropagateLoader />
  //       <p>Its just testing purpose</p>
  //     </div>
  //   )
  // }

  return (
    <>
    <div className="">
      <Search/>
    <ShowCase/>
    <NewArrival/>
    <div className="fixed bottom-10 right-8 border-1 p-2 rounded-[10px] hover:bg-black hover:text-white hover:rounded-[30px] transition-all duration-300 hidden sm:block">
      <Link to={"/Cart"}><button><IoCartSharp className="text-[50px] cursor-pointer text-[50px]" /></button></Link>
    </div>
    </div>
    </>
  )
}

export default Home
