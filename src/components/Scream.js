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
                    AN IMAGE DEPICTING A MAN IN A STATE OF SHOCK & DISBELIEF, GRABBING HIS HEAD WITH BOTH HANDS AND LOOKING UP IN AWE, WITH THE WORD 'YOOO' BELOW HIM. THE MAN'S ARMS ARE RAISED ABOVE HIS HEAD, AND HIS HANDS ARE GRASPING AT HIS FACE. THE IMAGE IS RENDERED IN BLACK AND WHITE, CREATING A STARK AND STRIKING VISUAL. THE OVERALL ATMOSPHERE IS ONE OF SURPRISE, AWE AND EXCITEMENT.
                </p>
            </div>
            <div className="btn flex lg:flex-row flex-col lg:rotate-6">
                <a href="https://x.com/yooooooooosol" target="_blank" rel="noopener noreferrer">
                    <img src={yoootwitter} alt="Twitter" className="m-2" />
                </a>
                <a href="https://t.me/yooooooooosol" target="_blank" rel="noopener noreferrer">
                    <img src={yoootelegram} alt="Telegram" className="m-2" />
                </a>
            </div>
        </div>

    )
}

export default Scream