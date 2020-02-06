import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar () {

    return(
        <div>
            <div className='nav'>
                <h1>Esse </h1>
            </div>

            <nav>
                <a href= 'https://essentialist.netlify.com/index.html'> Home </a>
                
                <a href = '#' > Login </a>

                <NavLink to = {'/register'}> Register </NavLink>

            </nav>
        </div>
    )
}