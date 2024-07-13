import React, { useState } from "react";
import Form from "./component/form";
import Thrift3 from "../../assets/Thrift4.jpg";
import Logo from "../../assets/EasyThrift.png";
import GoogleIcon from "../../assets/googles.svg";
const Register = () => {
  return (
    <div>
      <section className="flex h-screen items-start">
        <img
          src={Thrift3}
          alt={Thrift3}
          className="w-[50vw] object-cover object-top h-full max-lg:hidden"
        />
        <article className="flex-1 pt-40">
          <img
            src={Logo}
            alt={Logo}
            className="w-36 absolute top-7 max-md:left-5"
          />
          <img src={GoogleIcon} />
          <p className="text-xl text-center">Welcome Back!</p>
          <Form />
        </article>
      </section>
    </div>
  );
};

export default Register;
