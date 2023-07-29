import React from 'react';
import { resume } from '../../ResumeJson';
import Card2 from '../Card2';
import { ranGenTot } from '../../RandomGen';

export default function Skills() {

    return (
        <>
            {resume.skills.map((e) => {
                return <Card2 data={e} key={ranGenTot()} />
            })}
        </>

    )
}