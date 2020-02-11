import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { axiosWithAuth } from './axiosWithAuth'


// https://essentialism-node-express-serv.herokuapp.com/auth/login
// https://deploy-serv-node-essentialism.herokuapp.com/auth/login

const LoginStyle = styled.div`
// border: 2px dashed #e98074;
border-radius: 1.5em;
background-color: #e85a4f;
padding: 1em;
width: 300px;
margin: 0 auto;
margin-top: 2em;
color: #eae7dc;
@media (max-width: 500px) {
  width:85%;
  margin: 0 auto;
}
`

const BtnStyle = styled.button`
color: #8e8d8a;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #8e8d8a;
border-radius: 1em;
  :active {
    color:#e98074;
    // background-color: #e98074;

  }
`

function AccountDashboard(props) {
//   // const { register, handleSubmit } = useForm()
//   const [user, setUser] = useState()
//   const handleChange = event => {
//     setUser(
//       {
//         ...user,
//         [event.target.name]: event.target.value
//       }
//     )

//   }
//   // const onSubmit = (data, e) => {
//   //   console.log(data)
//   //   e.target.reset();

// // const handleSubmit = event => {
// //     event.preventDefault()
// //     login()
// //   }

// const login = event => {
//   event.preventDefault()
//   console.log('user', user)
//   event.target.reset();
//   axiosWithAuth()
//   .post ('https://deploy-serv-node-essentialism.herokuapp.com/auth/values',user, {withCredentials: true})
//   .then(result => {
//     console.log(result.data)

//     localStorage.setItem('token', result.data.token)
//     props.history.push('/dashboard')
// }
// )

//   .catch(error => {
//     if(error.response) {
//       console.log(error.response.data)
//       console.log(error.response.status)
//       console.log(error.response.headers)

//     } else {
//       console.log(error.message)
//     }
//   })
// }

  
   
  return (
    // <div className='login-form'>
    <LoginStyle>
This means you have Logged in and this is where you would see your profile page/dashboard
    </LoginStyle>

  );
  }

export default AccountDashboard;