import React from 'react'
import tokenomicsyooo from "../assets/tokenomicsyooo.png"
import yoootaxes from "../assets/yoootaxes.svg"
import yooosupply from "../assets/yooosupply.svg"
import yoooliq from "../assets/yoooliq.svg"

function Tokenomics() {
    return (
        <div className='w-full flex flex-col items-center justify-center px-2'>
            <img src={tokenomicsyooo} alt="" />
            <div className="tabs flex flex-col lg:flex-row justify-between">
                <img src={yoootaxes} alt="" />
                <img src={yooosupply} alt="" />
                <img src={yoooliq} alt="" />
            </div>
        </div>
    )
}

export default Tokenomics