"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import LoginInput from './LoginInput'
import ButtonLogin from './ButtonLogin'
import Image from 'next/image'
import Link from 'next/link'
import * as Yup from 'yup'

const LoginForm = () => {

  const initialValues = {
    email: "",
    password:"",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("E-mail incorrect")
      .required("E-mail field required"),
    password: Yup.string().required("Password field required")
  })

  async function handdleSubmit () {
    
  }

  return (
    <main className='min-h-screen flex flex-grow items-center justify-center'>
      <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handdleSubmit}
      >
        {({ values }) => (
          <Form
            noValidate
            className='flex flex-col gap-2 p-4 rounded-md border border-zinc-300 max-w-[500px]  w-full h-auto bg-white'
          >
            <div className='flex items-center justify-center'>
              <Image
                src={"/images/logodubsol.png"}
                alt='/'
                width={300}
                height={300}
              />
            </div>
            <LoginInput name="email" type="email" placeholder="Your e-mail" required />
            <LoginInput name="password" type="password" placeholder="Your password" required />
            <ButtonLogin
              type="submit"
              text="Login"
              className="bg-[#17a2b8] rounded-md text-white font-customFont3 text-2xl font-bold w-full p-2"
            />
            <span className='text-lg text-zinc-500'>Dont have an account?
              <strong className='text-zinc-700'>
                <Link href="/register"> Sign up!</Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default LoginForm;
