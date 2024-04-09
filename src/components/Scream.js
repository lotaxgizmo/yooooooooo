import React from 'react'
import screamloudyooo from "../assets/screamloudyooo.svg"
import yoootext from "../assets/yoootext.png"
import yoootwitter from "../assets/yoootwitter.svg"
import yoootelegram from "../assets/yoootelegram.svg"
import yoofacemain from "../assets/yoofacemain.svg"

function Scream() {
    return (
        <div className='flex flex-col items-center justify-center w-full px-4 lg:py-32 relative'>
            <div className="top flex flex-col w-full items-center justify-center relative">
                <img src={screamloudyooo} alt="" className="" />
                <img src={yoofacemain} alt="" className="lg:absolute right-0 bottom-0 w-60" />

            </div>
            {/* <img src={yoootext} alt="" className="my-4 w-[1300px] lg:rotate-6" /> */}
            <div className="text my-4 lg:w-[1300px] lg:rotate-6">
                <p className='text-center text-3xl lg:text-5xl'>
                    YOOO Brand's unique approach to encouraging authentic self-expression through screaming has resonated with many consumers seeking a brand that values raw emotion and unfiltered communication. By promoting the idea of screaming loud and proud, YOOO has created a community of individuals who find catharsis and empowerment in expressing themselves without restraint. This focus on embracing one's voice and individuality sets YOOO apart in the competitive landscape of branding, appealing to those who value boldness and authenticity in their interactions with brands.
                </p>
            </div>
            <div className="btn flex lg:flex-row flex-col lg:rotate-6">
                <img src={yoootwitter} alt="" className="m-2" />
                <img src={yoootelegram} alt="" className="m-2" />
            </div>
        </div>

    )
}

export default Scream