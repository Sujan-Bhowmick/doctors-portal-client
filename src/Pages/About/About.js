import React from "react";

import about from "../../assets/images/about2.jpg";
import appointment from "../../assets/images/back2.jpg"
import provider from "../../assets/images/provider.png"
import Footer from "../Shared/Footer";
const About = () => {
  return (
    <div className="mt-16">
      <div
        style={{
          background: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition:"center",
          width: "100%",
        //   height: "100vh"
        }}
        className="px-12 py-12"  
      >
        <div className=" text-white">
          <h3 className="font-bold">About </h3>
          <h1 className="font-bold text-3xl pb-3">Doctor's Care</h1>
          <p className="text-white">
            Welcome to  Doctor's Care Website ! At Doctor's Care, we
            prioritize your health and well-being by providing comprehensive and
            compassionate medical care. Our dedicated team of experienced and
            highly qualified healthcare professionals is committed to delivering
            personalized services to meet the unique needs of each patient. Our
            state-of-the-art facility is equipped with cutting-edge technology,
            ensuring that you receive the highest quality of care. Whether
            you're seeking routine check-ups, specialized treatments, or
            preventive healthcare, we are here to guide you on your journey to
            optimal health. At the core of our philosophy is a patient-centric
            approach, where we value open communication and collaboration. We
            believe in building strong doctor-patient relationships based on
            trust, respect, and empathy. Our healthcare professionals take the
            time to listen to your concerns, answer your questions, and involve
            you in the decision-making process regarding your healthcare. We
            understand that navigating the healthcare landscape can be complex,
            and our goal is to make your experience as seamless as possible.
            From scheduling appointments to coordinating follow-up care, our
            dedicated staff is here to assist you every step of the way. Explore
            our website to learn more about our team, services, and the range of
            medical specialties we offer. We aim to provide valuable resources
            and information to empower you in making informed decisions about
            your health. Thank you for considering Doctor's Care for your
            healthcare needs. We look forward to being your trusted healthcare
            partner and helping you achieve and maintain a healthy and
            fulfilling life.
          </p>
          <div className="py-3">
          <button className="bg-black p-3 rounded text-white hover:bg-primary">Work with Us</button>
          </div>
         
        </div>
      </div>
      <div
        className="hero-content flex-col lg:flex-row rounded my-5 p-3"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="w-1/2">

        <img
            src={provider}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />

        </div>
        <div className="w-1/2">
          <h1 className="text-3xl text-white py-10">Our Story</h1>
          <p className="text-white">
            Thank you for choosing Doctor's Care for your healthcare needs. We
            are dedicated to providing quality medical services and ensuring
            your well-being. If you have any questions, concerns, or would like
            to schedule an appointment, please don't hesitate to get in touch
            with us.
          </p>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
