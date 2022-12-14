import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '', 
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '', 
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
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