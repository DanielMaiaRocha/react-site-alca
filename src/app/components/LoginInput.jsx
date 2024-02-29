"use client"
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const LoginInput = ({ name, label, type, required, ...props }) => {
  return (
    <div className='flex flex-col'>
      <div className='capitalize text-2xl text-zinc-500 font-custonFont3 font-semibold'>
        {label || name} <span className='text-red-500'>{required && '*'}</span>
      </div>
      <Field
        name={name}
        type={type}
        {...props}
        className='p-3 rounded-md border-zinc-400 border border-solid outline-0 focus:border-[#17a2b8]'
      />
      <div className='text-red-500 text-md mt-1'>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default LoginInput;
