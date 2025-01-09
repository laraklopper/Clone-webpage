import React from 'react'// Import the React module to use React functionalities
import Figure from 'react-bootstrap/Figure';//Import figure component from the bootstrap react library
import './componentsCss/images.css'
//Function for Imagebannner component
export default function Imagebanner(props) {//Export function component
  return (
    <>
          <Figure id='logo-display'> 
            <Figure.Image id='logos'  src={props.image} alt={props.entity}  />
          </Figure>
    </>
  )
}
