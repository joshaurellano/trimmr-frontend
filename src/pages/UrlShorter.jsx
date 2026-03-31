import React from 'react'
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap'

import NavbarComponent from '../components/NavbarComponent'

function UrlShorter() {
  return (
    <div style={{ 
      height: '100vh', 
      backgroundColor: '#f4f6fb', 
      overflowX: 'hidden' }}>

      <NavbarComponent />

      <div className='container'>
        <Row className='justify-content-center align-items-center'>
          <Col>
            <div style={{
              width:'100%',
              height:'100%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
            }}>
              <h1 style={{
                textAlign:'center',
                fontWeight:'bold'
              }}>URL Shortener</h1>
              <br />
              <div style={{
                width:'100%'}}>
              <InputGroup style={{ width: '100%' }}>
                
                <Form.Control type="text" placeholder="Enter your link" />
                <Button>
                  Shrink it
                </Button>

              </InputGroup>
              </div>
            </div>

          </Col>
        </Row>

      </div>

    </div>

    
    
  )
}

export default UrlShorter
