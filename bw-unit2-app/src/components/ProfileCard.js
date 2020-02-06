import React from "react";

export default function ProfileCard( props ) {
  return (
      <div className='profile-card'>
        <h2>{props.name}</h2>
        <p> Email: {props.email}</p>
      </div>
    )
}