import React from 'react';
import '../css/Side.min.css';
import Social from './Social-Button/Social';
import { resume } from '../ResumeJson';
import image from '../assets/picture.jpg';


export default function Side() {

    return (
        <div className='side'>
            <img rel="noopener noreferrer" className='picture' src={image} alt='profile picture'></img>
            <p className='name'>{resume.profile.name}</p>
            <Social hrefs={resume.profile.links} />
        </div>
    )
}