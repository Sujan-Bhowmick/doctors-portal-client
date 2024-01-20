import React from 'react';
import provider from "../../../assets/images/provider.png"
import PrimaryButton from '../../Shared/PrimaryButton';
import { Link } from 'react-router-dom';
const Provider = () => {
    return (
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={provider} className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
              <div>
                <h1 className="text-5xl font-bold">We’re Working Together for You</h1>
                <p className="py-6">Our team of qualified health and wellness therapy providers collaborate with each other to provide you with effective, whole-person care, specific to your needs.</p>
                <Link to = "/doctors">
                <PrimaryButton>See our full list of provider</PrimaryButton>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      );
};

export default Provider;