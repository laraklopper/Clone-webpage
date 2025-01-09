import React from 'react'// Import the React module to use React functionalities
import Button from 'react-bootstrap/Button';

//Banner component function
export default function Banner() {//Export banner function component
  return (
<>
            <div id='banner'>
              <div id='bannerText'>
                  <h2 id='text'>Get ready to rock investing with <label id='investNum'>1864084</label> of our investors</h2>
              </div>
              <div id='bannerBtn'>
                  <Button variant="danger" id='button2'>Register Now</Button>
              </div>
        </div>
</>
  )
}
