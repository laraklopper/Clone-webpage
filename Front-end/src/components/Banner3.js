import React from 'react'// Import the React module to use React functionalities
import Button from 'react-bootstrap/esm/Button'//Import bootstrap Button component react-bootstrap library
import mtnlogo from './images/mtnlogo.jpg'//Import Image/logo
import Discovery from './images/discoverylogo.jpg'//Import Image/logo
import Capiteclogo from './images/capitec.jpg'//Import Image/logo
import Prosuslogo from './images/prosus.jpg'//Import Image/logo
import Purplegroup from './images/purplegroup.jpg'//Import Image/logo
import TelkomLogo from './images/telkomlogo.jpg'//import image/logo
import Imagebanner from './Imagebanner'//Imagebanner component
import './componentsCss/banner2and3.css'//CSS stylesheet
import './componentsCss/images.css'//CSS stylesheet

//Logos object
const logos=[
  {
    image: require('./images/mtnlogo.jpg'),
    entity: 'MTN',
    imgId: mtnlogo,//key
  },
  {
    image: require('./images/capitec.jpg'),
    entity: "Capitec",
    imgId: Capiteclogo,
  },
  {
    image: require('./images/discoverylogo.jpg'),
    entity:'Discovery',
    imgId: Discovery,
  },
  {
    image: require('./images/prosus.jpg'),
    entity: 'Prosus',
    imgId: Prosuslogo,
  },
  {
    image: require('./images/purplegroup.jpg'),
    entity: 'Purplegroup',
    imgId: Purplegroup,
  },
  {
    image: require('./images/telkomlogo.jpg'),
    entity: "Telkom",
    imgId: TelkomLogo
  }
]


//Function for Banner3 component
export default function Banner3() {//Export react component 
  return (
    <>
    <div id='banner3'>
    <div id='banner3Text'>
        <h2 id='banner3Head'>Own your first share</h2>
        <h4 className='head4'>Invent in the brands you know and love</h4>
    </div>
    <div id='logo-image-section'>
      {logos.map((logos)=>{
        return(
          <Imagebanner key={logos.imgId} image={logos.image} entity={logos.entity}/>
        )
      }
      )
      } 
    </div>
    <div id='banner3Btn'>
        <Button variant="danger" id='investBtn'>Start Investing</Button>
    </div>
    </div>
    </>
  )
}
