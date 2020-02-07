import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavStyle = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
margin-bottom: 2em;
`

const NavItem = styled.div`
margin-left:1em;
margin-right:1em;
background-color:red;
padding:1em;
border-radius: 1em;

    a {
        text-decoration: none;
        color: yellow;
    }

@media (max-width: 500px) {
    margin-left:.5em;
    margin-right:.5em;
    padding:.5em;
}
`

const Navigation = () => {
  return (

      <NavStyle>
        {/* <NavItem>
          <Link to="/">Home</Link>
        </NavItem> */}
        <NavItem>
          <Link to="/">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/register">Register</Link>
        </NavItem>
      </NavStyle>

  );
};

export default Navigation;