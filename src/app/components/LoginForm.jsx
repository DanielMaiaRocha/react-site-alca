"use client"
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import LoginInput from './LoginInput'
import ButtonLogin from './ButtonLogin'
import Image from 'next/image'
import Link from 'next/link'
import * as Yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const router = useRouter()

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

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    
    try {
      signIn("Credentials", {...values, redirect: false }).then(
        ({error}) => {
          if(!error) {
            router.push("/mainPage");
          } else {
            renderError(error.replace("Error: ", ""))
            resetForm()
          }
          setFormSubmitting(false)
        }
      )
    } catch {
      setFormSubmitting(false);
      renderError("Error to login in your account, please try again later!");
    }
  }

  function renderError(msg) {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, 3000);
  }

  return (
    <main className='min-h-screen flex flex-grow items-center justify-center'>
      <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form
            noValidate
            className='flex flex-col gap-2 p-4 rounded-md border border-zinc-300 max-w-[500px]  md:w-full md:h-auto mt-20 bg-white'
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
              text={isFormSubmitting ? "Loading..." : "Entrar" }
              className="bg-[#17a2b8] rounded-md text-white font-customFont3 text-2xl font-bold w-full p-2"
            />
            {!values.email && !values.password && error && (
              <span className='text-red-500 text-lg text-center'>{error}</span>
            )}
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
