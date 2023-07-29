import React from 'react';
import '../css/Card.min.css';
import { ranGenTot } from '../RandomGen';

export default function Card({ data }) {
    const time = (data.time[1])?  `| ${data.time[0]} - ${data.time[1]}` : `| ${data.time[0]}`;
    return (
        <div className='card'>
            <p className='title'>{data.title}</p>
            <div className='mid'>
                <span className='subtitle'>{data.subtitle}</span>
                <span className='time'>{time}</span>
            </div>
            <div className='info'>
                {data.info.map((e) => {
                    return (
                        <>
                            <span className='info-text' key={ranGenTot()}>{e}</span> <br/> <br/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}