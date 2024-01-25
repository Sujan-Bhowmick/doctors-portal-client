import React from 'react';
import Doctor from './Doctor';
import doctor1 from '../../../assets/doctors/doctor1.png'
import doctor2 from '../../../assets/doctors/doctor2.jpg'
import doctor3 from '../../../assets/doctors/doctor3.jpg'
import doctor4 from '../../../assets/doctors/doctor4.png'
import doctor5 from '../../../assets/doctors/doctor5.jpg'
import doctor6 from '../../../assets/doctors/doctor6.png'
import Footer from '../../Shared/Footer';

const Doctors = () => {
    const doctors = [
        {
            _id: 1,
            name: 'Dr Liton Sarkar',
            description: 'MBBS (DMC), FCPS (Surgery), FMAS (Laparoscopic Surgery, India)'
           , 
            img: doctor1
        },
        {
            _id: 2,
            name: 'Dr Rabeya Khatun',
            description: 'MBBS, DDV (BSMMU) Trained in Aesthetic Dermatology (DDI)',
            img: doctor2
        },
        {
            _id: 3,
            name: 'Dr Shila',
            description: 'MBBS, BCS (Health), MD (Nephrology), MACP (USA), ',
            img: doctor3
        },
        {
            _id: 4,
            name: 'Dr Maymuna hossain',
            description: 'MBBS, BCS (Health), MD (Pediatrics, BSMMU)',
            img: doctor4
        },
        {
            _id: 5,
            name: 'Dr Gobido Paul',
            description: 'MBBS (DMC), BCS (Health), FCPS (Gynae & Obs)',
            img: doctor5
        },
        {
            _id: 6,
            name: 'Dr Chandana',
            description: 'MBBS, BCS (Health), MD (Pediatrics, BSMMU)',
            img: doctor6
        },
    ]
    return (
        <div className='mt-28 '>
           <div className='text-center text-xl font-bold uppercase'>
           <h2 className='text-primary'>Our Doctors</h2>
            {/* <h2 className='text-2xl'>Services WE Provide</h2> */}
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor= {doctor}
                    ></Doctor>)
                }
           </div>
           <div  className = "pt-20 ">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Doctors;