import React from 'react'// Import the React module to use React functionalities
import './componentsCss/colourbanners.css'//Import CSS stylesheet
import Bannerbtn from './Bannerbtn';

//Function for Blue banner Component
export default function Bluebanner() {
  return (
    <>
    <div id='blue-banner-header-text'>
       <h3 id='blue-banner-heading'>Help Me Invest</h3>
      <h3 id='blue-banner-subtitle'>We ensure that your investments makes sense specifically for you.</h3>
      </div>
     <div>
      <div id='blue-text-box-wrapper'>
        <div className='text-box'>
          <div id='text-box3-heading'>
            <h5 id='blue-text-box-heading'>MrPhy</h5>
          </div>
          <div id='box3-text'>
            <p className='text'>
              Don't call it a dream, call it a plan. customised investment plans that turn your personal dreams into achievable realities.
              MrPhy manages your profile so that you can focus on the fun things in life
            </p>
          </div>
        </div>
      </div>
     </div>
     <div>
      <Bannerbtn/>
     </div>
    
    </>
    
   
  )
}
