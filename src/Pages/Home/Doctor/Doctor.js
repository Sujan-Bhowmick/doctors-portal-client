import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  return (
    <div>
      <div className="card md:max-w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={doctor.img} alt="Shoes" className="rounded-xl object-fill h-48" />
        </figure>
        <div className="card-body items-center h-48 ">
          <h2 className="card-title">{doctor.name}</h2>
          <p>{doctor?.description}</p>
          <Link to= "/appointment">
          <button className="bg-primary p-3 rounded text-white hover:bg-black" >Book Appointment</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Doctor;
