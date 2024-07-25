import React from "react";
import Animatedtext from "../../../components/Animations/AnimatedText";
import HeroImg from "../../../assets/heroImg.png"
const Hero = () => {
  return (
    <section className="h-[50vh] bg-secondaryCol text-white text-5xl font-black">
     <h1>This is the Dashboad</h1>
     <h1 className="flex"> <Animatedtext textAnimate={"insipirations"} secondText={"Ideas"} /></h1>
     <h1>Are needed rn</h1>
    </section>
   
  );
};

export default Hero;
