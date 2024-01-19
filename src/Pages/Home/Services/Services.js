import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Health Care',
            description: 'Primary care for adults and children, gynecology, podiatry, cardiology, HIV expertise', 
            img: fluoride
        },
        {
            _id: 2,
            name: 'Therapy',
            description: 'Individual & group sessions, couples & family counseling, recovery & drug use support, art therapy, psychiatry', 
            img: cavity
        },
        {
            _id: 3,
            name: 'Dental',
            description: 'Routine & deep cleanings, root canals, bridges, crowns, extractions, fillings, removable dentures',
            img: whitening
        },
    ]
    return (
        <div className='my-28 '>
           <div className='text-center text-xl font-bold uppercase'>
           <h2 className='text-primary'>Our Services</h2>
            <h2 className='text-2xl'>Services WE Provide</h2>
           </div>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service= {service}
                    ></Service>)
                }
           </div>
        </div>
    );
};

export default Services;