import React from 'react'
import contractyooo from "../assets/contractyooo.svg"
import jointelegramyooo from "../assets/jointelegramyooo.svg"
import buyyooo from "../assets/buyyooo.svg"
import scrawnyyooo from "../assets/scrawnyyooo.svg"
import yoooroll from "../assets/yoooroll.svg"
import roll2yooo from "../assets/roll2yooo.svg"
import yoofacemain from "../assets/yoofacemain.svg"
import yoooguymouth from "../assets/yoooguymouth.svg"
import yoooskull from "../assets/yoooskull.svg"
import yooohero from "../assets/yooohero.svg"
import yoooglass from "../assets/yoooglass.svg"
import glasssmall from "../assets/glasssmall.svg"

function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-full lg:pt-32 relative'>
            <img src={yooohero} alt="" className='lg:hidden flex lg:w-[700px] mb-s10' />
            <img src={yoofacemain} alt="" className='lg:hidden flex w-80 -mt-10   ' />
            {/* <img src={scrawnyyooo} alt="" className='flex lg:hidden  w-96 absolute top-20  lg:-bottom-20 ' /> */}

            <div className="heroo flex flex-row justify-center w-full relative">
                <img src={yoooguymouth} alt="" className='w-40 lg:w-96 absolute left-1 -top-10 lg:top-1' />
                <img src={yooohero} alt="" className='lg:w-[700px] mb-10' />
                <img src={yoofacemain} alt="" className='hidden lg:flex w-96 absolute right-1 top-1 ' />
                <img src={yoooskull} alt="" className='hidden lg:flex w-96 absolute -top-32 ' />
                <img src={glasssmall} alt="" className='w-9s6 absolute lg:left-96 top-20 left-0 lg:-top-32 ' />
                <img src={scrawnyyooo} alt="" className='hidden lg:flex  w-96 absolute  lg:-bottom-20 ' />
            </div>
            <img src={roll2yooo} alt="" className='w-full' />
            <div className="tg relative w-full flex flex-col lg:flex-row justify-center items-center">
                <img src={yoooglass} alt="" className='hidden lg:flex w-60 absolute left-0 top-0 -mt-32' />

                <div className="btns flex flex-col lg:flex-row">
                    <img src={jointelegramyooo} alt="" className=' w-96 my-2' />
                    <img src={buyyooo} alt="" className=' w-96 my-2' />
                </div>

                <img src={contractyooo} alt="" className='w-60 lg:absolute right-0 top-0' />
            </div>
            <img src={yoooroll} alt="" className='w-full' />
        </div>
    )
}

export default Home