import React from 'react';
import Choose from './Choose';

const Chooses = () => {
    const chooses = [
        {
            _id: 1,
            name: 'Patient-centered care',
            description: 'We donot just care for your health conditions. We care about you. That means our providers take the time to listen to what is important to you before recommending next steps', 
            // img: fluoride
        },
        {
            _id: 2,
            name: 'National recognition',
            description: 'Doctors Care is recognized in the U.S. and throughout the world for its expertise and care', 
            // img: cavity
        },
        {
            _id: 3,
            name: 'Collaborative providers',
            description: 'You will get care from board-certified and fellowship trained experts who work together to create a treatment plan just for you. Only the highest standards ensure excellent outcomes.',
            // img: whitening
        },
        {
            _id: 4,
            name: 'Innovation and research',
            description: 'We are focused on today — and tomorrow. Our focus on research and offering the latest options means you can find a wide range of clinical trials and other care that you can not find elsewhere.',
            // img: whitening
        },
    ]
    return (
        <div className='my-28 '>
           <div className='text-center text-xl font-bold uppercase'>
           <h2 className='text-primary my-10'>Why Choose Doctor's Care</h2>
            {/* <h2 className='text-2xl'>Services WE Provide</h2> */}
           </div>
           <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    chooses.map(choose =><Choose
                        key={choose._id}
                        choose= {choose}
                    ></Choose>)
                }
           </div>
        </div>
    );
};

export default Chooses;