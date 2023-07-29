import React from 'react';
import Card from '../Card';
import { resume } from '../../ResumeJson';
import Card2 from '../Card2';
import { ranGenTot } from '../../RandomGen';

export default function Awards() {

    return (
        <>
            {resume.awards.map((e) => {
                return <Card2 data={e} key={ranGenTot()} />
            })}
        </>
    )
}