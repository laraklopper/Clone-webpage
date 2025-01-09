import React from 'react'// Import the React module to use React functionalities
import Button from 'react-bootstrap/Button';//import bootstrap Button component react-bootstrap library
import './componentsCss/colourbanners.css'

export default function Bannerbtn() {
  return (
    <div id='button-container'>
          <Button variant="secondary" id='colour-banner-button'>Visit The EasyVSTR Hub</Button>
    </div>
      )
}
