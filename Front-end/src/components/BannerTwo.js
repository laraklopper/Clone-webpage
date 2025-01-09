import React from 'react'// Import the React module to use React functionalities
import './componentsCss/banner2and3.css'
import Card from 'react-bootstrap/Card';


export default function BannerTwo(props) {
  return (

   <div id='banner'>
        <Card id='card'>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body id='cardBody'>
            <Card.Title className='head'>{props.heading}</Card.Title>
            <Card.Text className='bannerText'>
              {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
  
        

   </div>
    
  )
}
