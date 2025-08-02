"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    const handlegithub = () => {
        window.open("https://github.com/WildhanCahya", "_blank")
    }

    const handleIg = () => {
        window.open("localhost:3000", "_blank")
    }

    const handlegiLin = () => {
        window.open("localhost:3000", "_blank")
    }

    return (
        <>
        <div className="flex flex-col border-t border-white h-[200px] md:h-[250px] justify-between items-center mt-10">
            <div className='mt-10 flex flex-col items-center'>
                <h1 className="font-bold text-white text-2xl" id="titleFooter">MyAnim™</h1>
                <div className='flex justify-center gap-4 mt-2'>
                    <FontAwesomeIcon icon={faGithub} color='white' size='2xl' className='cursor-pointer' onClick={handlegithub}/>
                    <FontAwesomeIcon icon={faLinkedin} color='white' size='2xl' className='cursor-pointer'/>
                    <FontAwesomeIcon icon={faInstagram} color='white' size='2xl' className='cursor-pointer'/>
                </div>
            </div>
                <div className='flex justify-between gap-3 flex-col items-center w-full p-3 md:flex-row'>
                    <h4 className='font-bold text-white text-2xl'>Always Support Us!</h4>
                    <p className='font-bold text-white text-sm md:text-md'>© {year} MyAnim™, All rights reserved.</p>
                </div>
        </div>
        </>
    )
}

export default Footer