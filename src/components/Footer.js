import React from 'react'
import reservedyooo from "../assets/reservedyooo.svg"
import yoofacemain from "../assets/yoofacemain.svg"

function Footer() {
    return (
        <div className='flex flex-col items-center justify-center w-full lg:pt-32 relative'>
            <img src={yoofacemain} alt="" className='w-40' />
            <img src={reservedyooo} alt="" />
        </div>
    )
}

export default Footer