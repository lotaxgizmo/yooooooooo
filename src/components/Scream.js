import React from 'react'
import screamloudyooo from "../assets/screamloudyooo.svg"
import yoootext from "../assets/yoootext.png"
import yoootwitter from "../assets/yoootwitter.svg"
import yoootelegram from "../assets/yoootelegram.svg"
import yoofacemain from "../assets/yoofacemain.svg"

function Scream() {
    return (
        <div className='flex flex-col items-center justify-center w-full lg:py-32 relative'>
            <div className="top flex flex-col w-full items-center justify-center relative">
                <img src={screamloudyooo} alt="" className="" />
                <img src={yoofacemain} alt="" className="lg:absolute right-0 bottom-0 w-60" />

            </div>
            <img src={yoootext} alt="" className="my-4 w-[1300px] lg:rotate-6" />

            <div className="btn flex lg:flex-row flex-col lg:rotate-6">
                <img src={yoootwitter} alt="" className="m-2" />
                <img src={yoootelegram} alt="" className="m-2" />
            </div>
        </div>

    )
}

export default Scream