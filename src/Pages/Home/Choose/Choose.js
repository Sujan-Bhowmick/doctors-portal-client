import React from "react";

const Choose = ({ choose }) => {
  return (
    <div>
      <div className="card md:max-w-96 bg-base-100 shadow-xl">
        {/* <figure className="px-10 pt-10">
          <img src={choose.img} alt="Shoes" className="rounded-xl" />
        </figure> */}
        <div className="card-body items-center text-center h-48">
          <h2 className="card-title">{choose.name}</h2>
          <p>{choose?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
