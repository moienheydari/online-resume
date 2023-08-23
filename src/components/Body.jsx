import React, { Suspense, lazy } from 'react';
import '../css/Body.min.css';
import { Route, Routes, resolvePath } from 'react-router-dom';
// import Education from './Pages/Education';
// import Work from './Pages/Work';
// import Skills from './Pages/Skills';
// import Languages from './Pages/Languages';
// import Awards from './Pages/Awards';
// import Extra from './Pages/Extra';


export default function Body() {
    const loadtime = 500;
    const Education = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Education')));
    const Work = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Work')));
    const Skills = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Skills')));
    const Languages = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Languages')));
    const Awards = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Awards')));
    const Extra = lazy(() => fetchLike(loadtime).then(() => import('./Pages/Extra')));

    return (
        <div className='body'>
            <Suspense fallback={<h1 style={{ color: 'white' }}>Loading...</h1>}>
                <Routes>
                    <Route path='/education' element={<Education />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/languages' element={<Languages />} />
                    <Route path='/awards' element={<Awards />} />
                    <Route path='/extra' element={<Extra />} />
                </Routes>
            </Suspense>
        </div>
    )
}


function fetchLike(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}