import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;