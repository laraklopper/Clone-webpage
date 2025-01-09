import React from 'react'// Import the React module to use React functionalities
import './componentsCss/banner2and3.css'//Css stylesheet 
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Banner4() {
  return (
    <div id='banner4'>
        <div id='banner4Header'>
              <h2 id='banner4Head'>Start, or continue, your investment journey!</h2>
        </div>
        <div className='blockWrapper'>
       
              <CardGroup id='cardGroup'>
                  <Card className='block'>
                      <Card.Body id='blockOne'>
                          <Card.Text className='block-text'>
                              <h3 className='head3'>How shares work</h3>
                        </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className='block'>
                      <Card.Body id='blockTwo'>
                          <Card.Text className='block-text'>
                              <h3 className='head3'>How much you <br></br> need to start </h3>
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className='block'>
                      <Card.Body id='blockThree'>
                          <Card.Text className='block-text'>
                            <h3 className='head3'>Investment <br></br>returns</h3>
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </CardGroup>
                    
                  
                </div>


        </div>

    
  )
}
