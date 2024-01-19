import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
         className='flex justify-center items-center'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-100px]' src= {doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold '>Appoinment</h3>
                <h2 className='text-3xl text-white py-5' >Make an Appoinment Today</h2>
                <p className='text-white pb-5'>One of the mainstays of life is making and keeping appointments. Many people consider “an appointment” to mean a doctor’s visit or a job interview or other more formal. However, it is important to realize that such activities as meeting a friend for lunch or dinner, going to a concert with friends, or having work done on your flat are all appointments.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;