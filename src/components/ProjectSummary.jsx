import React from 'react';
import jobtank from '../images/jobtank.png';
import bigyes from '../images/bigyes.png';
import Card from './Card';

function ProjectSummary(props) {
    return (
        <div className='container'>
            <h1>My Projects</h1>
            <div className='grid'>
            <Card 
                image={jobtank}
                projectName="JobTank"
                projectSummary="This is a job portal where recruiters post open jobs
                 to a traffic of applicants."
                detailsPath="jobTankDetails"
                liveLink="https://jobtank.netlify.app"
                codeLink="https://github.com/Max-256/JobTank" />

            <Card 
                image={bigyes}
                projectName="BIG YES"
                projectSummary="An e-market where sellers create their online shops
                 and buyers contact them."
                detailsPath="bigyesDetails"
                liveLink="https://bigyes.netlify.app"
                codeLink="https://github.com/Max-256/BIG-YES" />    

            </div>
        </div>
    );
}

export default ProjectSummary;