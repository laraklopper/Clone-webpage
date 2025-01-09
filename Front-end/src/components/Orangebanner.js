import React from 'react'// Import the React module to use React functionalities
import Tab from 'react-bootstrap/Tab';//Import the "Tab" component from the react - bootstrap library
import Tabs from 'react-bootstrap/Tabs';//Import the "Tabs" component from the react-bootstrap library
import Bannerbtn from './Bannerbtn';//Import bannerbtn component

export default function Orangebanner() {
  return (
    <>
      <div id='orange-banner-header'>
        <h3 id='orange-banner-heading'>Invest For Me</h3>
        <h3 id='orange-banner-subtitle'>Invest in a collection of shares/funds pre-selected by someone you reckon<br></br>
          has the smarts. And then, chillax.</h3>
      </div>
      <div id='orange-text-box-wrapper'>
        <div>
          <Tabs
            defaultActiveKey="bundles"
            id="fill-tab-example"
            className="mb-3"
            fill
            style={{ backgroundColor: " #F4942A"}}
          >
            <Tab eventKey="bundles" title="Bundles">
              <div className='text-box'>
                <div className='text-box-heading'>
                  <h5 className='orange-text-box-heading'>Bundles</h5>
                </div>
                <div className='box-text'>
                  <p className='text'>A bundle is an investment portfolio that is owned by an individual investor but<br></br>
                    after/managed by a professional money manager, which they recieve for a fee in return.</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="unittrusts" title="Unit Trusts">
              <div className='text-box'>
                <div className='text-box-heading'>
                  <h5 className='orange-text-box-heading'>Unit Trusts</h5>
                </div>
                <div className='box-text'>
                  <p className='text'>
                    ETFs, which are listed on an exchange, allow you to get your hands on a collection of shares<br></br> 
                    and other instruments that follow a market theme. One transaction, exposure to many shares.
                  </p>
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
