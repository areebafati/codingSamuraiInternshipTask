import React from 'react'
import python from "../../public/python.png"
import html from "../../public/html.png"
import css from "../../public/css.png"
import javascript from "../../public/js1.png"
import vscode from "../../public/vscode.jpeg"
import bootstrap from "../../public/bootstrap.jpeg"

function Experience() {
   const cardItem=[
          {
              id:1,
              logo:python,
              name:"Python"
          
          },
          {
              id:2,
              logo:html,
              name:"HTML"
          
          },
          {
              id:3,
              logo:css,
              name:"CSS"
          
          },
          {
              id:4,
              logo:javascript,
              name:"JavaScript"
          
          },
          {
              id:5,
              logo:vscode,
              name:"VScode"
          
          },
          {
              id:6,
              logo:bootstrap,
              name:"Bootstrap"
          
          },
  
      ]
    return (
      <div name="Experience" className='max-w-screen-2x1 container-mx-auto px-4 md:px-20 my-16'>
          <div>
              <h1 className='font-bold text-3xl mb-5'>Experience</h1>
              <p className=' '>I've more than 1 years of experiance in below technologies.</p>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                  {
                      cardItem.map(({id,logo,name})=>(
                          <div  className="flex flex-col items-center justide-center border-[2px] rounded-full md:height-[200px] md:w-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration" key={id}>
                              <img src={logo} className='w-[150px]  p rounded-full ' alt="" />
                              <div>
                                  <div >{name}</div>
                                 
                              </div>
                             
  
                          </div>
  
                      ))
                  }
  
              </div>
          </div>
          
      </div>
    )
  }
  
export default Experience