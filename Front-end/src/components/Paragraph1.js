import React from 'react'// Import the React module to use React functionalities
import Button from 'react-bootstrap/Button';//import bootstrap Button component react-bootstrap library
import './componentsCss/paragraph.css'//Import component css stylesheet

//ParagraphOne function component
export default function ParagraphOne() {//Export React component
// Styling
  let headStyle ={
    color: "red",
    margin:'0px',
    padding:'0px'
  }
  return (
    <>
    <section id='section1'>
        <div id='content1'>
          <h1 className='head1'>Investing made</h1>
          <h1 style={headStyle}>easy.</h1>
          <h1 className='head1'>Your turn.</h1>
          <p className='para'>Buy shares on SA's cheapest platform! Minimums <br></br>
          and platform fees, we don't got 'em. Intimidating <br></br>
          jargon, not welcome. Tricky tech, fat chance. </p>          
        </div>
        <div>
          <Button variant="danger" id='button1'>Register Now</Button>
        </div>
    </section>
    </>
  )
}
