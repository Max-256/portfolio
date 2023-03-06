import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({image, projectName, projectSummary, detailsPath, liveLink, codeLink}) => {
    return (
        <div className='card'>
                <img src={image} alt="" />

                <div className='card-body'>
                    <li><b>Project Name:</b> {projectName}</li>

                    <p className='summary'>Summary</p>
                    <p>{projectSummary}</p>

                    <p className='details-link'>
                    <Link to={`/${detailsPath}`} className='link'>Project Details</Link></p>

                    <div className='row'>
                        <span className='col col-live'>
                        <a href={liveLink} target='_blank' className='live'>Live site</a></span>

                        <span className='col col-code'>
                        <a href={codeLink} target='_blank' className='code'>Code</a></span>                                             
                    </div>
                </div>

            </div>
    );
};

export default Card;