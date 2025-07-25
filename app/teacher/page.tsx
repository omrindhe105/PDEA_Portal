"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function teacher() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
        <div className="relative h-full w-full "> 
        
    <div className='w-screen h-screen flex justify-center items-center'>
    <form className='flex w-1/3 flex-col border bg-gray-100 backdrop-blur-sm bg-opacity-5 gap-5 p-5 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>
    <p className='text-white text-center font-bold text-2xl'>Login/Register For Teacher and Admin</p>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-1 h-[1px] w-full"/>
        <p>First Name</p>
      <input className='rounded-md p-2' type="text" placeholder="Tyler" {...register("First name", {required: true, maxLength: 80})} />
      <p>Last Name</p>
      <input className='rounded-md p-2' type="text" placeholder="Durden" {...register("Last name", {required: true, maxLength: 100})} />
      <p>Email</p>
      <input className='rounded-md p-2' type="text" placeholder="example@abc.com" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <p>Mobile Number</p>
      <input className='rounded-md p-2' type="tel" placeholder="10 Digit Mobile Number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <p>Branch</p>
      <select className='rounded-md p-2' {...register("Branch", { required: true })}>
        <option value="Information Technology">Information Technology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mechanical">Mechanical</option>
        <option value="AI/DS">AI/DS</option>
        <option value="MCA">MCA</option>
      </select>
    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-1 h-[1px] w-full" />
      <input className='bg-purple-900 text-xl text-bold h-10 rounded-lg cursor-pointer' type="submit" />
    </form>

    </div>
    </div>
    
  );
}
