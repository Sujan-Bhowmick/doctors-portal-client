import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';
import Footer from '../../Shared/Footer';
// import Reviews from '../Review/Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: 'I’ve been dealing with chronic pain for a long time, and Dr. Jotwani is the only doctor who has not given up on me. His expertise, empathy, and dedication to patient care are truly commendable. He is an expert at what he does and I am incredibly grateful for his care.',
            location: 'Carlifornia',
            img:people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: 'I am most grateful to Dr. Petrou for his very kind attention to my needs and fears and for his clear and helpful guidance as to the options that were available for my pain issues. I reccommend Dr. Petrou highly as an unusually responsive and thoughtful doctor who offers a skilled and minimally invasive approach to pain control.',
            location: 'Florida',
            img:people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: 'The doctor was kind and knowledgeable and made me feel at ease even though this i was my first time meeting him .I would recommend him to anyone',
            location: 'Shicago',
            img:people3
        },
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'> 
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl  '>What our Patients say</h2>
                </div>
                <div>
                    <img className=' w-24 md:w-48' src= {quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                     key={review._id}
                     review = {review}
                    ></Review>)
                }
                {/* {
                    reviews.map(review => <Reviews
                     key={review._id}
                     review = {review}
                    ></Reviews>)
                } */}
            </div>
            <div  className = "pt-20 ">
           <Footer></Footer>
           </div>
        </section>
    );
};

export default Testimonials;