import React from 'react'
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap'

import NavbarComponent from '../components/NavbarComponent'
import InfoComponent from '../components/InfoComponent'
import FooterComponent from '../components/FooterComponent'

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
                
                <Form.Control style={{
                  lineHeight:3}} type="text" placeholder="Enter link here" />
                <Button>
                  Shrink it
                </Button>

              </InputGroup>
              
              <br />

              <p style={{
                textAlign:'center', 
                fontSize:20}}>
                  Empower your brand with custom-shrunk URLs and smart QR codes that bridge the gap between your physical presence and digital story</p>
              </div>
            </div>
            
            <div>
              <InfoComponent />
            </div>
          </Col>
        </Row>

      </div>

      <div>
        <FooterComponent />
      </div>

    </div>

    
    
  )
}

export default UrlShorter
