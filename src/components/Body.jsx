import React from 'react';
import '../css/Body.min.css';
import { Route, Routes } from 'react-router-dom';
import Education from './Pages/Education';
import Work from './Pages/Work';
import Skills from './Pages/Skills';
import Languages from './Pages/Languages';
import Awards from './Pages/Awards';
import Extra from './Pages/Extra';

export default function Body() {

    return (
        <div className='body'>
            <Routes>
                <Route path='/education' element={<Education />}/>
                <Route path='/work' element={<Work />}/>
                <Route path='/skills' element={<Skills />}/>
                <Route path='/languages' element={<Languages />}/>
                <Route path='/awards' element={<Awards />}/>
                <Route path='/extra' element={<Extra />}/>
            </Routes>
        </div>
    )
}