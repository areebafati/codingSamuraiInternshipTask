import React from 'react'
import pic from "../../public/pic2.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2x1 container-mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>

       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 '>
       <span className='text-xl'>Welcome to my Page</span>
       <div className='flex space-x-1 text-2xl md:text-4xl'>  
       <h1>Hi, I am a </h1>
       {/* <span className='text-red-800 font-bold'>Developer</span> */}
       <ReactTyped
          className='text-red-800 font-bold'
        //   typedRef={setTyped}
          strings={["Developer!","Programmer"  ,"Coder!"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
       </div>
       <br />
       <p className='text-sm md:text-md text-justify'>
       I am Areeba Fatima, a front-end developer specializing in React.js. I have built various projects, including a coffee website, a calligraphy website etc. I am Passionate about creating and engaging  static and dynamic user interfaces.</p>
        <br />
        {/* social media icon */}
       <div className='flex flex-col items-center  md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2 '>
            <h1 className='font-bold  '>Available On</h1>
      <ul className='flex space-x-5  '>
           <li>
            <a href="https://www.facebook.com/login.php/" target='blank'>
           <FaFacebookSquare className='text-2xl cursor-pointer hover:scale-110' />
             </a>
           </li>

           <li>
            <a href="https://www.linkedin.com/feed/" target='blank'>
           <FaLinkedin className='text-2xl cursor-pointer hover:scale-110' />
             </a>
           </li>

           <li>
            <a href="https://www.youtube.com/" target='blank'>
           <FaYoutube className='text-2xl cursor-pointer hover:scale-110' />
            </a>
           </li>

           <li>
           <a href="https://www.instagram.com/accounts/login/?hl=en" target='blank'>     
           <FaInstagram className='text-2xl cursor-pointer hover:scale-110' />
            </a>
           </li>
      </ul>
        </div>

        <div className='space-y-2'>
        <h1 className='font-bold '>Currently Working On</h1>
      <div className='flex space-x-5 '>
      <FaReact  className='text-xl text-center md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] '  />
      <SiExpress className='text-xl text-center md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
      <RiNodejsLine className='text-xl text-center md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
      <SiMongodb className='text-xl text-center md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
           
      </div>

        </div>
       </div>
       
       </div>
    

       <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1' >
       <img src={pic}  className="rounded-full md:w-[300px] h-[300px]" alt="" />
       
       </div>
       </div>
    </div>

    <hr /></>
 
    
  )
}

export default Home