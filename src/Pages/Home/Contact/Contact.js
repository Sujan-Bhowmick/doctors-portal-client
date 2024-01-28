import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton";
import appointment from "../../../assets/images/back2.jpg";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="text-center p-5"
    >
      <div className="my-3">
        <h3 className="text-xl text-primary font-bold">Contact Us</h3>
        <h1 className="text-3xl text-white">Stay Connected With Us</h1>
      </div>
      <div className="inline-block">
        <input
          type="text"
          placeholder="Email Address"
          class="input input-bordered input-sm my-1 w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input input-bordered input-sm my-1 w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Your Message"
          class="input input-bordered input-md  my-1 w-full max-w-xs"
        />
      </div>
      <div className="my-3">
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
