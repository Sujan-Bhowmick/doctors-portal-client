import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
// import doc from '../../../assets/icons/doc2.jpg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
            <InfoCard cardTitle = "Opening Hours" details = "24 Hours" bgClass = "bg-gradient-to-r from-secondary to-primary" img = {clock}></InfoCard>
            <InfoCard cardTitle = "Our Doctors" details = "Search by name, specialty, location and more.." bgClass = "bg-lime-300 " img = {phone}></InfoCard>
            <InfoCard cardTitle = "Our Locations"  details = "Find any of our 300+ locations." bgClass = "bg-accent" img = {marker}></InfoCard>
            <InfoCard cardTitle = "Contact Us"  details= "Call Appointment Center 24/7" bgClass = "bg-red-300" img = {phone}></InfoCard>
        </div>
    );
};

export default Info;