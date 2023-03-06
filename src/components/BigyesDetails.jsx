import React from 'react';

const Bigyes = () => {
    return (
        <div className='container jtank-details'>
            <h2>BIGYES Project Details</h2>

            <h3>Introduction</h3>             
             <p>BIGYES is an online market place where sellers register their decentralized online shops into which they add stock virtually.
                The stock they add to their shops appears in the market or the feed of the app. Once goods are sold, sellers can remove them from the shops.
             </p>

            <h3>Core Functionalities</h3>
            <li>Athentication of sellers</li>
            <li>CRUD operations by sellers from their shops</li>
            <li>Fetching app feed from the database sorted by most recent.</li>

            <h3>Role in the Project</h3>
            <p>I built the fullstack project from design to finish independently.</p>
            
            <h3>Technologies Used</h3>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>

            <div className='links'>
            <a href='https://bigyes.netlify.app' target='_blank' className='live live-site'>Live site</a>
            <a href="https://github.com/Max-256/BIG-YES" target='_blank' className='live'>Code</a></div>

            <h3>Purpose and goal</h3>
            <p>To allow decentralized shops reach a wider range of target customers</p>
            <p>My expectation is that the shops will sell more online as their online customer base widens</p>

            <h3>Spotlight</h3>
            <p>The challenge i faced in the process was how to handle image files uploaded by the sellers</p>
            <p>I solved this by first accepting the image file input, then resizing the images using react-image-fileResizer, then storing the images in 
                a cloud storage(cloudinary) through axios, at this stage, the url of the cloud stored image was returned which i then added to the 
                product object that i finally sent to the backend for storage.</p>

            <h3>Current Status</h3>
            <p>The application is already in use. I have got a handful of shops registered and i look forward to seeing more</p>


        </div>
    );
};

export default Bigyes;