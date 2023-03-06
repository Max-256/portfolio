import React from 'react';
import BriefAbout from './BriefAbout';
import ProjectSummary from './ProjectSummary';
import ContactMe from './ContactMe';

const Home = (props) => {
    return (
        <div>

          <div className='brief'>
            <BriefAbout /></div>


          <div className='projects'>
            <ProjectSummary /></div>  

          
          <div className='contact'>
            <ContactMe /></div>
      
        </div>
    );
};

export default Home;