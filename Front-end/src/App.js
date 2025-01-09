import React from 'react'// Import the React module to use React functionalities
//Bootstrap
import Container from 'react-bootstrap/Container';//Import bootstrap Container component react-bootstrap library
import Row from 'react-bootstrap/Row';// Import the "Row" component from the react-bootstrap library
import Col from 'react-bootstrap/Col';  // Import the "Col" component from the react-bootstrap library
import Button from 'react-bootstrap/Button';//import bootstrap Button component react-bootstrap library
// Images
import logo from './images/logo.jpg'//Import logo image
import mainImage from './images/image.jpg'//Import image
import Redphone from './images/phone.jpg';//Import image
import Orangephone from './images/phone2.jpg';//Import image
import Bluephone from './images/phone3.jpg'//Import image
// Components
import Navigation from './component/Navigation';//Import Navigationbar component
import ParagraphOne from './component/Paragraph1';//Import paragraph1 component
import Banner from './component/Banner';//Import banner component
import BannerTwo from './component/BannerTwo';//Import bannertwo component
import Banner3 from './component/Banner3';//Import banner3 component
import Banner4 from './component/Banner4';//Import banner4 component
import Banner5 from './component/Banner5';//Import banner5 component
import Redbanner from './component/Redbanner';//Import Redbanner component
import Orangebanner from './component/Orangebanner';//Import Orangebanner component
import Bluebanner from './component/Bluebanner';//Import Bluebanner component
// CSS Stylesheets
import './App.css';//Import Main CSS Stylesheet
import './component/componentsCss/images.css'//Import Images CSS stylesheet
import "./component/componentsCss/header.css"//Import Header CSS stylesheet
import './component/componentsCss/colourbanners.css'//Import CSS stylesheet
import Footer from './component/Webpageurl';//Import webpage component containg the link to the webpage URL

// Banner 2 Object
const banner2=[
  {
    heading: "Low Cost",
    text: "Invest with any amount you've got. No minimums baby! You won't find cheaper.",
    bannerId: "box1",//key
  },
  {
    heading: "Go Global",
    text: "Change your Rands into global currencies on the platform, and invest in global markets.",
    bannerId: "box2",//key
  },
  {
    heading: "Easy",
    text: "Setup an account, get verified, click to invest. Booyah!",
    bannerId : "box3",//key
  },
  {
    heading: "Learn",
    text: "Up your Investment smarts with our online tools and research.",
    bannerId: "box4", //key
  },
  {
    heading: "Support & Security",
    text: "We've got your back! MFA available on all our accounts.",
    bannerId: "box5"//key
  }
]

export default function App() {

  return (
    <>
      <Container fluid="md" className='container'>
        <header id='header'>
          {/* Row 1 */}
          <Row className='row' id='heading-row'>
            <Col md={3} className='col' id='img'>
              <img id='logo' src={logo} alt='logo' />
            </Col>
            <Col md={6} className='col' id='navigation-bar'>
            <Navigation/>
            </Col>
            <Col className='col' md={3} id='buttons'>
              <Button variant="outline-secondary" id='loginBtn'>Login</Button>
              <Button variant="danger" id='headBtn1'>Register</Button>
            </Col>
          </Row>
        </header>
        <section id='section1'>
          {/* Row 2 */}
          <Row className='row'>
            <Col xs={6} className='col'>
              <ParagraphOne/>
              </Col>
            <Col xs={6} id='image'>
              <img id='topImage' src={mainImage} alt='mainImage'/>
            </Col>
          </Row>
        </section>
        <section>
          {/* Row 3 */}
          <Row className='row'>
            <Col className='col'>
            <Banner/>            
            </Col>
          </Row>
        </section>
        <section id='section2'>
          <div id='banner2'>
            {/* Row4 */}
            <Row className='row' >
              <h2 id='banner2Head'>Cheap as chips and easy as pie</h2>
            </Row>
            {/* Row 5 */}
            <Row className='row'>
              <Col className='col' id='bannerBlocks'>           
                {banner2.map((banner2) => {
                  return (
                    <BannerTwo key={banner2.bannerId} heading={banner2.heading} text={banner2.text} />
                  )
                })}
                
              </Col>
            </Row>
          </div>
       
        </section>
        <section id='section3'>
          {/* Row6 */}
          <Row className='row'>
            <Col className='col'>
            <Banner3/>
            </Col>
          </Row>
        </section>
     <section id='section4'>
      {/* Row7 */}
      <Row className='Row'>
        <Col className='col'>
          <Banner4/>
        </Col>
      </Row>
    </section>
    <section id='section5'>
      {/* Row 8 */}
          <Row>
            <Col className='col' id='banner5'>
            <Banner5/>
            </Col>
          </Row>
          <div id='redBanner'>
            {/* Row9 */}
            
              <Row>
                <Col xs={6} md={4}>
                  <img id='image1' src={Redphone} alt='phone1'/>
                </Col>
                <Col xs={12} md={8}>
                <Redbanner/>
                </Col>
                {/* Row 1o */}
             </Row>            
           </div> 
           <div id='orange-banner'>
            <Row className='row'>
              <Col className='col'>
        
              </Col>
            </Row>
            {/* Row 11 */}
            <Row className='row'>
              <Col xs={12} md={8} className='col'>
                <Orangebanner />
              </Col>
              <Col xs={6} md={4} className='col' id='img2'>
                <img id='image2' src={Orangephone} alt='phone2'/>
              </Col>
            </Row>
            </div>  
            <div id='blue-banner'>
              {/* row 12*/}
            <Row className='row'>             
              <Col xs={6} md={4} className='col' id='img3'>
                <img src={Bluephone} id='image3' alt='phone3'/>
              </Col>      
            <Col xs={12} md={8} className='col'>
              <Bluebanner/>
            </Col>
            </Row>  
            </div> 
    </section>
    <footer id='footer'>
      {/* Row 13 */}
          <Row>
            <Col xs={6}><img id='footerLogo' src={logo} alt='logo'/></Col>
            <Col xs={6}><Footer /></Col>
          </Row>
    </footer>
        </Container>
       

    </>
  )
}




