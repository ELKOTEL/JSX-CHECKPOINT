import React from 'react'
import pic from '../images/hat girl.jpg'
import  './ProfilePhoto.css'

const ProfilePhoto = () => {
  return (
    <div>
         <img src={pic} className="profilephoto" alt='Elkotel Rabeb'/>
    </div>
  )
}

export default ProfilePhoto