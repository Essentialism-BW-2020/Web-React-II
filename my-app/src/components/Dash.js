import React from 'react';
import './App.css';
// import LoginForm from './components/LoginForm'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { Login, RegisterForm, Navigation, Dashboard, RegisterSuccess } from './'

//styles 

const AppContainer=styled.div`
background-color: #eae7dc;
padding: 3em;
margin: 0 auto;
margin-top: 3em;
margin-left: 1em;
margin-right: 1em;
margin-bottom: 3em;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 2em;
@media (max-width: 500px) {
  margin-top: .25em;
  margin-left: 0em;
  margin-right: 0em;
  margin-bottom: .25em;
  padding:0em;
  width:95%;
  margin: 0 auto;
  padding-bottom:2em;
  padding-top:.5em;
}
`

const Para = styled.div`
font-size: 1.5em;
margin-left: 2em;
margin-right: 2em;
@media (max-width: 500px) {
  margin-left: .2em;
  margin-right: .2em;
}
`

const HeaderStyle = styled.header`
background-color: #e98074;
padding-bottom: 2em;
border-radius: 2em;
@media (max-width: 500px) {
  margin-top: .25em;
  margin-left: .5em;
  margin-right: .5em;
  margin-bottom: .25em;
}

`
//app
function Dash() {
return( 
<AppContainer>
<Navigation />
    <HeaderStyle>
      <h1>
        Essentialism App
        </h1>
        <div>
          {/* <Route exact path="/" component={Home} /> */}



        </div>
      <Para>
      Enter Essentialism. The Way of the Essentialist involves doing less, 
      but better, so you can make the highest possible contribution. 
      It’s not about getting more done in less time or getting less done. 
      It’s about getting only the right things done.
      </Para>
    </HeaderStyle>      
  <div>
  {/* <Route  path="/login" component={LoginForm} /> */}
  <Route  path="/register" component={RegisterForm} />
  <Route  exact path="/" component={Login} />
  <Route path='/dashboard' component={Dashboard} />
  <Route path='/success' component={RegisterSuccess} />
    {/* <LoginForm /> */}
  </div>
</AppContainer>
)   
}

export default Dash;
