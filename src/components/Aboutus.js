import React from 'react'
import sideyooo from "../assets/sideyooo.svg"
import textyoo2 from "../assets/textyoo2.svg"
import yoobox2 from "../assets/yoobox2.svg"
import yooobox4 from "../assets/yooobox4.svg"
import yoooboxx3 from "../assets/yoooboxx3.svg"
import aboutusyooo from "../assets/aboutusyooo.svg"
import louderyooo from "../assets/louderyooo.png"
import yooobox1 from "../assets/yooobox1.svg"

function Aboutus() {
    return (
        <div className='w-full flex flex-col items-center justify-center px-10'>
            <img src={aboutusyooo} alt="" />

            <div className="trio flex flex-col lg:flex-row w-full items-center justify-between">
                <div className="flex flex-col 1">
                    <img src={yooobox1} alt="" />
                    <img src={louderyooo} alt="" />
                    <img src={yoooboxx3} alt="" />
                </div>
                <div className="flex flex-col 2">
                    <img src={textyoo2} alt="" className='my-2' />
                    <img src={yoobox2} alt="" />
                    <img src={yooobox4} alt="" />
                </div>
                <div className="flex flex-col 3">
                    <img src={sideyooo} alt="" className='-rotate-90 lg:rotate-0 w-16 lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Aboutus