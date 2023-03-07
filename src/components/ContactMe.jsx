import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhoneCall} from 'react-icons/fi';
import {GrLinkedin, GrTwitter} from 'react-icons/gr';

const ContactMe = () => {
    return (
        <div className='container'>
            <h1>Contact me</h1>

            <div className='mail'>
                <span className='icon'><HiOutlineMail /></span>
                <span><a href = "mailto: opiomaxwell11122@gmail.com" 
                         target="_blank" rel="noreferrer">opiomaxwell11122@gmail.com</a></span> 
            </div>

            <div>
                <span className='icon'><FiPhoneCall /></span>
                <span>+256 - 774 159 449</span>
            </div>

            <div>
                <span className='icon'><GrLinkedin /></span>
                <span><a href="https://www.linkedin.com/in/maxwell-opio-a35875199/" target="_blank" rel="noreferrer">
                    linkedIn</a></span>
            </div>

            <div>
                <span className='icon'><GrTwitter /></span>
                <span><a href=" https://twitter.com/chif_pyo" target="_blank" rel="noreferrer">
                    Twitter</a></span>
            </div>



            


        </div>
    );
};

export default ContactMe;