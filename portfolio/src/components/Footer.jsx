import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return <>
  <hr />
  <footer className='py-12'>
    <div className='max-w-screen-2x1 container-mx-auto px-4 md:px-20 mt-10'>
        <div className='flex flex-col items-center justify-center '>
          <div className='flex space-x-4'>
            <FaFacebookSquare size={24}/>
            <FaLinkedin size={24}/>
            <FaInstagram size={24}/>
            <FaTwitter  size={24}/>


        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col align-items-center '>
            <p className='text-sm text-center '>
                &copy;2024 Your Company. All rights reserved.
            </p>
            <p className='text-sm text-center '>Supportive Partner ❤️ Areeba</p>
          


         </div>
        </div>

    </div > 
  </footer>
 
  </>
}

export default Footer