import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Chooses from '../Choose/Chooses';
import Provider from '../provider/Provider';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Chooses></Chooses>
            <MakeAppointment></MakeAppointment>
            <Provider></Provider>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;