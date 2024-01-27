import React from "react";
import chair from "../../../assets/images/home.jpg";
import PrimaryButton from "../../Shared/PrimaryButton";
import appointment from "../../../assets/images/website1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
   <div className="pt-16">
    <div
    style={{
      background: `url(${appointment})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className=" w-full h-full "
  >
    <div className="">
      <h3 className="text-xl text-primary pl-5 py-12">Welcome</h3>
      <h1 className="text-3xl font-bold text-black pt-5 pl-5">A Great Place to</h1>
      <h1 className="text-3xl font-bold text-black pl-5"> Receive Care</h1>
      <p className="py-5 pl-5">Get your best looking smile now</p>
     
    </div>
     <div className="flex p-1">
     <div className="my-3 pl-5">
      <button className="bg-primary p-3 rounded text-white hover:bg-black" >Join Us</button>
    </div>
    <div className="my-3 pl-3">
      <button className="bg-black p-3 rounded text-white hover:bg-primary">Learn More</button>
    </div>
     </div>
   
  </div>
   </div>
    
  );
};

export default Banner;
