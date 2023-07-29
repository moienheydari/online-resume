import React from 'react';
import Card from '../Card';
import { resume } from '../../ResumeJson';
import { ranGenTot } from '../../RandomGen';

export default function Work() {

    return (
        <>
            {resume.work.map((e) => {
                return <Card data={e} key={ranGenTot()} />
            })}
        </>
    )
}