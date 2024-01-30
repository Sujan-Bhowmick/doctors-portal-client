import React from "react";
import provider from "../../../assets/images/provider.png";
import PrimaryButton from "../../Shared/PrimaryButton";
import { Link } from "react-router-dom";
const Provider = () => {
  return (
    <div className="my-1">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={provider}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="">
            <h1 className="text-3xl font-bold">
              We’re Working Together for You
            </h1>
            <p className="py-6">
              Our team of qualified health and wellness therapy providers
              collaborate with each other to provide you with effective,
              whole-person care, specific to your needs.
            </p>
            <Link to="/doctors">
            <button className="bg-primary p-3 rounded text-white hover:bg-black" >See our full list of provider</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
