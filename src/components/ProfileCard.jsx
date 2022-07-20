import React from 'react'
import '../resources/profilecard.css'

const ProfileCard = () => {
  return (
            <div className='body'>
                <div className="">
                    <div className="card-container">
                      <div className="profile-image">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                      </div>    
                  <div className='card-descc'>
                    <h4 className='mt-15px'><strong>Michael</strong> Deo</h4>
                    <p>Hungry Bear Manager</p>
                </div>                
                </div>
                </div>                    
            </div>
        
      
  )
}

export default ProfileCard