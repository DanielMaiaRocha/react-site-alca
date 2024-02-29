"use client"
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import LoginInput from './LoginInput'
import ButtonLogin from './ButtonLogin'
import Image from 'next/image'
import Link from 'next/link'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

const CadastroForm = () => {
  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)

  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password:"",
    confirmPassword:"",
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name field required"),
    email: Yup.string()
      .email("E-mail incorrect")
      .required("E-mail field required"),
    password: Yup.string().required("Password field required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must mach').required('Confirm password field required'),
  })

  async function handleSubmit (values, { resetForm }) {
    setFormSubmitting(true)
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }),
      });
      
      const result = await response.json();
      console.log(result)
    } catch (error) {
      setFormSubmitting(false)
      renderError("Fail to create an account, try again latter!")
    }

      function renderError(msg) {
        setError(msg)
        setTimeout(() => {
          setError("");
      }, 3000)
    }
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
            <LoginInput name="name" placeholder="Ex: Quentin Tarantino" required />
            <LoginInput name="email" type="email" placeholder="Your best e-mail" required />
            <LoginInput name="password" type="password" placeholder="A password that you will remember!" required />
            <LoginInput name="confirmPassword" type="password" placeholder="Confirm your password" label="Confirm Password" required />
            <ButtonLogin
              type="submit"
              text={isFormSubmitting ? "Loading..." : "Register"}
              disabled={isFormSubmitting}
              className="bg-[#17a2b8] rounded-md text-white font-customFont3 text-2xl font-bold w-full p-2"
            />
            {!values.name && !values.password && !values.confirmPassword && error && (
              <span className='text-red-500 text-md text-center'>{error}</span>
            )}
            <span className='text-lg text-zinc-500'>Have an account?
              <strong className='text-zinc-700'>
                <Link href="/login"> Login!</Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default CadastroForm;
