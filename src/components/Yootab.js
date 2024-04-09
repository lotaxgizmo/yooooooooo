import React from 'react'
import starboxyooo from "../assets/starboxyooo.svg"
import yoooboxlast from "../assets/yoooboxlast.png"
import textboxlast from "../assets/textboxlast.png"
import boxyoooface from "../assets/boxyoooface.svg"
import crazybox from "../assets/crazybox.png"
import crazybox2 from "../assets/crazybox2.png"
import whitebuy from "../assets/whitebuy.png"
import textbottom from "../assets/textbottom.png"
import texttop from "../assets/texttop.png"

function Yootab() {
    return (
        <div className='w-full flex flex-col items-center justify-center px-4 lg:px-16'>
            {/* <img src={texttop} alt="" className='my-3 lg:hidden flex' /> */}
            <div className="text my-4 lg:w-[1300px] lg:rotate-6 lg:hidden flex">
                <p className='text-center text-3xl lg:text-5xl'>
                    Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum
                </p>
            </div>
            <div className="relative flex justify-center align-middle items-center">
                <img src={crazybox} alt="" className='hidden lg:flex' />
                <img src={crazybox2} alt="" className='lg:hidden flex' />
                <img src={whitebuy} alt="" className='hidden lg:flex absolute -right-4 w-auto hover:w-16 transition-all' />
            </div>
            <div className="text my-4 lg:w-[1300px] lg:rotate-6 lg:hidden flex">
                <p className='text-center text-3xl lg:text-5xl text-[#BE021C]'>
                    Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum
                </p>
            </div>
            {/* <img src={textbottom} alt="" className='my-3 lg:hidden flex' /> */}
        </div>
    )
}

export default Yootab