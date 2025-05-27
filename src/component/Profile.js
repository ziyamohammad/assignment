import React from 'react'

const Profile = () => {
  return (
    <div className = "profile">
        <span className = "profilehead">Account Settings</span>
        <div className="profiledetails">
            <div className="profileimg">
                <img src ="./Ellipse 114/Ellipse 114.png" alt="/" height="100%" width="100%"/>
                <div className="icon">
                     <img src ="./Ellipse 114/Group 1585.svg" alt="/" height="100%" width="100%"/>
                </div>
            </div>
            <div className="profilename">
                <span className = "name">Marry Doe</span>
                <span className = "email">Marry@Gmail.Com</span>
            </div>
        </div>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      
    </div>
  )
}

export default Profile
