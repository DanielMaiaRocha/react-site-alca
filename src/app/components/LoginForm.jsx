"use client"
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import LoginInput from './LoginInput'
import ButtonLogin from './ButtonLogin'
import Image from 'next/image'
import Link from 'next/link'
import * as Yup from 'yup'
import { signIn, useSession } from 'next-auth/react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from 'next/navigation'
import connect from '../utils/db'

connect();

const LoginForm = () => {
  
  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/mainPage");
    }
  }, [status, router]);
  
  if (status !== "unauthenticated") {
    return null;
  }

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
                text={isFormSubmitting ? <AiOutlineLoading3Quarters className="animate-spin mr-2 w-9 h-9 font-bold" /> : "Login" }
                className="bg-[#17a2b8] rounded-md text-white font-customFont3 text-2xl font-bold w-full p-2 flex justify-center items-center"
            />  
            {!values.email && !values.password && error && (
              <span className='text-red-500 text-lg text-center'>{error}</span>
            )}
            <span className='text-lg text-zinc-500'>Dont have an account?
              <strong className='text-zinc-700'>
                <Link href="/register"> Sign up!</Link>
              </strong>
            </span>
            <div>
              <div className="flex items-center mt-4">
                <div className="w-full border-t border-zinc-300"></div>
                  <span className="mx-4 text-md text-zinc-700 font-semibold font-customFont3">OR</span>
                <div className="w-full border-t border-zinc-300"></div> 
              </div>
              <span className='flex flex-col justify-center items-center mt-2 font-customFont3 font-bold text-lg text-zinc-700'>Sign-In with</span>
              <div className='flex justify-center items-center mt-4 gap-10'>
                <button onClick={() => signIn('google')}>
                  <Image 
                    src={'/images/google.svg'}
                    alt='/'
                    width={46}
                    height={46}
                  />
                </button>
                <button>
                  <Image 
                    src={'/images/instagram.svg'}
                    alt='/'
                    width={46}
                    height={46}
                  />
                </button>
                <button>
                  <Image 
                    src={'/images/linkedin.svg'}
                    alt='/'
                    width={46}
                    height={46}
                  />
                </button>
              </div>          
            </div>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default LoginForm;
