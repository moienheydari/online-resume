import React, { useState } from 'react';
import '../css/Header.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [active, setActive] = useState('');

    function handleClick({ target }) {
        setActive(target.textContent);
    }

    return (
        <div className='header'>
            <Link to='/education' className={`head-butt ${(active==='Education') ? 'active' : ''}`} onClick={handleClick}>
                Education
            </Link>
            <Link to='/work' className={`head-butt ${(active==='Work') ? 'active' : ''}`} onClick={handleClick}>
                Work
            </Link>
            <Link to='/skills' className={`head-butt ${(active==='Skills') ? 'active' : ''}`} onClick={handleClick}>
                Skills
            </Link>
            <Link to='/languages' className={`head-butt ${(active==='Languages') ? 'active' : ''}`} onClick={handleClick}>
                Languages
            </Link>
            <Link to='/awards' className={`head-butt ${(active==='Honors') ? 'active' : ''}`} onClick={handleClick}>
                Honors
            </Link>
            <Link to='/extra' className={`head-butt ${(active==='Extra') ? 'active' : ''}`} onClick={handleClick}>
                Extra
            </Link>
        </div>
    )
}