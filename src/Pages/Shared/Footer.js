import React from 'react';
import footer from '../../assets/images/footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}className=" p-10  ">
            <div className='footer w-full'>
                <div>
                    <span className="footer-title">Doctors Care</span>
                    <span className='w-48'>Booking your desired Doctors is not far now. Doctors Care made online consultation from Doctors very easy & convenient. It is a freelancing platform for Doctors and on the other hand, it is easy for patients to avail services.</span>
                    {/* <a className="/home">Branding</a>
                    <Link to= "/doctors" className="link link-hover">Search For Doctors</Link>
                    <Link to= "/login" className="link link-hover">Login</Link>
                    <Link to= "/register" className="link link-hover">Register</Link> */}
                </div>
                <div>
                    <span className="footer-title">For Patient</span>
                    <a className="/home">Branding</a>
                    <Link to= "/doctors" className="link link-hover">Search For Doctors</Link>
                    <Link to= "/login" className="link link-hover">Login</Link>
                    <Link to= "/register" className="link link-hover">Register</Link>
                </div>
                <div>
                    <span className="footer-title">For Doctors</span>
                    <Link className="link link-hover">Appointment</Link>
                    <Link to= "/login" className="link link-hover">Login</Link>
                    <Link to= "/register" className="link link-hover">Register</Link>
                    <Link to= "/dashboard" className="link link-hover"> DashBoard</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <Link className="link link-hover">Arizona, USA</Link>
                    <a className="link link-hover">01728827333</a>
                    <a className="link link-hover">info.doctorscare@gmail.com</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2024 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;