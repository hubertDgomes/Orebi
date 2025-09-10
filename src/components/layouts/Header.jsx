import React from 'react'
import Container from '../Container'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Container className={"py-[30px]"}>
        <div className="flex items-center">
            <Images src={Logo}/>
            <div className="m-auto">
                <ul className='flex gap-x-[40px] font-DM text-[16px] font-semibold'>
                    <Link to={"/"}><li>Home</li></Link>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Journal</li>
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Header
