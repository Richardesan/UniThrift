import React, { useState } from 'react'
import Logo from "../../assets/EasyThrift.png"
import Thrift from "../../assets/Thrift.jpg"
import Form from './form'
import { Link } from 'react-router-dom'
const Login = () => {

  return (
    <div>

      <section className='flex h-screen items-start'>


        <img src={Thrift} alt={Thrift} className='max-w-[50vw] object-cover object-top h-full max-lg:hidden' />
        <article className='flex-1 pt-40'>
          <Link to='/'>
          <img src={Logo} alt={Logo} className='w-36 absolute top-7 max-md:left-5' />
          </Link>
          <p className='text-3xl font-bold mb-5 text-center'>Sign in          </p>
          <Form/>
        </article>
      </section>
    </div>
  )
}

export default Login