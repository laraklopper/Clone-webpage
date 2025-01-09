import React from 'react'// Import the React module to use React functionalities
import Container from 'react-bootstrap/Container';//import bootstrap Container component react-bootstrap library
import Nav from 'react-bootstrap/Nav';//Import bootstrap Nav component from react-bootstrap library
import Navbar from 'react-bootstrap/Navbar';//Import bootstrap Navbar component from react-bootstrap library
import NavDropdown from 'react-bootstrap/NavDropdown';//Import bootstrap dropdown component from react-bootstrap library
import './componentsCss/header.css'//Inport CSS stylesheet

//Function for Navigation Component
export default function Navigation() {//Export react component
  return (
        <>
      <Navbar>
        <Container id='navigation-bar-container'>          
            <Nav id='navbar'>
              
                <NavDropdown title="Get Started" className='navbar-dropdown'>
                  <NavDropdown.Item className='dropdown-item'>New to Investing</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>How it works</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Fractional shares</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Account Types</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Costs</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Platform features</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Invest" className='navbar-dropdown'>
                  <NavDropdown.Item className='dropdown-item'>Stocks</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Crypto</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>ETFs</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item'>Property</NavDropdown.Item>
                </NavDropdown>    

                <Nav.Link className='nav-link'>EasyVSTR Hub</Nav.Link>
            <NavDropdown title="EasyApps" className='navbar-dropdown'>
              <NavDropdown.Item className='dropdown-item'>EasyEquaties</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'>EasyProperties</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'>EasyCrypto</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'>EasyAdvisor</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='nav-link' >About</Nav.Link>   
            <NavDropdown title="Support" className='navbar-dropdown'>
              <NavDropdown.Item className='dropdown-item'>Get Help</NavDropdown.Item>
              <NavDropdown.Item className='dropdown-item'>System Status</NavDropdown.Item>
            </NavDropdown>          
            </Nav>
        
        </Container>
      </Navbar>
        </>
  )
}
