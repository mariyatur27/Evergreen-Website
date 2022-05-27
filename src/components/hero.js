import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_video from './video/bg_video.mp4';

function Hero() {
    return (
        <div className='hero'>
            <div className='shadow-overlay'>
                <video autoPlay loop muted style={{
                    position: 'absolute', 
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                    filter: 'brightness(73%)'
                    }}>
                    <source src={bg_video} type='video/mp4' />
                </video>
            </div>
            <div className='centered-content'>
                <h1>Lorem. Ipsum. Ipilate.</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dui gravida, feugiat lorem eget, mollis justo.</h4>
                <Button className='border-2'>Find Out More</Button>
            </div>
        </div>
    )
}

export default Hero