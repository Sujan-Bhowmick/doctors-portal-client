import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  return (
    <div>
      <div className="card md:max-w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={doctor.img} alt="Shoes" className="rounded-xl object-fill h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{doctor.name}</h2>
          <p>{doctor?.description}</p>
          <Link to= "/appointment">
          <PrimaryButton>Book Appointment</PrimaryButton>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Doctor;
