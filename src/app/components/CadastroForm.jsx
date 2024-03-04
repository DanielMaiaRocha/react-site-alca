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
    passwordMatch:"",
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name field required"),
    email: Yup.string()
      .email("E-mail incorrect")
      .required("E-mail field required"),
    password: Yup.string()
    .required("Password field required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Weak password. Must have a Capital letter, Lower case letter, A number, A special caracther and minimum 8 digits "
    ),
    passwordMatch: Yup.string()
    .oneOf([Yup.ref('password'), null], 'The password doesent matches ')
    .required('Password confirmation is required'),
  })

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    
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
        }),
      });
  
      console.log("Response:", response);
      const result = await response.json();
      console.log("Result:", result);
  
      if (response.status === 201) {
        alert(result.message);
        router.push("/login");
      } else {
        renderError(result.message);
        resetForm();
      }
  
      setFormSubmitting(false);
    } catch (error) {
      console.error("Error:", error);
      setFormSubmitting(false);
      renderError("Error creating account, please try again later!");
    }
  }
  

  function renderError(msg) {
    setError(msg);
    setTimeout(() => {
      setError("");
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
            className='flex flex-col gap-2 p-4 rounded-md border border-zinc-300 max-w-[500px] md:w-full md:h-auto mt-20 bg-white'
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
            <LoginInput name="passwordMatch" type="password" label="Confirm your password" placeholder="Confirm your passaword" required />
            <ButtonLogin
              type="submit"
              text={isFormSubmitting ? "Loading..." : "Register"}
              disabled={isFormSubmitting}
              className="bg-[#17a2b8] rounded-md text-white font-customFont3 text-2xl font-bold w-full p-2 "
            />
            {!values.name && !values.password && !values.passwordMatch && error && (
              <span className='text-red-500 text-md text-center'>{error}</span>
            )}
            <span className='text-lg text-zinc-500'>Have an account?
              <strong className='text-zinc-700'>
                <Link href="/login"> Login!</Link>
              </strong>
            </span>
            <div>
              <div className="flex items-center mt-4">
                <div className="w-full border-t border-zinc-300"></div>
                  <span className="mx-4 text-md text-zinc-700 font-semibold font-customFont3">OR</span>
                <div className="w-full border-t border-zinc-300"></div> 
              </div>
              <span className='flex flex-col justify-center items-center mt-2 font-customFont3 font-bold text-lg text-zinc-700'>Sign-up with</span>             
            </div>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default CadastroForm;