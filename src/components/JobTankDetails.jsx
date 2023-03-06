import React from 'react';

const JobTankDetails = () => {
    return (
        <div className='container jtank-details'>
            <h2>JobTank Project Details</h2>

            <h3>Introduction</h3>             
             <p>The JobTank is aimed at narrowing the information gap between recruiters and job seekers by acting as a billboard
                where recruiters post open roles and the interested and qualified job seekers apply to matching posts.
             </p>

            <h3>Core Functionalities</h3>
            <li>Athentication of Recruiters</li>
            <li>CRUD operations by authorized users</li>
            <li>Fetching app feed from the database sorted by most recent.</li>

            <h3>Role in the Project</h3>
            <p>I built the project alone, starting from the design of user experience all the way through to the end of the fullstack project</p>
            
            <h3>Technologies Used</h3>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>

            <div className='links'>
            <a href='https://jobtank.netlify.app' target='_blank' className='live live-site'>Live site</a>
            <a href="https://github.com/Max-256/JobTank" target='_blank' className='live'>Code</a></div>

            <h3>Purpose and goal</h3>
            <p>Given that information gap is one of the causes of unemployment, i built this project to narrow the gap.</p>
            <p>My expectation is that with time, problems arising from limited information concerning jobs will be reduced</p>

            <h3>Spotlight</h3>
            <p>The challenge i faced in the process was how to get details of the current recruiter logged in, in the frontend</p>
            <p>I solved this from the backend by signing the json web token with all the user information i would need in the frontend.
                once i decoded the token in the frontend, it had all the data i signed it with from backend.
            </p>

            <h3>Current Status</h3>
            <p>While testing the prototype, my friends gave me positive feedback.</p>
            <p>The application is live and ready for use. But it has not yet been marketed</p>


        </div>
    );
};

export default JobTankDetails;