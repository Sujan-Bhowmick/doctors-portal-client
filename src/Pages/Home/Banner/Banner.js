import React from 'react';
import chair from '../../../assets/images/home.jpg'
import PrimaryButton from '../../Shared/PrimaryButton';
import appointment from '../../../assets/images/back7.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    // <div>
    //   <div className="hero min-h-screen">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <img src={chair} className="max-w-sm rounded-lg shadow-2xl "  alt=''/>
    //       <div>
    //         <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
    //         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //         <PrimaryButton>Get Started</PrimaryButton>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section  style={{
      // background: `url(${back7})`
      background: `url(${appointment})`
  }}
   className='flex justify-center items-center my-24'>
      <div className='flex-1 hidden md:block'>
          {/* <img className='mt-[-100px]' src= {doctor} alt="" /> */}
      </div>
      <div className='flex-1 px-5'>
      <h1 className="text-5xl font-bold text-white">Your New Smile Starts Here</h1>
          <p className="py-6  text-white ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to= "/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
          </Link>         
      </div>
  </section>
  );
};

export default Banner;