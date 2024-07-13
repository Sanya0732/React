import React from 'react'

const Profile = (props) => {
  return (
    <div>
     <h1>Here's My Profile</h1>
     <h4>{props.name}</h4>
     <h4>{props.age}</h4>
     <h4>{props.location}</h4>

    </div>
  )
}

export default Profile