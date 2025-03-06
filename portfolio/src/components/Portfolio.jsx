import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.png"
import express1 from "../../public/express1.png"
import mongodb from "../../public/mongodb.png"
import react from "../../public/reactjs.png"
import node from "../../public/nodejs.jpeg"




function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:mongodb,
            name:"MongoDB",
            text: "i love mongo DB"
        
        },
        {
            id:2,
            logo:java,
            name:"Java",
            text: "I hate JAVA"
        
        },
        {
            id:3,
            logo:python,
            name:"Python",
            text: ""
        
        },
        {
            id:4,
            logo:express1,
            name:"Express",
            text: "",
        },
        {
            id:5,
            logo:react,
            name:"ReactJS",
            text: ""
        
        },
        {
            id:6,
            logo:node,
            name:"NodeJS",
            text:""
        
        },

    ]
  return (
    <div name="Portfolio" className='max-w-screen-2x1 container-mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='font-bold text-3xl mb-5'>Portfolio</h1>
            <span className='underline font-bold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map((item)=>(
                        <div  className="md:w-[300px] md:h=[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration" key={item.id}>
                            <img src={item.logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='font-bold text-xl mb-2 px-2'>{item.name}</div>
                                <p className='px-2 text-gray-700'>{item.text}</p>
                            </div>
                            <div className='px-6 py-4 justify-around space-x-3 '>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>

                            </div>

                        </div>

                    ))
                }

            </div>
        </div>
        
    </div>
  )
}

export default Portfolio