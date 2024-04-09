import React from 'react'
import dextools from "../assets/dextools.svg"
import telegram from "../assets/telegram.svg"
import twitter from "../assets/twitter.svg"

function Header() {
    return (
        <div className='Mullers mt-5'>
            <div className="two flex flex-row  justify-between">
                <div className="one border-black border-4 flex justify-between items-center align-middle ">
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-4xl mx-3'>ABOUT</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-4xl mx-3'>TOKENOMICS</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-4xl mx-3'>COMMUNITY</a>
                </div>
                <div className="one border-black border-4 flex justify-between items-center align-middle ">
                    <a href="#" target="_blank" rel="noopener noreferrer" className=' mx-3'>
                        <img src={dextools} alt="" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className=' mx-3'>
                        <img src={telegram} alt="" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className=' mx-3'>
                        <img src={twitter} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header