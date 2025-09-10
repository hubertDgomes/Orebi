import React from 'react'
import Container from '../Container'
import Images from '../Images'
import add1 from '/src/assets/add1.png'
import add2 from '/src/assets/add2.png'
import add3 from '/src/assets/add3.png'
const ShowCase = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <div className="flex justify-between gap-x-[40px]">
            <div className="">
                <Images src={add1}/>
            </div>
            <div className="flex flex-col justify-between">
                <Images src={add2}/>
                <Images src={add3}/>
            </div>
        </div>
    </Container>
    </>
  )
}

export default ShowCase
