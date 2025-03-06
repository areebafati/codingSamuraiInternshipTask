import React from 'react';
import axios from 'axios';
import { useForm} from "react-hook-form";
import toast from "react-hot-toast";
// get form.io
function Contact() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async(data) => {
        const userInfo= {
            name:data.name,
            email:data.email,
            message:data.message

        };
        try{
            await axios.post("https://getform.io/f/aqokelqa",userInfo);
            toast.success("Your message has been sent"); 

        }
        catch(error){
            console.log(error);
            toast.error("something went wrong!");
        }
    }
   
   
  return <>
  <div  name="Contact" className='max-w-screen-2x1 container-mx-auto px-4 md:px-20 mt-10 my-16'>
    <h1 className='font-bold text-3xl mb-4'>Contact me</h1>
    <span>Please fill out the form below to contact me</span>
    <div className='flex flex-col items-center justify-center mt-5'>
        <form
         onSubmit={handleSubmit(onSubmit)}
        
        // action="https://getform.io/f/aqokelqa" method="POST"
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-bold mb-4'>Send Your Message.</h1>
            <div className='flex flex-col mb-4 '>
                <label className='block text-black-600'>Full Name</label>
                <input className="shadow rounded-lg  appearance-none border-rounded text-black-400 leading-white focus:shadow-outline"  {...register("name", { required: true })} id="name" name="name" type="text" placeholder='Enter your full name' />
                {errors.name && <span>This field is required</span>}
                {/* react hook form */}
            </div>

            <div className='flex flex-col mb-4 '>
                <label className='block text-black-600'>Email address</label>
                <input className="shadow rounded-lg  appearance-none border-rounded text-black-400 leading-white focus:shadow-outline" {...register("email", { required: true })}id="email" name="email"type="text" placeholder='Enter your email address' />
                {errors.email && <span>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4 '>
                <label className='block text-black-600'>Message</label>
                <textarea className="shadow rounded-lg  appearance-none border-rounded text-black-400 leading-white focus:shadow-outline" {...register("message", { required: true })} id="message" name="message" type="text" placeholder='Enter your Query' />
                {errors.message && <span>This field is required</span>}

            </div>
            <button className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700  hover:text-white hover:scale-115 duration-300'type='send'> Send</button>

            
        </form>
    </div>


  </div>
  </>
}

export default Contact

// react hot toast for not pop up