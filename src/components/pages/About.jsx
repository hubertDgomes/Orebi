import React from 'react'
import Container from '../Container'
import Images from '../Images'
import about1 from '/src/assets/about1.png'
import about2 from '/src/assets/about2.png'

const About = () => {
  return (
    <>
    <Container>
        <h1 className='font-DM font-bold text-[49px] py-[20px]'>About</h1>
        <div className="flex justify-between py-[30px]">
            <Images className={"w-[200px] md:w-[400px] lg:w-[600px]"} src={about2}/>
            <Images className={"w-[200px] md:w-[400px] lg:w-[600px]"} src={about1}/>
        </div>
        <div className="lg:w-[1602px] md:w-[700px] w-[400px] py-[30px] m-auto">
            <p className='font-DM lg:text-[40px] text-[25px] text-center md:text-left'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        </div>

        <div className="flex justify-between py-[70px] flex-col lg:flex-row text-center lg:text-left items-center">
            <div className="md:w-[506px] mb-[30px] md:mb-0">
                <h3 className='font-DM font-bold text-[25px] mb-[20px]'>Our Vision</h3>
                <p className='font-DM text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="md:w-[506px] mb-[30px] md:mb-0">
                <h3 className='font-DM font-bold text-[25px] mb-[20px]'>Our Story</h3>
                <p className='font-DM text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="md:w-[506px] mb-[30px] md:mb-0">
                <h3 className='font-DM font-bold text-[25px] mb-[20px]'>Our Brands</h3>
                <p className='font-DM text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default About
