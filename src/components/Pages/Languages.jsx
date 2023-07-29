import React from 'react';
import { resume } from '../../ResumeJson';
import Card from '../Card';
import { ranGenTot } from '../../RandomGen';

export default function Languages() {
    return (
        <>
            {resume.languages.map((e) => {
                return <Card data={e} key={ranGenTot()} />
            })}
        </>
    )
}