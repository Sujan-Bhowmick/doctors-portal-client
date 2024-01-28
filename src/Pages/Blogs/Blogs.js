import React from 'react';
import Footer from '../Shared/Footer';
import blog1 from "../../assets/images/blog1.jpg"
import blog2 from "../../assets/images/blog2.jpg"
import blog3 from "../../assets/images/blog3.jpg"
import blog4 from "../../assets/images/blog4.jpg"
import blog5 from "../../assets/images/blog5.png"
import blog6 from "../../assets/images/blog6.png"
import blog7 from "../../assets/images/blog7.jpg"
import blog8 from "../../assets/images/blog8.jpg"
import blog9 from "../../assets/images/blog9.jpg"
import Blog from './Blog';

const Blogs = () => {
   
        const blogs = [
            {
                _id: 1,
                name: 'Navigating the Wellness Journey: A Guide to Holistic Healthcare',
                description: 'Explore the realms of holistic healthcare as we delve into the interconnected aspects of physical, mental, and emotional well-being. From nutrition tips to mindfulness practices, join us on a journey to discover the keys to a balanced and healthier life.'
               , 
                img: blog1
            },
            {
                _id: 2,
                name: 'The Power of Preventive Care: Investing in Your Future Health',
                description: 'Uncover the significance of preventive healthcare in safeguarding your well-being. Learn about routine screenings, vaccinations, and lifestyle choices that play a pivotal role in preventing illnesses and promoting a lifetime of optimal health',
                img: blog2
            },
            {
                _id: 3,
                name: 'Mindful Eating: Fueling Your Body and Soul',
                description: 'Dive into the world of mindful eating and discover how the way you eat can impact your overall health. From savoring each bite to making conscious food choices, this blog explores the art of nourishing both your body and soul.',
                img: blog3
            },
            {
                _id: 4,
                name: 'Beyond the Scalpel: Exploring Non-Surgical Treatment Options',
                description: 'Discover a range of non-surgical treatment alternatives for various health conditions. From physical therapy to holistic therapies, explore how these options offer effective solutions with fewer invasive procedures and quicker recovery times.',
                img: blog4
            },
            {
                _id: 5,
                name: 'Managing Stress in a Hectic World: Strategies for a Healthier Mind',
                description: 'In this blog, we explore practical strategies for managing stress in todays fast-paced world. From mindfulness techniques to stress-reducing activities, learn how to cultivate a healthier mind and enhance your overall well-being',
                img: blog5
            },
            {
                _id: 6,
                name: 'Understanding Chronic Conditions: A Comprehensive Guide',
                description: 'Gain insights into various chronic conditions, their causes, symptoms, and the latest treatment options. Empower yourself with knowledge to better manage and navigate the complexities of chronic health issues.',
                img: blog6
            },
            {
                _id: 7,
                name: 'Fitness for All Ages: Tailoring Exercise to Your Life Stage',
                description: 'Explore the importance of age-appropriate fitness routines and how staying active contributes to overall health at every life stage. From childhood to senior years, discover tailored exercise tips for a lifetime of vitality.',
                img: blog7
            },
            {
                _id: 8,
                name: 'Sleep Wellness: The Key to Rejuvenation and Vitality',
                description: 'Uncover the secrets to achieving restful and rejuvenating sleep. This blog explores the importance of sleep for overall well-being, provides tips for better sleep hygiene, and discusses the impact of quality sleep on your health.',
                img: blog8
            },
            {
                _id: 9,
                name: 'The Gut-Brain Connection: Understanding the Link for Better Health',
                description: 'Delve into the fascinating world of the gut-brain connection and its profound impact on overall health. Learn about the importance of gut health, its relationship to mental well-being, and practical tips for maintaining a healthy gut',
                img: blog9
            },
        ]
        return (
            <div className='mt-24 '>
               <div className=' text-xl font-bold uppercase'>
               <h2 className='text-primary py-5'>Healthcare Blogs</h2>
                {/* <h2 className='text-2xl'>Services WE Provide</h2> */}
               </div>
               <div className='grid sm:grid-cols-1 md:grid-cols-3 '>
                    {
                        blogs?.map(blog => <Blog
                            key={blog._id}
                           blog= {blog}
                        ></Blog>)
                    }
               </div>
               <div  className = "pt-20 ">
               <Footer></Footer>
               </div>
            </div>
    );
};

export default Blogs;