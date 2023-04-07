import React from 'react'
import CarouseData from '../Helpers/CarouseData'
const Carousel = () => {
    return (
        <div>
            {CarouseData.map((slide,index)=>{
                <img src={slide.img} alt="" />
            })}
        </div>
    )
}

export default Carousel