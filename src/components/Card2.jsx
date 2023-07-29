import React from 'react';
import '../css/CardTwo.min.css';

export default function Card2({ data }) {
    return (
        <div className='card2'>
            <p className='title'>{data.title}</p>
            <div className='mid'>{data.subtitle}</div>
        </div>
    )
}