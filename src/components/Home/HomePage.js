import React from 'react';
import videoHomepage from '../../assets/video-homepage.mp4';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video className="homepage-video" autoPlay loop muted >
                <source src={videoHomepage} type="video/mp4" />
               
            </video>
            <div className='homepage-content'>
                  <div className='title-1'>Get to know your customers with forms worth filling out</div>
                  <div className='title-2'>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div>
                  <div className='title-3'>
                    <button>Get started</button>
                  </div>
            </div>
        </div>
    );
}

export default HomePage;