import React, { useRef } from 'react'
import Container from '../Container'

const Contact = () => {
    const email = useRef()
    const handle = (e)=>{
        e.preventDefault()
        const show = email.current.value;
        console.log(show);
        
    }
  return (
    <Container>
        <h1 className='font-DM font-bold text-[49px] py-[30px] md:py-[50px] text-center md:text-left'>Contacts</h1>
        <div className="md:py-[50px] py-[20px]">
            <p className='font-DM font-bold text-[40px] text-center md:text-left md:mx-[30px]'>Fill up a Form</p>

            <form action="" onSubmit={handle} className='text-center md:text-left md:mx-[30px]'>
                <label htmlFor="" className='font-DM font-bold text-[16px]'>Name</label>
                <br />
                <input type="text" placeholder='Your Name here' className='placeholder:text-[14px] placeholder:font-DM border-b-1 pr-[100px] lg:pr-[800px] border-[#F0F0F0] focus:outline-0 pb-[10px]' />

                <br />
                <br/>
                <br/>

                <label htmlFor="" className='font-DM font-bold text-[16px]'>Email</label>
                <br />
                <input type="email" ref={email} placeholder='Your email here' className='placeholder:text-[14px] placeholder:font-DM border-b-1 pr-[100px] lg:pr-[800px] border-[#F0F0F0] focus:outline-0 pb-[10px]' />


                <br />
                <br />
                <br />

                <label htmlFor="" className='font-DM font-bold text-[16px]'>Message</label>
                <br />
                <input type="text" placeholder='Your message here' className='placeholder:text-[14px] placeholder:font-DM border-b-1 pr-[100px] lg:pr-[800px] border-[#F0F0F0] focus:outline-0 pb-[10px]' />
                    <br />
                    <br />
                    <br />
                <button className='py-[20px] px-[85px] bg-black text-white font-DM font-bold'>Post</button>

            </form>
        </div>
    </Container>
  )
}

export default Contact
