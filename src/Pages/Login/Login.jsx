import React, { useState } from 'react'
import Logo from "../../assets/EasyThrift.png"
import Thrift from "../../assets/Thrift.jpg"

import Form from './component/form'
const Login = () => {

  return (
    <div>

      <section className='flex h-screen items-start'>


        <img src={Thrift} alt={Thrift} className='max-w-[50vw] object-cover object-top h-full max-lg:hidden' />
        <article className='flex-1 pt-40'>
          <img src={Logo} alt={Logo} className='w-36 absolute top-7 max-md:left-5' />
          <p className='text-xl text-center'>Welcome Back!</p>
          <Form/>
        </article>
      </section>
    </div>
  )
}

export default Login