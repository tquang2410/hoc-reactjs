import React from 'react';
import videoHomepage from '../../assets/video-homepage.mp4';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video className="homepage-video" autoPlay loop muted >
                <source src={videoHomepage} type="video/mp4" />
               
            </video>
        </div>
    );
}

export default HomePage;