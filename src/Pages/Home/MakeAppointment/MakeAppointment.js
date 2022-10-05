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
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold '>Appoinment</h3>
                <h2 className='text-3xl text-white' >Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis minima eius accusamus laboriosam id ratione numquam laborum, incidunt aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;