import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

// registration form 
// basic information to register for the app

export default function RegisterForm () {
    const [info, setInfo] = useState ({ name: '', email: '', password: '' });

    const handleChange = e => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(info.name);
        console.log(info.email);
        console.log(info.password);

        axios
            .post('https://reqres.in/api/register', info)
            .then(res => {
                console.log(res.data, 'it worked');
            })
            .catch(err => {
                console.log(err.data, 'try again');
            });
    }

    return (
        <div className='form'>
            <form onSubmit={event => handleSubmit(event)}>

                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={info.name}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <label>
                    Email:
                    <input 
                        type='email'
                        name='email'
                        value={info.email}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <label>
                    Password:
                    <input 
                        type='password'
                        name='password'
                        value={info.password}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <button>Simplify My Life</button>

            </form>
        </div>
    )
}

// export default RegisterForm();