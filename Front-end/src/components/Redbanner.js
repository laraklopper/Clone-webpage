import React from 'react'// Import the React module to use React functionalities
// Bootstap
import Tab from 'react-bootstrap/Tab';//Import the "Tab" component from the react - bootstrap library
import Tabs from 'react-bootstrap/Tabs';//Import the "Tabs" component from the react-bootstrap library
// Images
import easyequaties from '../images/logo.jpg' //Import Image
import easycrypto from '../images/easycryto.jpg'//Import Image
import easyprop from './images/easyproperties.jpg';//Import Image
import easyetf from '../images/easyetfs.jpg'
//Import stylesheet
import './componentsCss/colourbanners.css'//CSS stylesheet for colour banners
import Bannerbtn from './Bannerbtn';//Import Bannerbtn component

//Function for Redbanner component
export default function Redbanner() {//Export react component
  const tabsStyle={
    backgroundColor: "#ed1747",
    fontweight: '600',
  }
  return (
    <>
    <div id='red-banner-header-text'>
        <h3 id='red-banner-heading'>Invest Myself</h3>
        <h3 id='red-banner-subtitle'>Find the companies you love right here and upgrade yourself to <br></br>
          shareholder status in a matter of clicks!</h3>
    </div>
    <div id='red-text-box-wrapper'>
      <div> 
       <Tabs defaultActiveKey="shares" 
       id="red-tab" 
       fill  
       className='tabs'
            style={tabsStyle}>
            <Tab eventKey="shares" title="Shares" className='tab'>
              <div className='text-box'>
                <div className='boxImage'>
                <img className='boxlogo' src={easyequaties} alt='boxlogo'/>
                </div>
                    <div className='box-text'>
                      <p className='text'>
                        Shares as you like them! Invest in a range of companies from local and international markets.
                      </p>                  
                  </div>
              </div>
            </Tab>
            <Tab eventKey="crypto" title="Crypto"  className='tab' >
              <div className='text-box'>
                <div className='boxImage'>
                  <img id='crypto-boxlogo' src={easycrypto} alt='EasyCrypto'/>
                  <div className='text-box'>
                    <div className='box-text'>
                      <p className='text'>
                        EasyCrypto is built to deliver the safest, easiest and most trusted platform to invest and and store all your crypto assests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="property" title="Property"  className='tab' style={{fontWeight:'bold'}}>
              <div className='text-box'>
                <div className='boxImage'>
                  <img src={easyprop} id='easyprop-boxlogo' alt='EasyProperties'/>
                  <div className='text-box'>
                    <div className='box-text'>
                      <p className='text'>
                        Invest frantically in properties selected by our expert panel. 
                        You'll have the oppurtunity to  earn capital gains, and dividends through rental income.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="etfs" title="ETFs" className='tab' >
              <div className='text-box'>
                <div className='boxImage'>
                  <img id='easyetfs-boxlogo' src={easyetf} alt='EasyEtfs'/>
                  <div className='text-box'>
                    <div className='box-text'>
                      <p className='text'>
                        A unique platform created to help you find the best ETF for you! Check out and compare the top performing and most popular ETFs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
      </div>
        <div>
          <Bannerbtn/>
        </div>  
   </div>
    </>
  )
}
