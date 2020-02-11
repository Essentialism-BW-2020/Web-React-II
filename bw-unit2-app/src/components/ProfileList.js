import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';



export default function ProfileList(props) {

  const [profile, setProfile] = useState([]);
  

  useEffect(() => {
    
    const getProfile = () => {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then( resp => {
          console.log(resp.data.data);
          setProfile(resp.data.data)
        })
        .catch( err => {
          console.log('tis ded jim', err)
        })
    }
    
    getProfile();
  }, []);


  return (
    <section className="profile-list">
      <h2>Profile</h2>
      {profile.map(profile => {
      return (
        <ProfileCard key={profile.first_name} 
            name={profile.first_name}
            email={profile.email}/>
      )
      })}
    </section>
  );
}



const ProfileDetails = (props) => {
  const { name, email } = props.profile;
  console.log(props.profile);

  return (
    <Link to = {`/users/${props.profile.id}`}>
      <div className='profile-card'>
        <h2>{name}</h2>
        Email: <em>{email}</em>
      </div>
    </Link>
  )
}